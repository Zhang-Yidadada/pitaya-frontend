import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/index.js'

import { setupI18n } from './locales'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupNProgress } from './plugins/nprogress'

async function setupApp() {
  const app = createApp(App)
  setupNProgress()
  // app.use(createPinia())
  setupStore(app)
  await setupRouter(app)
  setupI18n(app)
  app.mount('#app')
}

setupApp()
