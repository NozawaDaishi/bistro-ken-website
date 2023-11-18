import { createPinia } from 'pinia'

// Piniaインスタンスを作成する関数をエクスポート
export const setupPinia = () => {
  const pinia = createPinia()

  return pinia
}
