<!--评论小组件-->
<template>
  <div class="main">
    <div class="box">
      <div class="box__avatar">
        <van-image
          round
          width="50px"
          height="50px"
          :src=avatarUrl
        ></van-image>
      </div>
      <div class="box--content">
        <div class="box--content__nickname">
          {{nickname}}
        </div>
        <div class="box--content__comment">
          {{ content }}
        </div>
        <div class="box--content__data">
          {{dataTime}}
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';

export default {
  name: "AnswerBar",
  components: { VanImage },
  props: {
    avatarUrl: {
      type: String,
      default: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    content: {
      type: String
    },
    nickname: {
      type: String
    },
    dataTime: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';

.main {
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 10px;
}

.divider {
  margin-top: 10px;
  border-top: 0.5px solid $ce8;
}

.box {
  display: flex;
  flex-direction: row;

  &__avatar {
    margin-right: 20px;
  }

  &--content {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-content: start;
    // text-indent: 0rem;

    &__nickname {
      align-self: start;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &__comment {
      overflow: hidden;
      word-wrap: break-word;
      width: 300px;
      text-align: left;
      font-size: 15px;
    }

    &__data {
      font-size: 10px;
      color: $c4;
    }
  }
}
</style>