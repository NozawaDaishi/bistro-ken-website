<script setup lang="ts" name="HeaderTemplate">
import { INSTAGRAM_URL } from '@/consts'
import QrcodeVue from 'qrcode.vue'
import { storeToRefs } from 'pinia'
import useHeaderStore from '@/stores/useHeaderStore'
import useRouterFunctions from '@/composables/useRouterFunctions'

const { routerPush } = useRouterFunctions()
const headerStore = useHeaderStore()
const { isHoveredMenu, isHoveringInstagram, isScrolled } =
  storeToRefs(headerStore)
const { setHoveredMenu, setHoveringInstagram, scrollToTop } = headerStore
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
      <a :class="classes.list" @click.stop.prevent="routerPush('MenuPage')">
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/clipboard_regular_light.svg"
            alt="address_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.menu_list') }}
        </div>
      </a>
      <a :class="classes.list" @click.stop.prevent="routerPush('AccessPage')">
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/location_dot_solid_light.svg"
            alt="address_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.address') }}
        </div>
      </a>
      <a :class="classes.list" @click.stop.prevent="routerPush('ContactPage')">
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/paper_plane_regular_light.svg"
            alt="contact_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.contact_form') }}
        </div>
      </a>
      <a
        :href="INSTAGRAM_URL"
        target="_blank"
        :class="[classes.list, classes.instagram]"
        @mouseenter="setHoveringInstagram(true)"
        @mouseleave="setHoveringInstagram(false)"
      >
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/instagram_light.svg"
            alt="instagram_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.latest_information') }}
        </div>
        <div v-if="isHoveringInstagram" :class="classes.qrCode">
          <qrcode-vue :value="INSTAGRAM_URL"></qrcode-vue>
        </div>
      </a>
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
        <a :class="classes.btn" @click.stop.prevent="routerPush('MenuPage')">
          <div :class="classes.icon">
            <img
              src="@/assets/icons/header/clipboard_regular_dark.svg"
              alt="menu_icon"
            />
          </div>
          <div :class="classes.text">
            {{ $t('nav.menu') }}
          </div>
        </a>
        <a :class="classes.btn" @click.stop.prevent="routerPush('AccessPage')">
          <div :class="classes.icon">
            <img
              src="@/assets/icons/header/location_dot_solid_dark.svg"
              alt="address_icon"
            />
          </div>
          <div :class="classes.text">
            {{ $t('nav.access') }}
          </div>
        </a>
        <a :class="classes.btn" @click.stop.prevent="routerPush('ContactPage')">
          <div :class="classes.icon">
            <img
              src="@/assets/icons/header/paper_plane_regular_dark.svg"
              alt="contact_icon"
            />
          </div>
          <div :class="classes.text">
            {{ $t('nav.contact') }}
          </div>
        </a>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          :class="[classes.btn, classes.instagram]"
          @mouseenter="setHoveringInstagram(true)"
          @mouseleave="setHoveringInstagram(false)"
        >
          <div :class="classes.icon">
            <img
              src="@/assets/icons/header/instagram_dark.svg"
              alt="instagram_icon"
            />
          </div>
          <div :class="classes.text">
            {{ $t('nav.instagram') }}
          </div>
          <div v-if="isHoveringInstagram" :class="classes.qrCode">
            <qrcode-vue :value="INSTAGRAM_URL"></qrcode-vue>
          </div>
        </a>
      </div>
    </button>
    <button
      :class="[classes.scrollToTopBtn, { [classes.isScrolled]: !isScrolled }]"
      @click.stop.prevent="scrollToTop()"
    >
      <div :class="classes.icon">
        <img
          src="@/assets/icons/header/scroll_to_top_icon.svg"
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
    background-color 0.1s ease-in-out;

  &.isScrolled {
    width: 80px;
    background-color: var(--primary-color-transparent);
    &:hover {
      background-color: var(--primary-color);
    }
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
      opacity 0s linear 0.5s,
      visibility 0.3s ease-in-out;

    &.isScrolled {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0s ease-in-out,
        visibility 0s ease-in-out;
    }
    .list {
      display: flex;
      align-items: center;
      margin-left: 45px;
      cursor: pointer;
      .icon {
        // margin-bottom: 3px;
        width: 18px;
      }
      .text {
        @include font12;
        color: white;
        margin-left: 6px;
        font-weight: lighter;
        @include mq(short_header) {
          display: none;
        }
      }
    }
    .instagram {
      position: relative;
      .qrCode {
        position: absolute;
        top: 30px;
        left: 0;
        height: 80px;
        width: 80px;
        padding: 60px;
        border: 0.1px solid var(--dark-gray);
        border-radius: 5px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
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
    border: 0.1px solid var(--dark-gray);
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
      height: 350px;
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
      align-items: flex-start;
      justify-content: space-around;
      height: 0;
      width: 0;
      opacity: 0;
      visibility: hidden;
      transition:
        height 0.3s ease-in-out,
        width 0.3s ease-in-out,
        opacity 0.1s ease,
        visibility 0.1s ease;
      &.isHoveredMenu {
        height: inherit;
        width: inherit;
        opacity: 1;
        visibility: visible;
        transition:
          height 0s ease-in-out,
          width 0s ease-in-out,
          opacity 0s ease 0.3s,
          visibility 0s ease 0.3s;
      }
      .btn {
        display: flex;
        align-items: center;
        padding: 5px 50px;
        cursor: pointer;
        .icon {
          display: flex;
          width: 20px;
        }
        .text {
          margin-left: 10px;
        }
      }
      .instagram {
        position: relative;
        .qrCode {
          position: absolute;
          top: 0px;
          left: -80px;
          height: 80px;
          width: 80px;
          padding: 60px;
          border: 0.1px solid var(--dark-gray);
          border-radius: 5px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
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
      background-color: var(--light-gray-transparent);
      border: 0.1px solid var(--dark-gray);
    }
  }
}
</style>
