
<template>
  <div
    class="card"
    @click="goDetail"
  >
    <div class="card__top">
      <div class="card__top--num">{{ price }}</div>
      <div class="card__top--title">{{ title }}</div>
    </div>
    <div class="card__author">
      <div class="card__author__avatar">
        <van-image
          round
          width="26px"
          height="26px"
          :src="accessoryUrl"
        />
        <div class="card__author__avatar--type">{{ articleTagId }}</div>
      </div>
      <div class="card__author--time">{{ createTime }}</div>
    </div>
  </div>
</template>
<script>
import { Image as VanImage } from 'vant';
export default {
  name: 'MineView',
  components: { VanImage },
  props: {
    price: {
      type: Number,
      default: 0
    },
    accessoryUrl: {
      type: String,
      default: 'http://173.82.193.76:9000/share-kno/images/pexels-eberhard-grossgasteiger-2088210.jpg'
    },
    articleTagId: {
      type: String,
      default: ''
    },
    createTime: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: 'mine_view',
    }
  },
  methods: {
    goDetail () {
      this.$router.push({ name: 'ContentDetial' })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/styles/globalVariable.scss';
.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: $cf;
  margin-bottom: 10px;
  &__top {
    display: flex;
    &--num {
      padding: 10px;
      height: 32px;
      font-size: 14px;
      background-color: $wd-primary;
      border: 1px solod $cb;
      color: $cf;
      margin-right: 5px;
      border-radius: 3px;
    }
    &--title {
      height: 45px;
      font-size: 16px;
      color: $c4;
      text-align: start;
    }
  }
  &__author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 26px;
    &__avatar {
      display: flex;
      align-items: center;
      &--type {
        padding-left: 5px;
        font-size: 13px;
        color: $c8;
      }
    }
    &--time {
      font-size: 13px;
      color: $c8;
    }
  }
}
</style>
