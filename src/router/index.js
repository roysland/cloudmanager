import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateService from '@/views/CreateService.vue'
import ServiceRoutes from '@/views/service'
import Login from '@/views/Login'
import Callback from '@/views/Callback'
import ServiceWizard from '@/views/serviceWizard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/createService',
    name: 'CreateService',
    component: CreateService
  },
  ServiceRoutes,
  ServiceWizard,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
