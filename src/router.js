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
      { // 主页 
        path: 'home',
        name: 'ProjectHome',
        component: () => import('@/views/project/home/Index')
      },
      { // 项目列表
        path: 'list',
        name: 'ProjectList',
        component: () => import('@/views/project/list/Index')
      },
      { // 项目分析
        path: 'analysis', 
        name: 'ProjectAnalysis',
        component: () => import('@/views/project/analysis/Index')
      },
      { // 数据查询
        path: 'query',
        name: 'ProjectQuery',
        component: () => import('@/views/project/query/Index')
      },
      { // 项目日志
        path: 'log',
        name: 'ProjectLog',
        component: () => import('@/views/project/log/Index')
      },
      { // 历史曲线
        path: 'history',
        name: 'ProjectHistory',
        component: () => import('@/views/project/history/Index')
      },
      {
        path: 'us',
        name: 'ProjectUs',
        component: () => import('@/views/project/aboutUs/Index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router;