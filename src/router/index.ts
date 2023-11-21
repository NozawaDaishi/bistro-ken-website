import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import AppIndex from '@/pages/AppIndex.vue'
import AccessPage from '@/pages/access/AccessPage.vue'
import ContactPage from '@/pages/contact/ContactPage.vue'
import MenuPage from '@/pages/menu/MenuPage.vue'
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
        path: 'menu',
        name: 'MenuPage',
        component: MenuPage,
      },
      {
        path: 'access',
        name: 'AccessPage',
        component: AccessPage,
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
