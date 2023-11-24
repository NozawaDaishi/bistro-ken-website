<script setup lang="ts" name="AccessStoreInfo">
import useRouterFunctions from '@/composables/useRouterFunctions'

const { routerPush } = useRouterFunctions()
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.containerWrapper">
      <div :class="classes.openClose">
        <div :class="classes.open">
          <p :class="classes.openTitle">
            {{ $t('commons.business_hours') }}
          </p>
          <div :class="classes.lunch_dinner">
            <div :class="classes.lunch_dinnerTitle">
              <p :class="classes.lunchTitle">{{ $t('commons.lunch') }}</p>
              <p :class="classes.dinnerTitle">{{ $t('commons.dinner') }}</p>
            </div>
            <div :class="classes.lunch_dinnerTime">
              <p :class="classes.lunchTime">
                {{ $t('commons.lunch_time') }}
              </p>
              <p :class="classes.dinnerTime">
                {{ $t('commons.dinner_time') }}
              </p>
            </div>
          </div>
        </div>
        <div :class="classes.close">
          <p :class="classes.closeTitle">
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
          :class="classes.contactWrapper"
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
  &Wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    .openClose {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--dark-gray);
      .open {
        &Title {
          @include font32Bold;
        }
        .lunch_dinner {
          @include font22;
          display: flex;
          margin-top: 15px;
          &Title {
            display: flex;
            flex-direction: column;
            .dinnerTitle {
              margin-top: 15px;
            }
          }
          &Time {
            margin-left: 25px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .dinnerTime {
              margin-top: 15px;
            }
          }
        }
      }
      .close {
        margin-left: 100px;
        &Title {
          @include font32Bold;
        }
        .thursday {
          @include font22;
          margin-top: 15px;
        }
        .non_scheduled_holiday {
          @include font22;
          margin-top: 15px;
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
      color: var(--dark-gray);
      &Wrapper {
        height: 70px;
        width: 25vw;
        border: 1.5px solid var(--dark-gray);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        cursor: pointer;
        transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
        &:hover {
          border: none;
          color: var(--accent-color);
          box-shadow: var(--dark-gray) 0 80px 0px 2px inset;
        }
      }
    }
  }
}
</style>
