<script setup lang="ts" name="TopStoreInfo">
import { GOOGLE_MAP_DETAIL } from '@/consts'
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.store_info') }}
    </div>
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
              <p :class="classes.lunch_time">{{ $t('commons.lunch_time') }}</p>
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
      <div :class="classes.details">
        <div :class="classes.details_wrapper">
          <div :class="classes.information">
            <div :class="classes.tel">
              <p :class="classes.icon_text">{{ $t('commons.tel') }}</p>
              <p :class="classes.text">{{ $t('commons.number') }}</p>
            </div>
            <div :class="classes.mail">
              <p :class="classes.icon_text">{{ $t('commons.mail') }}</p>
              <!-- eslint-disable vue/no-v-html -->
              <p
                :class="classes.text"
                v-html="'niigata.kobari.bistroken@gmail.com'"
              ></p>
              <!-- eslint-enable vue/no-v-html -->
            </div>
            <div :class="classes.address">
              <div :class="classes.icon">
                <img
                  src="@/assets/icons/header/location_dot_solid_dark.svg"
                  alt="address_icon"
                />
              </div>
              <div :class="classes.address_wrapper">
                <p :class="classes.postal_code">
                  {{ $t('commons.postal_code') }}
                </p>
                <p :class="classes.text">{{ $t('commons.address') }}</p>
              </div>
            </div>
            <div :class="classes.access">
              <p :class="classes.access_info">
                {{ $t('commons.access_info') }}
              </p>
              <p :class="classes.parking_info">
                {{ $t('commons.parking_info') }}
              </p>
            </div>
          </div>
          <a :href="GOOGLE_MAP_DETAIL" target="_blank" :class="classes.map">
            <div :class="classes.text">
              {{ $t('commons.google_map') }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  height: 500px;
  width: 100%;
  padding: 30px 50px 50px;
  background-color: var(--accent-color);
  display: flex;
  flex-direction: column;
  @include mq(small_store_info) {
    height: auto;
    align-items: center;
    padding: 30px 25px 50px;
  }
  .title {
    @include font32Bold;
    color: var(--dark-gray);
    @include mq(small_store_info) {
      align-self: flex-start;
    }
  }
  &_wrapper {
    height: 100%;
    display: flex;
    @include mq(small_store_info) {
      height: auto;
      flex-direction: column;
    }
    .open_close {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: var(--dark-gray);
      margin-top: 30px;
      .open {
        &_title {
          @include font22;
        }
        .lunch_dinner {
          @include font18;
          display: flex;
          margin-top: 15px;
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
        &_title {
          @include font22;
          margin-top: 20px;
        }
        .thursday {
          @include font18;
          margin-top: 15px;
        }
        .non_scheduled_holiday {
          @include font18;
          margin-top: 15px;
        }
      }
    }
    .details {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      @include font16;
      color: var(--dark-gray);
      @include mq(small_store_info) {
        margin-top: 30px;
        justify-content: flex-start;
        align-items: flex-start;
      }
      &_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .information {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .tel {
            display: flex;
            .icon_text {
              width: 30px;
            }
            .text {
              margin-left: 25px;
            }
          }
          .mail {
            display: flex;
            margin-top: 15px;
            .icon_text {
              width: 30px;
            }
            .text {
              margin-left: 25px;
            }
          }
          .address {
            display: flex;
            align-items: center;
            margin-top: 15px;
            .icon {
              display: flex;
              justify-content: center;
              width: 30px;
              img {
                width: 20px;
              }
            }
            &_wrapper {
              margin-left: 25px;
              .text {
                @include mq(word_break) {
                  width: 250px;
                }
              }
            }
          }
          .access {
            @include font14;
            margin-top: 10px;
            margin-left: 55px;
            .parking_info {
              margin-top: 5px;
            }
          }
        }
        .map {
          height: 70px;
          width: 25vw;
          color: var(--accent-color);
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
}
</style>
