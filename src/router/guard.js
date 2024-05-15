export function createRouterGuard(router) {
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    window.NProgress.start()
    if (!window.localStorage.token && to.name !== 'login') {
      next({ name: 'login' })
    } else next()
  })

  router.afterEach(() => {
    window.NProgress.done()
  })
}
