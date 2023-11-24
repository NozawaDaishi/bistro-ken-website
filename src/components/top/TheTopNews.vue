<script setup lang="ts" name="TopNews">
// TODO: API結合時に削除
const info_list = [
  {
    newsId: '1',
    title: '開店のお知らせ',
    content: 'この度、2023年12月15日に開店いたしますことをお知らせいたします。',
    date_time: '2023-11-19 19:24',
  },
  {
    newsId: '2',
    title: '年末年始お休みのお知らせ',
    content: '2023年12月31日~1月4日までお休みとさせていただきます。',
    date_time: '2023-11-19 19:30',
  },
  {
    newsId: '1',
    title: '開店のお知らせ',
    content: 'この度、2023年12月15日に開店いたしますことをお知らせいたします。',
    date_time: '2023-11-19 19:24',
  },
  {
    newsId: '2',
    title: '年末年始お休みのお知らせ',
    content: '2023年12月31日~1月4日までお休みとさせていただきます。',
    date_time: '2023-11-19 19:30',
  },
  {
    newsId: '1',
    title: '開店のお知らせ',
    content: 'この度、2023年12月15日に開店いたしますことをお知らせいたします。',
    date_time: '2023-11-19 19:24',
  },
  {
    newsId: '2',
    title: '年末年始お休みのお知らせ',
    content: '2023年12月31日~1月4日までお休みとさせていただきます。',
    date_time: '2023-11-19 19:30',
  },
  {
    newsId: '1',
    title: '開店のお知らせ',
    content: 'この度、2023年12月15日に開店いたしますことをお知らせいたします。',
    date_time: '2023-11-19 19:24',
  },
  {
    newsId: '2',
    title: '年末年始お休みのお知らせ',
    content: '2023年12月31日~1月4日までお休みとさせていただきます。',
    date_time: '2023-11-19 19:30',
  },
]
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">
      {{ $t('commons.news') }}
    </div>
    <div :class="classes.containerWrapper">
      <div :class="classes.latest">
        <div :class="classes.latestInfo">
          <p :class="classes.text">{{ $t('commons.latest_info') }}</p>
          <div :class="classes.list">
            <div
              v-for="item in info_list"
              :key="item.newsId"
              :class="classes.listItem"
            >
              <div :class="classes.dateTime">{{ item.date_time }}</div>
              <div :class="classes.newsTitle">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div :class="classes.latestPost">
          <p :class="classes.text">{{ $t('commons.instagram') }}</p>
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
  display: flex;
  flex-direction: column;
  @include mq(sp) {
    height: auto;
    margin: 80px 0;
  }
  .title {
    @include font32Bold;
    color: var(--dark-gray);
  }
  &Wrapper {
    height: 100%;
    width: 100%;
    background-color: var(--light-gray);
    border-radius: 5px;
    margin-top: 15px;

    .latest {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      @include mq(sp) {
        flex-direction: column;
      }
      &Info {
        height: 80%;
        width: 50%;
        border-right: 1px solid var(--dark-gray);
        display: flex;
        flex-direction: column;
        align-items: center;
        @include mq(sp) {
          width: 90%;
          border-right: none;
          border-bottom: 1px solid var(--dark-gray);
        }
        .text {
          @include font14;
          color: var(--dark-gray);
        }
        .list {
          height: 100%;
          width: 80%;
          margin-top: 15px;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
          &Item {
            height: 15%;
            width: 100%;
            background-color: var(--secondary-color);
            border-radius: 5px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            &:hover {
              background-color: var(--third-color);
            }
            .dateTime {
              @include font12;
              color: var(--dark-gray);
              margin-left: 15px;
            }
            .newsTitle {
              @include font12;
              color: var(--dark-gray);
              margin-left: 15px;
            }
          }
        }
      }
      &Post {
        height: 80%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
          @include font14;
          color: var(--dark-gray);
        }
      }
    }
  }
}
</style>
