<script setup lang="ts" name="ContactTemplate">
import ContactForm from '@/components/contact/TheContactForm.vue'
import useHeaderStore from '@/stores/useHeaderStore'
const headerStore = useHeaderStore()
const { scrollToTop } = headerStore
scrollToTop()
</script>

<template>
  <ContactForm />
</template>

<style lang="scss" module="classes"></style>
