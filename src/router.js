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
    component: () => import('@/views/project/Index'),
    children: [
      {
        path: 'home',
        name: 'ProjectHome',
        component: () => import('@/views/project/home/Index')
      },
      {
        path: 'list',
        name: 'ProjectList',
        component: () => import('@/views/project/list/Index')
      }  
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router;