<script setup lang="ts" name="HeaderTemplate">
import { storeToRefs } from 'pinia'
import useHeaderStore from '@/stores/useHeaderStore'
import useRouterFunctions from '@/composables/useRouterFunctions'

const { routerPush } = useRouterFunctions()
const headerStore = useHeaderStore()
const { isScrolled } = storeToRefs(headerStore)
</script>

<template>
  <header :class="[{ [classes.isScrolled]: isScrolled }]">
    <div :class="classes.logoTitle" @click.stop.prevent="routerPush('TopPage')">
      <img
        :class="[classes.logo, { [classes.isScrolled]: isScrolled }]"
        src="@/assets/icons/header/logo.svg"
        alt="logo"
      />
      <img
        :class="[classes.title, { [classes.isScrolled]: isScrolled }]"
        src="@/assets/icons/header/title.svg"
        alt="title"
      />
    </div>
    <nav :class="[{ [classes.isScrolled]: isScrolled }]">
      <button @click.stop.prevent="routerPush('ContactPage')">
        {{ $t('nav.contact') }}
      </button>
    </nav>
  </header>
  <div :class="[classes.operation, { [classes.isScrolled]: !isScrolled }]">
    <button :class="classes.menu">
      <div :class="classes.icon">
        <img src="@/assets/icons/header/logo.svg" alt="logo" />
      </div>
    </button>
    <button :class="classes.scrollTopBtn">
      <div :class="classes.icon">
        <img
          src="@/assets/icons/header/arrow-up-long-solid.svg"
          alt="scrollTopBtnIcon"
        />
      </div>
    </button>
  </div>
</template>

<style lang="scss" module="classes">
header {
  position: fixed;
  z-index: 100;
  top: 15px;
  left: 1vw;
  height: 80px;
  width: 98vw;
  border-radius: 50px;
  box-shadow: 0 3px 8px var(--black-transparent);
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    width 0.5s ease-in-out,
    left 0.5s ease-in-out,
    background-color 0.5s ease-in-out;

  &.isScrolled {
    width: 80px;
    background-color: var(--primary-color-transparent);
  }
  .logoTitle {
    display: flex;
    height: 50px;

    .logo {
      width: 80px;
      margin-left: 15px;
      transition: margin-left 0.5s ease-in-out;
      &.isScrolled {
        margin-left: 0;
      }
    }
    .title {
      margin-left: 15px;
      opacity: 1;
      visibility: visible;
      transition:
        opacity 0s linear 0.15s,
        visibility 0.3s ease-in-out;

      &.isScrolled {
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.3s ease-in-out,
          visibility 0s linear 1s;
      }
    }
  }
  nav {
    display: flex;
    margin-right: 35px;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0s linear 0.4s,
      visibility 0.3s ease-in-out;

    &.isScrolled {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0s linear 1s;
    }
    button {
      @include font14;
      color: white;
    }
  }
}
.operation {
  opacity: 1;
  visibility: visible;
  transition:
    opacity 0s linear 0.2s,
    visibility 0.3s ease;

  &.isScrolled {
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease,
      visibility 0s linear 0.2s;
  }
  .menu {
    position: fixed;
    z-index: 100;
    top: 15px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    background-color: var(--black-transparent);
    border-radius: 100px;
    height: 80px;
    width: 80px;
    box-shadow: 0 3px 8px var(--black-transparent);
    .icon {
      display: flex;
      height: 50px;
    }
  }
  .scrollTopBtn {
    position: fixed;
    z-index: 100;
    bottom: 15px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    background-color: var(--black-transparent);
    border-radius: 100px;
    height: 80px;
    width: 80px;
    box-shadow: 0 3px 8px var(--black-transparent);
    .icon {
      display: flex;
      height: 50px;
    }
  }
}
</style>
