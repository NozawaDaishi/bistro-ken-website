<script setup lang="ts" name="HeaderTemplate">
import { storeToRefs } from 'pinia'
import useHeaderStore from '@/stores/useHeaderStore'
import useRouterFunctions from '@/composables/useRouterFunctions'

const { routerPush } = useRouterFunctions()
const headerStore = useHeaderStore()
const { isHoveredMenu, isHoveredScrollToTopBtn, isScrolled } =
  storeToRefs(headerStore)
const { setHoveredMenu, setHoveredScrollToTopBtn, scrollToTop } = headerStore
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
      <!-- TODO: リンクの追加 -->
      <button>
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/instagram_light.svg"
            alt="instagram_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.latest_information') }}
        </div>
      </button>
    </nav>
  </header>
  <div :class="classes.operation">
    <button
      :class="[classes.menu, { [classes.isScrolled]: !isScrolled }]"
      @mouseenter="setHoveredMenu(true)"
      @mouseleave="setHoveredMenu(false)"
    >
      <div
        :class="[classes.menu_icon, { [classes.isHoveredMenu]: isHoveredMenu }]"
      >
        <img
          src="@/assets/icons/header/arrow_pointer_solid.svg"
          alt="arrow_pointer_solid"
        />
      </div>
      <div
        :class="[classes.menu_list, { [classes.isHoveredMenu]: isHoveredMenu }]"
      >
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/instagram_dark.svg"
            alt="instagram_icon"
          />
        </div>
      </div>
    </button>
    <button
      :class="[classes.scrollToTopBtn, { [classes.isScrolled]: !isScrolled }]"
      @click.stop.prevent="scrollToTop()"
      @mouseenter="setHoveredScrollToTopBtn(true)"
      @mouseleave="setHoveredScrollToTopBtn(false)"
    >
      <div :class="classes.icon">
        <img
          v-if="!isHoveredScrollToTopBtn"
          src="@/assets/icons/header/scroll_to_top_icon_dark.svg"
          alt="scrollToTopBtnIcon"
        />
        <img
          v-if="isHoveredScrollToTopBtn"
          src="@/assets/icons/header/scroll_to_top_icon_light.svg"
          alt="scrollToTopBtnIcon"
        />
      </div>
    </button>
  </div>
</template>

<style lang="scss" module="classes">
header {
  position: fixed;
  z-index: 100;
  top: 1vw;
  left: 1vw;
  height: 80px;
  width: 98vw;
  border-radius: 50px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    width 0.5s ease-in-out,
    background-color 0.5s ease-in-out;

  &.isScrolled {
    width: 80px;
    background-color: var(--primary-color-transparent);
  }
  .logoTitle {
    display: flex;
    height: 50px;
    cursor: pointer;

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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 20px;
      }
      .text {
        @include font12;
        color: white;
        margin-top: 5px;
      }
    }
  }
}
.operation {
  .menu {
    position: fixed;
    z-index: 100;
    top: 2vw;
    right: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    background-color: var(--light-gray);
    border-radius: 10px;
    height: 50px;
    width: 50px;
    opacity: 1;
    transform: translateY(0px);
    transition:
      height 0.3s ease-in-out,
      width 0.3s ease-in-out,
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    &.isScrolled {
      opacity: 0;
      transform: translateY(50px);
    }
    &:hover {
      height: 300px;
      width: 200px;
    }
    &_icon {
      display: flex;
      width: 10px;
      opacity: 1;
      visibility: visible;
      transition:
        height 0.3s ease-in-out,
        width 0.3s ease-in-out,
        opacity 0.3s linear 0.3s,
        visibility 0.3s linear 0.3s;
      &.isHoveredMenu {
        height: 0;
        width: 0;
        opacity: 0;
        visibility: hidden;
      }
    }
    &_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
      transition:
        width 0.3s ease-in-out,
        height 0.3s ease-in-out,
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
      &.isHoveredMenu {
        width: inherit;
        height: inherit;
        opacity: 1;
        visibility: visible;
      }
      .icon {
        display: flex;
        width: 20px;
      }
    }
  }
  .scrollToTopBtn {
    position: fixed;
    z-index: 100;
    bottom: 1vw;
    right: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 80px;
    width: 100px;
    opacity: 1;
    transform: translateY(0px);
    transition:
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;
    &.isScrolled {
      opacity: 0;
      transform: translateY(50px);
    }
    .icon {
      display: flex;
      width: 80px;
    }
    &:hover {
      background-color: var(--black-transparent);
    }
  }
}
</style>
