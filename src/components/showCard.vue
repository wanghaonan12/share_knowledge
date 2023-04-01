<!-- 首页展示列表组件 -->
<template>
  <div
    class="card"
    @click="goDetail"
  >
    <div class="card__title">
      <div class="card__title--avatar">
        <van-image
          round
          width="26px"
          height="26px"
          :src="sendUserAvatar"
        />
        <div class="tab">
          <div class="tab--nickname">{{ nickname }}</div>
          <div class="tab--tag">{{ articleTagId }}</div>
        </div>
      </div>
      <div class="card__title--creatTime">{{ createTime }}</div>
    </div>
    <div class="card__infor">
      <div class="card__infor--title">{{ title }}</div>
      <div class="card__infor--content">{{ content }}</div>
    </div>
  </div>

</template>
<script>
import { Image as VanImage } from 'vant';
export default {
  name: 'MineView',
  components: { VanImage },
  props: {
    praiseCount: {
      type: Number,
      default: 0
    },
    sendUserAvatar: {
      type: String,
      default: 'http://173.82.193.76:9000/share-kno/images/pexels-eberhard-grossgasteiger-2088210.jpg'
    },
    articleTagId: {
      type: String,
      default: 'java111111111'
    },
    nickname: {
      type: String,
      default: 'wangrich'
    },
    createTime: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    articleId: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: '某天考生物，其中有一题是看鸟的腿猜出鸟的名字。某生实在不懂，生气的把卷子一撕准备离开考场。监考老师很生气于是问他：“你是哪班的，叫什么名字？”某生把裤腿一掀，说：“你猜啊你猜啊。'
    }
  },
  data () {
    return {
      message: 'mine_view',
    }
  },
  methods: {
    goDetail () {
      this.$router.push({ name: 'ContentDetail', query: { "articleId": this.articleId, "articleTagId": this.articleTagId } })
    },

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.card {
  padding: 10px;
  display: flex;
  background-color: $cf;
  flex-direction: column;
  margin-bottom: 10px;
  &__title {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 34px;
    &--avatar {
      display: flex;
      align-content: center;
      .tab {
        max-width: 200px;
        display: flex;
        flex-direction: column;
        &--nickname {
          font-size: 16px;
          color: $c8;
          margin-left: 10px;
          display: inline-block;
          white-space: nowrap;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &--tag {
          margin-top: 3px;
          border-radius: 2px;
          box-shadow: 0px 0px 2px $wd-primary;
          font-size: 10px;
          color: $c4;
          margin-left: 10px;
          display: inline-block;
          white-space: nowrap;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    &--creatTime {
      font-size: 12px;
      color: $c8;
    }
  }
  &__infor {
    max-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    padding-left: 30px;
    padding-top: 5px;
    &--title {
      font-size: 18px;
      align-self: start;
      display: inline-block;
      white-space: nowrap;
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &--content {
      color: $c8;
      margin-top: 5px;
      font-size: 13px;
      align-self: start;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 这里是超出几行省略 */
      overflow: hidden;
    }
  }
}
</style>
