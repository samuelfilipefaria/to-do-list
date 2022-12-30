<template lang="pug">
div.add-task-form
  h2 Adicionar tarefa:
  form(@submit.prevent="createTask(currentTask)")
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
        @toggleTask='toggleTask'
        @deleteTask='deleteTask'
      )
  p.text-error(v-else) Não há tarefas
</template>

<script>
import TaskItem from '@/components/TaskItem';
import { todoListStore } from '@/store';
import { storeToRefs } from 'pinia';

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
  setup() {
    const store = todoListStore()
    const { taskList, loading } = storeToRefs(store)
    const { addTask, invertChecked, removeTaskFromList } = store

    return {
      taskList,
      loading,
      addTask,
      invertChecked,
      removeTaskFromList
    }
  },
  methods: {
    async createTask(currentTask) {
      if(currentTask.description.trim() != "") {
        this.loading = true;
        setTimeout(() => {
          this.addTask(currentTask);
          this.currentTask = { description: "", checked: false };
          this.loading = false;
        }, 400);
      }
    },
    findTaskIndex(task) {
      const index = this.taskList.findIndex(item => item.id === task.id);
      return index;
    },
    toggleTask(task) {
      if(this.findTaskIndex(task) > -1) this.invertChecked(this.findTaskIndex(task));
    },
    deleteTask(task) {
      if(this.findTaskIndex(task) > -1) this.removeTaskFromList(this.findTaskIndex(task));
    }
  }
}
</script>

<style scoped>
.add-task-form, .task-list {
  margin-top: 4rem;
}
</style>
