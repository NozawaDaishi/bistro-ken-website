<script setup lang="ts" name="AccessStoreInfo">
import useRouterFunctions from '@/composables/useRouterFunctions'

const { routerPush } = useRouterFunctions()
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.container_wrapper">
      <div :class="classes.open_close">
        <div :class="classes.open">
          <p :class="classes.open_title">
            {{ $t('commons.business_hours') }}
          </p>
          <div :class="classes.lunch_dinner">
            <div :class="classes.lunch_dinner_title">
              <p :class="classes.lunch_title">{{ $t('commons.lunch') }}</p>
              <p :class="classes.dinner_title">{{ $t('commons.dinner') }}</p>
            </div>
            <div :class="classes.lunch_dinner_time">
              <p :class="classes.lunch_time">
                {{ $t('commons.lunch_time') }}
              </p>
              <p :class="classes.dinner_time">
                {{ $t('commons.dinner_time') }}
              </p>
            </div>
          </div>
        </div>
        <div :class="classes.close">
          <p :class="classes.close_title">
            {{ $t('commons.regular_closing_day') }}
          </p>
          <p :class="classes.thursday">
            {{ $t('commons.thursday') }}
          </p>
          <p :class="classes.non_scheduled_holiday">
            {{ $t('commons.non_scheduled_holiday') }}
          </p>
        </div>
      </div>
      <div :class="classes.contact">
        <a
          :class="classes.contact_wrapper"
          @click.stop.prevent="routerPush('ContactPage')"
        >
          {{ $t('commons.contact') }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  height: 250px;
  width: 100%;
  padding: 30px 50px 50px;
  background-color: var(--accent-color);
  display: flex;
  @include mq(small_store_info) {
    height: auto;
    padding: 30px 25px 50px;
  }
  &_wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    @include mq(small_store_info) {
      flex-direction: column;
    }
    .open_close {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--dark-gray);
      @include mq(small_store_info) {
        flex-direction: column;
        align-items: flex-start;
      }
      .open {
        &_title {
          @include font32Bold;
          @include mq(small_store_info) {
            @include font24Bold;
          }
        }
        .lunch_dinner {
          @include font22;
          display: flex;
          margin-top: 15px;
          @include mq(small_store_info) {
            @include font18;
          }
          &_title {
            display: flex;
            flex-direction: column;
            .dinner_title {
              margin-top: 15px;
            }
          }
          &_time {
            margin-left: 25px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .dinner_time {
              margin-top: 15px;
            }
          }
        }
      }
      .close {
        margin-left: 100px;
        @include mq(small_store_info) {
          margin-left: 0;
          margin-top: 15px;
        }
        &_title {
          @include font32Bold;
          @include mq(small_store_info) {
            @include font24Bold;
          }
        }
        .thursday {
          @include font22;
          margin-top: 15px;
          @include mq(small_store_info) {
            @include font18;
          }
        }
        .non_scheduled_holiday {
          @include font22;
          margin-top: 15px;
          @include mq(small_store_info) {
            @include font18;
          }
        }
      }
    }
    .contact {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      @include font16;
      color: var(--accent-color);
      @include mq(small_store_info) {
        justify-content: center;
        align-items: center;
      }
      &_wrapper {
        height: 70px;
        width: 25vw;
        background-color: var(--dark-gray);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        cursor: pointer;
        position: relative;
        @include mq(small_store_info) {
          width: 30vh;
        }
        &:hover::after {
          content: '';
          position: absolute;
          top: -3.5px;
          bottom: -3.5px;
          left: -3.5px;
          right: -3.5px;
          border: 2px solid var(--dark-gray);
          border-radius: inherit;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
