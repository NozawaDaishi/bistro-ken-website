<script setup lang="ts" name="AccessInfo">
import { GoogleMap, Marker } from 'vue3-google-map'
import { GOOGLE_MAP_LAT_LNG } from '@/consts'
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.access') }}
    </div>
    <div :class="classes.container_wrapper">
      <div :class="classes.map">
        <GoogleMap
          :api-key="apiKey"
          :center="GOOGLE_MAP_LAT_LNG"
          :zoom="16.5"
          map-type="roadmap"
          style="width: 100%; height: 100%"
          :street-view-control="false"
          :map-type-control="false"
        >
          <Marker :options="{ position: GOOGLE_MAP_LAT_LNG }" />
        </GoogleMap>
      </div>
      <div :class="classes.info">
        <div :class="classes.info_wrapper">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  height: 35vw;
  width: 100%;
  margin: 100px 0;
  padding: 30px 50px 50px;
  @include mq(sp) {
    height: 70vh;
    padding: 0px 0px 50px;
  }
  .title {
    @include font32Bold;
    color: var(--dark-gray);
    @include mq(sp) {
      padding: 0px 30px;
    }
  }
  &_wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 15px;
    @include mq(sp) {
      flex-direction: column;
    }
    .map {
      height: 100%;
      width: 100%;
    }
    .info {
      height: 100%;
      width: 100%;
      padding: 30px 50px 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include font22;
      color: var(--dark-gray);
      @include mq(small_access_info) {
        @include font18;
      }
      @include mq(sp) {
        height: 50%;
        padding: 0;
        @include font16;
      }
      &_wrapper {
        display: flex;
        flex-direction: column;
        .address {
          display: flex;
          align-items: center;
          margin-top: 15px;
          .icon {
            display: flex;
            justify-content: center;
            width: 30px;
            @include mq(sp) {
              display: none;
            }
            img {
              width: 20px;
            }
          }
          &_wrapper {
            margin-left: 25px;
            @include mq(sp) {
              margin-left: 0;
            }
          }
        }
        .access {
          @include font20;
          margin-top: 10px;
          margin-left: 55px;
          @include mq(small_access_info) {
            @include font16;
          }
          @include mq(sp) {
            @include font16;
            margin-left: 0px;
          }
          .parking_info {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
