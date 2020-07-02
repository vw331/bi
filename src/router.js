import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {  //项目层
    path: '/project',
    name: 'ProjectIndex',
    component: () => import('@/views/project/Index'),
    redirect: '/project/home',
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
        name: 'Us',
        component: () => import('@/views/project/aboutUs/Index')
      }
    ]
  },
  {  //设备层
    path: '/device/:id',
    name: 'Device',
    component: () => import('@/views/device/Index'),
    redirect: '/device/:id/home',
    children: [
      { // 主页 
        path: 'home',
        name: 'DevicetHome',
        component: () => import('@/views/device/home/Index')
      },
      { // 项目列表
        path: 'list',
        name: 'DeviceListWrap',
        component: () => import('@/views/device/list/Index'),
        redirect: '/device/:id/list/all',
        children: [
          {  //列表页
            path: 'all',
            name: 'DeviceList',
            component: () => import('@/views/device/list/List')
          },
          {
            path: ':id/view',
            name: 'DeviceDetail',
            component: () => import('@/views/device/list/Detail')
          }
        ]
      },
      { // 项目分析
        path: 'analysis', 
        name: 'DeviceAnalysis',
        component: () => import('@/views/device/analysis/Index')
      },
      { // 数据查询
        path: 'query',
        name: 'DeviceQuery',
        component: () => import('@/views/device/query/Index')
      },
      { // 项目日志
        path: 'log',
        name: 'DeviceLog',
        component: () => import('@/views/device/log/Index')
      },
      { // 历史曲线
        path: 'history',
        name: 'DeviceHistory',
        component: () => import('@/views/device/history/Index')
      },
      {
        path: 'us',
        name: 'Us',
        component: () => import('@/views/project/aboutUs/Index')
      }
    ]
  }, 
  {  //设备详情
    path: '/device_info/:id',
    name: 'DeviceInfo',
    component: () => import('@/views/device_info/Index'),
    children: [
      {  //设备监控
        path: 'board',
        name: 'DeviceInfoBoard',
        component: () => import('@/views/device_info/board/Index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router;