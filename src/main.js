import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { setupRouter } from './router'
import './styles/index.js'
import { setupNProgress } from './plugins/nprogress'

/// demo
import { a } from '@pkg/axios'
console.log(a)
///

const app = createApp(App)
setupNProgress()
app.use(createPinia())
setupRouter(app)
app.mount('#app')
