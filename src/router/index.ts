import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/pages/top/TopPage.vue'

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
