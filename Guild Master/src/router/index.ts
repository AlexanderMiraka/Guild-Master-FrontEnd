import BaseCard from '@/components/base/BaseCard.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: BaseCard },
    { path: '/login', component: AppFooter },
  ],
})

export default router
