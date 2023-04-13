<!-- 首页展示列表组件 -->
<template>
  <div class="card">
    <van-image
      class="card__avatar"
      width="60"
      height="60"
      :src="sendUserAvatar"
    ></van-image>
    <div
      class="card--infor"
      @click="show"
    >
      <div class="card--infor--top">
        <div class="card--infor--top__nickname">{{ nickname }}</div>
        <div class="card--infor--top__dataTime">{{ createTime }}</div>
      </div>
      <div class="card--infor__content">
        {{ content }}
      </div>
    </div>
    <div
      v-if="showPoint"
      class="point"
    ></div>
    <!-- 圆角弹窗（居中） -->
    <van-popup
      v-model:show="showAward"
      class="popup"
      round
      :style="{ }"
    >{{ content }}
      <div class="applyForButton">
        <VanButton
          type="danger"
          @click="refuse()"
        >拒接</VanButton>
        <VanButton
          color="#7db6bf"
          @click="applyFor()"
        >同意</VanButton>
      </div>

    </van-popup>
  </div>
</template>
<script>
import { Image as VanImage } from 'vant';
import { Popup as VanPopup } from 'vant';
import { Button as VanButton } from 'vant';
import { setUserRoler, JoinForum } from '@/api/mine';
import { createTage } from '@/api/tag';
export default {
  name: 'MineView',
  components: { VanImage, VanPopup, VanButton },
  props: {
    sendUserAvatar: {
      type: String,
      default: 'http://173.82.193.76:9000/share-kno/images/pexels-eberhard-grossgasteiger-2088210.jpg'
    },
    createTime: {
      type: String,
      default: '2023-3-21'
    },
    nickname: {
      type: String,
      default: 'wangrich'
    },
    content: {
      type: String,
      default: '有个朋友第一次勤工俭学在公园里卖冰棍，不好意思吆喝；这时候突然有一人在那里大喊：“卖冰棍儿~~~~卖冰棍儿~~”。那朋友一听，心里可高兴了，就跟着喊：“我也是~~~~我也是~~~~”'
    },
    showPoint: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {
      }
    },
    articleTagId: {
      type: String
    },
    articleTagName: {
      type: String
    },
    species: {
      type: String,
      default: ''
    },
    userId: {
      type: String
    },
  },
  emits: ['deleteManage'],
  data () {
    return {
      showAward: false
    }
  },
  methods: {
    show () {
      this.showAward = true;
      this.click()
    },
    refuse () {
      this.socketApi.sendSock({ "to": this.userId, "content": '管理员拒绝了你的申请' })
      this.$emit('deleteManage', this.index)
    },
    applyFor () {
      console.log(this.species);
      switch (this.species) {
        // 申请加入的处理
        case 'applyForJoin':
          JoinForum({ 'articleTagId': this.articleTagId, 'userId': this.userId }).then((res) => {
            this.$emit('deleteManage', this.index)
            this.$message.success(res)
            this.socketApi.sendSock({ "to": this.userId, "content": '已经同意加入' + this.articleTagName })
          }).catch((err) => {
            this.$message.error(err)
          })
          break;
        // 申请管理员的处理
        case 'applyForAdmin':
          setUserRoler({ "userId": this.userId, "roles": this.articleTagId }).then((res) => {
            this.$emit('deleteManage', this.index)
            this.$message.success(res)
            this.socketApi.sendSock({ "to": this.userId, "content": '已经同意成为' + this.articleTagName + '的管理员' })
          }).catch((err) => {
            this.$message.error(err)
          })
          break;
        // 申请创建社区的处理
        case 'applyForCreate':
          console.log("3");
          createTage({ "classify": this.articleTagName }).then((res) => {
            this.$emit('deleteManage', this.index)
            this.$message.success(res)
            this.socketApi.sendSock({ "to": this.userId, "content": '已经同意创建标签' + this.articleTagName })
          }).catch((err) => {
            this.$message.error(err)
          })
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';

.card {
  margin-bottom: 3px;
  background-color: aqua;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 5px 0px;
  background-color: $grey;
  box-shadow: 0px 1px 1px 0px #e9e9e9;

  &--infor {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--top {
      font-size: 20px;
      display: flex;
      justify-content: space-between;

      &__nickname {
        display: inline-block;
        white-space: nowrap;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &__dataTime {
        font-size: 12px;
        display: inline-block;
        white-space: nowrap;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &__content {
      text-align: left;
      font-size: 12px;
      color: $c8;
      display: inline-block;
      white-space: nowrap;
      width: 280px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.popup {
  text-align: left;
  text-indent: 1rem;
  color: $c4;
  font-size: 20px;
  padding: 15px;
  width: 80%;
  max-height: 50%;
}

.point {
  width: 8px;
  height: 8px;
  background-color: $wd_danger;
  border-radius: 4px;
}

.applyForButton {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}
</style>
