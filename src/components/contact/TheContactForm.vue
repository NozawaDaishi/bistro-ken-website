<script setup lang="ts" name="ContactForm"></script>

<template>
  <div :class="classes.container">
    <div :class="classes.title">{{ $t('contact.title') }}</div>
    <form :class="classes.form">
      <div :class="classes.form_wrapper">
        <label>
          <span :class="classes.textbox_label">お名前</span>
          <input type="text" :class="classes.textbox" placeholder="新潟太郎" />
        </label>
        <label>
          <span :class="classes.textbox_label">メールアドレス</span>
          <input
            type="email"
            :class="classes.textbox"
            placeholder="メールアドレス"
          />
        </label>
        <label>
          <span :class="classes.textbox_label">件名</span>
          <input type="text" :class="classes.textbox" placeholder="件名" />
        </label>
        <label>
          <span :class="classes.textbox_label">内容</span>
          <textarea
            :class="[classes.textbox, classes.textarea]"
            placeholder="内容"
          ></textarea>
        </label>
      </div>
    </form>
  </div>
</template>

<style lang="scss" module="classes">
.container {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    @include font32Bold;
    color: var(--dark-gray);
    margin: 15px 0 50px;
  }
  .form {
    display: flex;
    justify-content: center;
    &_wrapper {
      display: flex;
      flex-direction: column;
      width: 40vw;

      .textbox_label,
      .textbox {
        color: var(--dark-gray);
        margin-bottom: 15px;
      }

      .textbox_label {
        display: block;
        margin-bottom: 5px;
        font-size: 0.9em;
      }

      .textbox {
        width: 100%;
        padding: 8px 10px;
        border: none;
        border-radius: 3px;
        background: var(--light-gray);
        font-size: 1em;
        line-height: 1.5;
      }

      .textbox::placeholder {
        color: var(--placeholder-color);
      }
      .textarea {
        height: 15vh;
      }
    }
  }
}
</style>
