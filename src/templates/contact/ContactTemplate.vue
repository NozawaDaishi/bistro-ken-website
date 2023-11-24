<script setup lang="ts" name="ContactTemplate">
import useHeaderStore from '@/stores/useHeaderStore'
const headerStore = useHeaderStore()
const { scrollToTop } = headerStore
scrollToTop()
</script>

<template>
  <div></div>
</template>

<style lang="scss" module="classes"></style>
