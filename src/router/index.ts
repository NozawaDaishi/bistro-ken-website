import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import AppIndex from '@/pages/AppIndex.vue'
import ContactPage from '@/pages/contact/ContactPage.vue'
import TopPage from '@/pages/top/TopPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'AppIndex',
    component: AppIndex,
    redirect: '',
    children: [
      {
        path: '',
        name: 'TopPage',
        component: TopPage,
      },
      {
        path: 'contact',
        name: 'ContactPage',
        component: ContactPage,
      },
    ],
  },
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
