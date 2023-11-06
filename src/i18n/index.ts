import { createI18n } from 'vue-i18n'
import messages from './locales/messages'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export default i18n
