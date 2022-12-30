<template lang="pug">

</template>

<script>
import { todoListStore } from '@/store';
import { storeToRefs } from 'pinia';

export default {
  name: 'KanbanView',
  setup() {
    const store = todoListStore()
    const { taskList } = storeToRefs(store)
    const { addTask } = store

    return {
      taskList,
      addTask
    }
  },
}
</script>