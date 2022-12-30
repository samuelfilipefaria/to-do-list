import { defineStore } from 'pinia'

export const todoListStore = defineStore('todoList', {
  state: () => ({ taskList: [], loading: false }),
  getters: {

  },
  actions: {
    addTask(task) {
      task.id = Date.now() + Math.floor(Math.random() * 100);
      this.taskList.push(task);
    },
    invertChecked(index) {
      this.taskList[index].checked = !this.taskList[index].checked;
    },
    removeTaskFromList(index) {
      this.taskList.splice(index, 1);
    }
  }
});
