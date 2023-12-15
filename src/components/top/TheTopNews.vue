<script setup lang="ts" name="TopNews">
import useNewsStore from '@/stores/useNewsStore'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const newsStore = useNewsStore()
const { newsArticles } = storeToRefs(newsStore)
const { getNewsArticles } = newsStore
getNewsArticles()

const isVisible = ref<Record<string, boolean>>({})

const toggleNewsContent = (itemId: string) => {
  isVisible.value[itemId] = !isVisible.value[itemId]
}

watchEffect(() => {
  newsArticles.value.forEach((article) => {
    isVisible.value[article.id] = isVisible.value[article.id] || false
  })
})
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.news') }}
    </div>
    <div :class="classes.container_wrapper">
      <div :class="classes.latest_info">
        <p :class="classes.text">{{ $t('commons.latest_info') }}</p>
        <div :class="classes.list">
          <div
            v-for="item in newsArticles"
            :key="item.id"
            :class="classes.list_item"
            @click="toggleNewsContent(item.id)"
          >
            <div :class="classes.news_header">
              <div :class="classes.news_header_wrapper">
                <div :class="classes.date_time">
                  {{ item.attributes.publishedAtInJST }}
                </div>
                <div
                  :class="[
                    classes.news_title,
                    { [classes.active]: isVisible[item.id] },
                  ]"
                >
                  {{ item.attributes.title }}
                </div>
              </div>
              <img
                v-show="isVisible[item.id]"
                src="@/assets/icons/top/chevron-up.svg"
                alt="chevron_up"
              />
              <img
                v-show="!isVisible[item.id]"
                src="@/assets/icons/top/chevron-down.svg"
                alt="chevron_down"
              />
            </div>
            <Vue3SlideUpDown v-model="isVisible[item.id]">
              <!-- eslint-disable vue/no-v-html -->
              <div
                :class="classes.content"
                v-html="item.attributes.content"
              ></div
            ></Vue3SlideUpDown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  width: 100%;
  padding: 30px 50px 50px;
  display: flex;
  flex-direction: column;
  @include mq(sp) {
    height: auto;
    padding: 30px 25px 50px;
    margin: 0px 0;
  }
  .title {
    @include font32Bold;
    color: var(--dark-gray);
  }
  &_wrapper {
    width: 100%;
    background-color: var(--light-gray);
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .latest_info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      @include mq(sp) {
        width: 90%;
      }
      .text {
        @include font18Bold;
        color: var(--dark-gray);
      }
      .list {
        width: 80%;
        margin: 15px 0;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        border-top: 0.5px solid var(--dark-gray);
        &::-webkit-scrollbar {
          display: none;
        }
        &_item {
          width: 100%;
          border-bottom: 0.5px solid var(--dark-gray);
          display: flex;
          flex-direction: column;
          padding: 10px 15px;
          @include font12;
          color: var(--dark-gray);
          cursor: pointer;
          &:hover {
            .news_title {
              color: var(--primary-color);
            }
          }
          .news_header {
            display: flex;
            justify-content: space-between;
            &_wrapper {
              display: flex;
              align-items: center;
              @include mq(sp) {
                flex-direction: column;
              }
              .news_title,
              .date_time {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .news_title {
                @include font14Bold;
                margin-left: 15px;
                @include mq(sp) {
                  margin-left: 0;
                  margin-top: 15px;
                }
                &.active {
                  color: var(--primary-color);
                }
              }
            }
          }
          .content {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>
