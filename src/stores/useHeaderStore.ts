import { defineStore } from 'pinia'

interface State {
  isScrolled: boolean
  routerViewWrapperRef: HTMLElement | null
}

const useHeaderStore = defineStore('useHeader', {
  state: (): State => ({
    isScrolled: false,
    routerViewWrapperRef: null,
  }),
  actions: {
    /**
     * スクロール状態を設定します。
     * @param value スクロールされたかどうかの真偽値。
     */
    setScrolled(value: boolean) {
      this.isScrolled = value
    },
  },
})

export default useHeaderStore
