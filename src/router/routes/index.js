export const customRoutes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/base/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/common/login/index.vue')
  },
  {
    name: 'monitor',
    path: '/monitor',
    component: () => import('@/layout/base/index.vue'),
    children: [
      {
        name: 'online',
        path: '/monitor/online',
        component: () => import('@/views/monitor/online/index.vue')
      },
      {
        name: 'schedule',
        path: '/monitor/schedule',
        component: () => import('@/views/monitor/schedule/index.vue')
      }
    ]
  }
]
