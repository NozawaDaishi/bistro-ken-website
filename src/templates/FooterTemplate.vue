<script setup lang="ts" name="FooterTemplate">
import { INSTAGRAM_URL } from '@/consts'
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.produce">
      <p :class="classes.text">{{ $t('commons.produced_by') }}</p>
      <p :class="classes.name">{{ $t('commons.producer') }}</p>
    </div>
    <a
      type="button"
      :href="INSTAGRAM_URL"
      target="_blank"
      :class="classes.information"
    >
      <div :class="classes.informationWrapper">
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
    </a>
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
  .produce {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.3vw;
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
    cursor: pointer;
    &Wrapper {
      height: 70px;
      width: 25vw;
      background-color: var(--primary-color-transparent);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
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
    .text {
      @include font12;
      color: var(--dark-gray);
    }
  }
}
@include mq(sp) {
  .container {
    flex-direction: column;
    .produce {
      display: flex;
      flex-direction: column;
      width: 33.3vh;
    }
    .information {
      width: 33.3vh;

      &Wrapper {
        width: 33.3vh;
      }
    }
    .copyright {
      width: 33.3vh;
    }
  }
}
</style>
