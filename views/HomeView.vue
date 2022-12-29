<template lang="pug">
div.add-task-form
  h2 Adicionar tarefa:
  form(@submit.prevent="addTask(currentTask)")
    div.input-group
      input.form-input(type="text" v-model="currentTask.description" placeholder="Item a fazer...")
      button.btn.btn-primary.input-group-btn.tooltip(data-tooltip="Criar tarefa")
        i.icon.icon-plus
div.task-list
  h2 Tarefas:
  table.table(v-if="todoTasks.length != 0")
    thead
      tr
        th Tarefa
        th Ações
    tbody
      task-item(
        v-for="t in todoTasks"
        :key="t.id"
        :task="t"
        @toggleTask='toggleTask'
        @deleteTask='deleteTask'
      )
  p.text-error(v-else) Não há tarefas
</template>

<script>
import TaskItem from '@/components/TaskItem';

export default {
  name: 'HomeView',
  components: {
    TaskItem
  },
  data() {
    return {
      todoTasks: [],
      currentTask: {
        description: "",
        checked: false
      },
    };
  },
  methods: {
    addTask(currentTask) {
      currentTask.id = Date.now() + Math.floor(Math.random() * 100);
      this.todoTasks.push(this.currentTask);
      this.currentTask = { description: "", checked: false };
    },
    findTask(task) {
      const index = this.todoTasks.findIndex(item => item.id === task.id);
      return index;
    },
    toggleTask(task) {
      if(this.findTask(task) > -1) {
        this.todoTasks[this.findTask(task)].checked = !this.todoTasks[this.findTask(task)].checked;
      }
    },
    deleteTask(task) {
      if(this.findTask(task) > -1) {
        this.todoTasks.splice(this.findTask(task), 1);
      }
    }
  }
}
</script>

<style scoped>
.add-task-form, .task-list {
  margin-top: 4rem;
}
</style>
