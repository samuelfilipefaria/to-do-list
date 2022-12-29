<template lang="pug">
tr
  td
    span.mr-2(:class="{done: task.checked == true}") {{ task.description }}
  td
    button.btn.btn-success.mr-2.tooltip(@click="$emit('toggleTask', task)" :data-tooltip="btnSuccessTooltip")
      i.icon.icon-check(v-if="task.checked == false")
      i.icon.icon-stop(v-else)
    button.btn.btn-error.tooltip(@click="$emit('deleteTask', task)" data-tooltip="Deletar tarefa")
      i.icon.icon-delete
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    btnSuccessTooltip() {
      if(this.task.checked) return "Desmarcar tarefa";
      return "Marcar tarefa como concluída";
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>