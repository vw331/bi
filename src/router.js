import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index')
  },
  {
    path: '/project',
    name: 'ProjectIndex',
    component: () => import('@/views/project/Index')
  }
]

const router = new VueRouter({
  routes
})

export default router;