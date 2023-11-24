<script setup lang="ts" name="TopStoreInfo">
import { GOOGLE_MAP_DETAIL } from '@/consts'
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.store_info') }}
    </div>
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
              <p :class="classes.lunchTime">{{ $t('commons.lunch_time') }}</p>
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
          <p :class="classes.nonScheduledHoliday">
            {{ $t('commons.non_scheduled_holiday') }}
          </p>
        </div>
      </div>
      <div :class="classes.details">
        <div :class="classes.detailsWrapper">
          <div :class="classes.information">
            <div :class="classes.tel">
              <p :class="classes.iconText">{{ $t('commons.tel') }}</p>
              <p :class="classes.text">{{ $t('commons.number') }}</p>
            </div>
            <div :class="classes.mail">
              <p :class="classes.iconText">{{ $t('commons.mail') }}</p>
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
              <div :class="classes.addressWrapper">
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
              <p :class="classes.parkingInfo">
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
  &Wrapper {
    height: 100%;
    display: flex;
    @include mq(small_store_info) {
      height: auto;
      flex-direction: column;
    }
    .openClose {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: var(--dark-gray);
      margin-top: 30px;
      .open {
        &Title {
          @include font22;
        }
        .lunch_dinner {
          @include font18;
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
        &Title {
          @include font22;
          margin-top: 20px;
        }
        .thursday {
          @include font18;
          margin-top: 15px;
        }
        .nonScheduledHoliday {
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
      &Wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .information {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .tel {
            display: flex;
            .iconText {
              width: 30px;
            }
            .text {
              margin-left: 25px;
            }
          }
          .mail {
            display: flex;
            margin-top: 15px;
            .iconText {
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
            &Wrapper {
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
            .parkingInfo {
              margin-top: 5px;
            }
          }
        }
        .map {
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
          @include mq(small_store_info) {
            width: 30vh;
          }
          &:hover {
            border: none;
            color: var(--accent-color);
            box-shadow: var(--dark-gray) 0 80px 0px 2px inset;
          }
        }
      }
    }
  }
}
</style>
