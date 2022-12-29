<template lang="pug">
div.container.grid-xs.py-2
  h1.text-center Todo list vue
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
        tr(v-for="task in todoTasks" :key="task.id")
          td {{ task.description }}
          td
            button.btn.btn-success.mr-2.tooltip(data-tooltip="Marcar tarefa como concluída")
              i.icon.icon-check
            button.btn.btn-error.tooltip(data-tooltip="Deletar tarefa")
              i.icon.icon-delete
    p.text-center.text-error(v-else) Não há tarefas
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      todoTasks: [],
      currentTask: {
        description: ""
      },
    };
  },
  methods: {
    addTask(currentTask) {
      currentTask.id = Date.now() + Math.floor(Math.random() * 100)
      this.todoTasks.push(this.currentTask);
      this.currentTask = { description: "" };
    }
  }
}
</script>

<style>
.add-task-form, .task-list {
  margin-top: 4rem;
}
</style>
