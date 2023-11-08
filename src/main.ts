import '@/global.scss'
import App from './App.vue'
import { createApp } from 'vue'
import './style.css'
import i18n from '@/i18n'
import router from './router'
import { setupPinia } from './stores'

const app = createApp(App)
const pinia = setupPinia()

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
