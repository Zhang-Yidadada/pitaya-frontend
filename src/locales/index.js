import { createI18n } from 'vue-i18n'

import messages from './locale'

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages,
  // If you want to use the Composition API mode, you need to set it to false.
  legacy: false
})

export function setupI18n(app) {
  app.use(i18n)
}
