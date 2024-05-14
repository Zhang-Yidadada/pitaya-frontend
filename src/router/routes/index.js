export const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/base/index.vue')
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
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]
