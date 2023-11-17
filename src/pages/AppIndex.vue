<script setup lang="ts" name="AppIndex">
import 'vue-loading-overlay/dist/css/index.css'
import Header from '@/templates/HeaderTemplate.vue'
import Footer from '@/templates/FooterTemplate.vue'
import { onMounted, onUnmounted } from 'vue'
import useHeaderStore from '@/stores/useHeaderStore'
import { storeToRefs } from 'pinia'

const headerStore = useHeaderStore()
const { routerViewWrapperRef } = storeToRefs(headerStore)
const { setScrolled } = headerStore

/**
 * スクロールイベントのハンドラ。
 * スクロール位置に基づいて、ヘッダーの状態を更新します。
 */
const handleScroll = () => {
  const scrollPosition = routerViewWrapperRef.value?.scrollTop
  setScrolled((scrollPosition ?? 0) > 300)
}

onMounted(() => {
  if (routerViewWrapperRef.value) {
    routerViewWrapperRef.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (routerViewWrapperRef.value) {
    routerViewWrapperRef.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div :class="classes.container">
    <Header />
    <div ref="routerViewWrapperRef" :class="classes.routerView_wrapper">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .routerView_wrapper {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
