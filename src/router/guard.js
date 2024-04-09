export function createRouterGuard(router) {
  console.log('createRouterGuard', router)
  router.beforeEach((to, from) => {
    console.log(to, from)
    window.NProgress.start()
  })

  router.afterEach(() => {
    window.NProgress.done()
  })
}
