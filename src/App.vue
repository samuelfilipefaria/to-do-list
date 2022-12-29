<template lang="pug">
div(class="container grid-xs py-2")
  h1(class="text-center") Todo list vue
  form(@submit.prevent="addTask(currentTask)")
    div(class="input-group")
      input(type="text" v-model="currentTask.description" class="form-input" placeholder="Item a fazer...")
      button(class="btn btn-primary input-group-btn")
        i(class="icon icon-plus")
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
