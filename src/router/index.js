import { createRouter, createWebHistory } from 'vue-router'
import Vue2 from '@/views/Vue2.vue'

const routes = [
  {
    path: '/',
    name: 'Vue2',
    component: Vue2
  },
  {
    path: '/vue3',
    name: 'Vue3',
    component: () => import('@/views/Vue3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
