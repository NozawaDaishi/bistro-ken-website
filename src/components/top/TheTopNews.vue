<script setup lang="ts" name="TopNews">
import useNewsStore from '@/stores/useNewsStore'
import { storeToRefs } from 'pinia'
const newsStore = useNewsStore()
const { currentNewsArticle, newsArticles } = storeToRefs(newsStore)
const { getNewsArticles, selectNewsArticle } = newsStore

getNewsArticles()
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.news') }}
    </div>
    <div :class="classes.containerWrapper">
      <div :class="classes.latestInfo">
        <p :class="classes.text">{{ $t('commons.latest_info') }}</p>
        <div :class="classes.list">
          <div
            v-for="item in newsArticles"
            :key="item.id"
            :class="[
              classes.listItem,
              { [classes.listItem_active]: item === currentNewsArticle },
            ]"
            @click.stop.prevent="selectNewsArticle(item)"
          >
            <div :class="classes.news_header">
              <div :class="classes.dateTime">
                {{ item.attributes.publishedAtInJST }}
              </div>
              <div :class="classes.newsTitle">{{ item.attributes.title }}</div>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="item === currentNewsArticle"
              :class="classes.content"
              v-html="item.attributes.content"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
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
  &Wrapper {
    width: 100%;
    background-color: var(--light-gray);
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .latestInfo {
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
        @include font14;
        color: var(--dark-gray);
      }
      .list {
        width: 80%;
        margin-top: 15px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        &Item {
          width: 100%;
          background-color: var(--secondary-color);
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
          padding: 10px 15px;
          @include font12;
          color: var(--dark-gray);
          cursor: pointer;
          &:hover {
            background-color: var(--third-color);
          }
          .news_header {
            display: flex;
            @include mq(sp) {
              flex-direction: column;
            }
            .newsTitle,
            .dateTime {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .newsTitle {
              @include font12Bold;
              margin-left: 15px;
              @include mq(sp) {
                margin-left: 0;
                margin-top: 15px;
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
