import TheHomepage from '@/components/views/TheHomepage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: TheHomepage },
  ],
})

export default router
