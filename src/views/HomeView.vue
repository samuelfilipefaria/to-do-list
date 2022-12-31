<template lang="pug">
div.add-task-form
  h2 Adicionar tarefa:
  form(@submit.prevent="newTask(currentTask)")
    div.input-group
      input.form-input(type="text" v-model="currentTask.description" placeholder="Item a fazer...")
      button.btn.btn-primary.input-group-btn.tooltip(:class="{loading: loading == true}" data-tooltip="Criar tarefa")
        i.icon.icon-plus
div.task-list
  h2 Tarefas:
  task-list(:tasks="taskList")
</template>

<script>
import TaskList from '@/components/TaskList';
import { todoListStore } from '@/store';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    TaskList
  },
  data() {
    return {
      currentTask: {
        description: "",
        checked: false
      },
    };
  },
  computed: {
    ...mapState(todoListStore, ['taskList', 'loading'])
  },
  methods: {
    newTask(task) {
      this.addTask(task);
      this.currentTask = { description: "", checked: false };
    },
    ...mapActions(todoListStore, ['addTask'])
  }
}
</script>

<style scoped>
.add-task-form, .task-list {
  margin-top: 4rem;
}
</style>
