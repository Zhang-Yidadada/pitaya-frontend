import { createPinia } from 'pinia'

export function setupStore(app) {
  const store = createPinia()
  store.use((context) => {
    console.log(context)
  })
  app.use(store)
}
