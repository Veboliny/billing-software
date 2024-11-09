// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../views/LoginVue.vue'
import RegisterVue from '../views/RegisterVue.vue'
import HomeVue from '../views/HomeVue.vue'

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
  },
  {
    path: '/home',
    name: 'home',
    component: HomeVue
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router