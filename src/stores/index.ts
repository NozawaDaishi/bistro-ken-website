import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from '@/router'

// Piniaインスタンスを作成する関数をエクスポート
export const setupPinia = () => {
  const pinia = createPinia()

  // Piniaプラグインとしてrouterを追加
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  return pinia
}
