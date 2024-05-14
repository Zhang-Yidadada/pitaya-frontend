import { createRouter, createWebHistory } from 'vue-router'

import { customRoutes } from './routes'
import { createRouterGuard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...customRoutes]
})

export async function setupRouter(app) {
  app.use(router)
  createRouterGuard(router)

  await router.isReady()
}
