<script setup lang="ts" name="AccessTemplate">
import AccessInfo from '@/components/access/TheAccessInfo.vue'
import AccessStoreInfo from '@/components/access/TheAccessStoreInfo.vue'
import useHeaderStore from '@/stores/useHeaderStore'
const headerStore = useHeaderStore()
const { scrollToTop } = headerStore
scrollToTop()
</script>

<template>
  <AccessInfo />
  <AccessStoreInfo />
</template>

<style lang="scss" module="classes"></style>
