<script setup lang="ts" name="FooterTemplate"></script>

<template>
  <div :class="classes.container">
    <div :class="classes.produce">
      <p :class="classes.text">{{ $t('commons.produced_by') }}</p>
      <p :class="classes.name">{{ $t('commons.producer') }}</p>
    </div>
    <!-- TODO: リンク追加 -->
    <button :class="classes.information">
      <div :class="classes.information_wrapper">
        <div :class="classes.icon">
          <img
            src="@/assets/icons/header/instagram_light.svg"
            alt="instagram_icon"
          />
        </div>
        <div :class="classes.text">
          {{ $t('nav.latest_information') }}
        </div>
      </div>
    </button>
    <div :class="classes.copyright">
      <p :class="classes.text">{{ $t('commons.copyright') }}</p>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @include mq(sp) {
    flex-direction: column;
  }
  .produce {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.3vw;
    @include mq(sp) {
      width: 33.3vh;
    }
    .text {
      @include font12;
      color: var(--dark-gray);
    }
    .name {
      @include font24Bold;
      color: var(--dark-gray);
      margin-left: 10px;
    }
  }
  .information {
    width: 33.3vw;
    display: flex;
    justify-content: center;
    @include mq(sp) {
      width: 33.3vh;
    }
    &_wrapper {
      height: 70px;
      width: 25vw;
      background-color: var(--primary-color-transparent);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      @include mq(sp) {
        width: 25vh;
      }
      &:hover {
        background-color: var(--primary-color);
      }
      .icon {
        width: 20px;
      }
      .text {
        @include font16;
        color: white;
        margin-left: 15px;
      }
    }
  }
  .copyright {
    width: 33.3vw;
    display: flex;
    justify-content: center;
    @include mq(sp) {
      width: 33.3vh;
    }
    .text {
      @include font12;
      color: var(--dark-gray);
    }
  }
}
</style>
