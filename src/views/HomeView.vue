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
  table.table(v-if="taskList.length != 0")
    thead
      tr
        th Tarefa
        th Ações
    tbody
      task-item(
        v-for="t in taskList"
        :key="t.id"
        :task="t"
        @toggleTask='toggleTask(t)'
        @deleteTask='deleteTask(t)'
      )
  p.text-error(v-else) Não há tarefas
</template>

<script>
import TaskItem from '@/components/TaskItem';
import { todoListStore } from '@/store';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    TaskItem
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
    ...mapActions(todoListStore, ['addTask', 'toggleTask', 'deleteTask'])
  }
}
</script>

<style scoped>
.add-task-form, .task-list {
  margin-top: 4rem;
}
</style>
