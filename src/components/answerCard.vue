<!--回答内容-->
<template>
  <div class="box">
    <!-- 内容部分 -->
    <div class="box__title">
      <div class="box__title--content">
        <van-image
          round
          width="26px"
          height="26px"
          :src="sendUserAvatar"
        />
        <div class="nickname">
          <div class="name">
            {{ nickname }}
          </div>
          <div class="date">
            {{ date }}
          </div>
        </div>
      </div>
      <div class="box__title--left">
        <div
          v-if="showDelete"
          class="iconfont icon-delete icon"
          @click="this.delete"
        >
        </div>
        <div
          v-if="showAccept"
          class="button"
          @click="accept"
        >
          采用
        </div>
      </div>
    </div>
    <div class="box--content">
      {{ content }}
    </div>
    <!--    图片-->
    <imageStyleVue
      :imgs="imgs"
      :columns="3"
      :width="100"
    ></imageStyleVue>
  </div>
</template>


<script>
// import '@/assets/icons/iconfont.css'
import { Image as VanImage } from 'vant';
import imageStyleVue from './global/imageStyle.vue';
import { AcceptAnswer, DeleteAnswer } from '@/api/home';
export default {
  name: "ContentCard",
  components: { imageStyleVue, VanImage },
  props: {
    // [
    //   {
    //     url:
    //         "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    //     title: "图片2",
    //     preview: "1"
    //   }
    // ]
    sendUserAvatar: {
      type: String,
      default: 'http://173.82.193.76:9000/share-kno/images/pexels-eberhard-grossgasteiger-2088210.jpg'
    },
    nickname: {
      type: String,
      default: 'wangrich'
    },
    date: {
      type: String,
      default: '2023-3-5'
    },
    imgs: {
      type: Array,
    },
    videoUrl: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    answerId: {
      type: String,
      default: ''
    },
    articleId: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
    },
    showDelete: {
      type: Boolean,
      default: false
    },
    showAccept: {
      type: Boolean,
      default: false
    },
    refresh: {
      type: Function
    }
  },

  data () {
    return {
    }
  },
  methods: {
    // 采用回答
    accept () {
      let date = {
        "answerId": this.answerId,
        "answerUserId": this.userId,
        "articleId": this.articleId
      }
      AcceptAnswer(date).then((res) => {
        this.refresh()
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 删除回答
    delete () {
      DeleteAnswer([this.answerId]).then((res) => {
        this.refresh()
      }).catch((err) => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.box {
  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    &--content {
      display: flex;
      .nickname {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name {
          font-size: 15px;
          color: $c4;
        }
        .date {
          font-size: 10px;
          color: $c8;
        }
      }
    }
    &--left {
      display: flex;
    }
  }
  margin-top: 10px;
  &--content {
    font-size: 15px;
    color: $c4;
    flex-direction: column;
    text-align: start;
    text-indent: 2em;
    margin-bottom: 5px;
  }
}

// 调整播放器样式
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
.button {
  margin-left: 10px;
  display: inline-block;
  align-self: start;
  padding: 5px 7px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 10px;
  border: 2px solid $wd-primary;
  color: $wd-primary;
}
.icon {
  font-size: 23px;
  color: $wd-danger;
}
</style>