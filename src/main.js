import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { setupRouter } from './router'
import './styles/index.js'
import { setupNProgress } from './plugins/nprogress'

async function setupApp() {
  const app = createApp(App)
  setupNProgress()
  app.use(createPinia())
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
