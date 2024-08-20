import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'button',
      component: ButtonView
    },
    {
      path: '/card',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue')
    }
  ],
  // 添加激活样式
  linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
})

export default router
