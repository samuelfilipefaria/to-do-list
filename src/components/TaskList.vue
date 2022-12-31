<template lang="pug">
table.table(v-if="tasks.length != 0")
  thead
    tr
      th Tarefa
      th Ações
  tbody
    tr(v-for="t in tasks" :key="t.id")
      td
        span.mr-2(:class="{done: t.checked == true}") {{ t.description }}
      td
        button.btn.btn-success.mr-2.tooltip(@click="toggleTask(t)" :data-tooltip="btnSuccessTooltip(t)")
          i.icon.icon-check(v-if="t.checked == false")
          i.icon.icon-stop(v-else)
        button.btn.btn-error.tooltip(@click="deleteTask(t)" data-tooltip="Deletar tarefa")
          i.icon.icon-delete
p.text-error(v-else) Não há tarefas
</template>

<script>
import { todoListStore } from '@/store';
import { mapActions } from 'pinia';

export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Object,
      required: true
    }
  },
  methods: {
    btnSuccessTooltip(task) {
      if(task.checked) return "Desmarcar tarefa";
      return "Marcar tarefa como concluída";
    },
    ...mapActions(todoListStore, ['toggleTask', 'deleteTask'])
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>