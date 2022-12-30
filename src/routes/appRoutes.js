import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/kanban', component: () => import('@/views/kanban/KanbanView.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router