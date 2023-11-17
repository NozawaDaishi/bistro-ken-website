import { defineStore } from 'pinia'

interface State {
  isHoveredMenu: boolean
  isHoveredScrollToTopBtn: boolean
  isScrolled: boolean
  routerViewWrapperRef: HTMLElement | null
}

const useHeaderStore = defineStore('useHeader', {
  state: (): State => ({
    isHoveredMenu: false,
    isHoveredScrollToTopBtn: false,
    isScrolled: false,
    routerViewWrapperRef: null,
  }),
  actions: {
    /**
     * menuのホバー状態を設定します。
     * @param value menuがホバーされたかどうかの真偽値。
     */
    setHoveredMenu(value: boolean) {
      this.isHoveredMenu = value
    },
    /**
     * scrollToTopBtnのホバー状態を設定します。
     * @param value scrollToTopBtnがホバーされたかどうかの真偽値。
     */
    setHoveredScrollToTopBtn(value: boolean) {
      this.isHoveredScrollToTopBtn = value
    },
    /**
     * スクロール状態を設定します。
     * @param value スクロールされたかどうかの真偽値。
     */
    setScrolled(value: boolean) {
      this.isScrolled = value
    },
    /**
     * トップにスクロールする関数
     *
     */
    scrollToTop() {
      this.routerViewWrapperRef?.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
})

export default useHeaderStore
