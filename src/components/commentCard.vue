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
          <div class="name">
            {{nickname}}
          </div>
          <div
            :v-if="showDelete(userId)"
            class=" iconfont icon-delete icon"
            @click="deleteDisc"
          ></div>
        </div>
        <div class="box--content__data">
          {{dataTime}}
        </div>
        <div class="box--content__comment">
          {{ content }}
        </div>

      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
import { DeleteDiscuss } from 'api/home'
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
    },
    refresh: {
      type: Function
    },
    discussId: {
      type: Number
    },
    userId: {
      type: String
    },
    name: {
      type: String
    }
  },
  created () {
    this.getRoler()
  },
  methods: {
    // 个更新管理状态
    getRoler () {
      this.$store.dispatch("getRoler")
    },
    // 判断是否
    showDelete (userId) {
      return this.$store.state.login.roler == 'admin' || userId == this.$store.state.login.userId
    },
    // 评论删除
    deleteDisc () {
      DeleteDiscuss([this.discussId]).then(() => { this.refresh() })
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
  display: flex;
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
      width: 100%;
      align-self: start;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      .icon {
        margin-right: 10px;
        color: $wd-danger;
      }
    }

    &__comment {
      overflow: hidden;
      word-wrap: break-word;
      width: 300px;
      text-align: left;
      font-size: 15px;
    }

    &__data {
      margin-bottom: 5px;
      align-self: flex-start;
      font-size: 10px;
      color: $c4;
    }
  }
}
</style>