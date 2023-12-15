<script setup lang="ts" name="TopTemplate">
import TopMain from '@/components/top/TheTopMain.vue'
import TopNews from '@/components/top/TheTopNews.vue'
import TopStoreInfo from '@/components/top/TheTopStoreInfo.vue'
import useHeaderStore from '@/stores/useHeaderStore'
const headerStore = useHeaderStore()
const { scrollToTop } = headerStore
scrollToTop()
</script>

<template>
  <TopMain />
  <TopNews />
  <TopStoreInfo />
</template>
