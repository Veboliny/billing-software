// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../views/LoginVue.vue'
import RegisterVue from '../views/RegisterVue.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
