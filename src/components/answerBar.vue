<!--内容详情下方bar-->
<template>
  <div class="box">
    <div class="icon">
      <van-icon
        class="iconfont box__iconfont"
        class-prefix='icon'
        name='information'
        @click="showBottom=true"
      />
      <van-icon
        class-prefix='icon'
        :class="!favorite ? 'iconfont box__iconfont favorite red' :'iconfont box__iconfont favorite' "
        size="25"
        name='favorite'
        @click="click"
      />
    </div>

    <div class="box__button">
      <van-button
        round
        color="#3497fb"
        @click="showAnswer=true"
      >我来回答</van-button>
    </div>
    <!-- 回答 -->
    <van-popup
      v-model:show="showAnswer"
      round
      closeable
      close-icon-position="top-left"
      position="bottom"
      class="box--popup"
      style="padding: 50px 20px 0px 20px;"
    >
      <van-field
        v-model="content"
        rows="10"
        type="textarea"
        placeholder="请输入内容描述"
      />
      <!-- 文件选择器 -->
      <van-uploader
        v-model="uploader"
        multiple
        :max-count="1"
      >
      </van-uploader>
      <el-button
        class="button"
        @click="sent"
      >
        <div style="padding:0px 125px;">发布</div>
      </el-button>
    </van-popup>

    <!-- 评论 -->
    <van-popup
      v-model:show="showBottom"
      round
      closeable
      close-icon-position="top-left"
      position="bottom"
      class="box--popup"
    >
      <div class="box--popup__pl"> 评论:</div>
      <div style="margin-bottom: 50px">
        <div
          v-for="(value,index) in showDiscuss"
          :key="index"
        >
          <comment-card
            :content="value['content']"
            :avatar-url="value['avatar'] "
            :nickname="value['userId']"
          ></comment-card>

        </div>
      </div>

      <div class="box--popup__input">
        <van-cell-group inset>
          <van-field
            v-model="discussValue"
            placeholder="抢占沙发"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                @click="discuss"
              >评论</van-button>
            </template>
          </van-field>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {
  Icon as VanIcon,
  Button as VanButton,
  Popup as VanPopup,
  CellGroup as VanCellGroup,
  Field as VanField,
  Uploader as VanUploader
} from 'vant';
import '@/assets/icons/iconfont.css';
import { createAnswer, createDiscuss, getDiscuss } from 'api/home'
import commentCard from "@/components/commentCard.vue";

export default {
  name: "AnswerBar",
  components: { VanUploader, VanIcon, VanButton, VanPopup, commentCard, VanCellGroup, VanField },
  props: {
    favorite: {
      type: Boolean,
    },
    click: {
      type: Function,
    },
    articleId: {
      type: String
    }
  },
  data () {
    return {
      showBottom: false,
      showAnswer: false,
      discussValue: '',
      content: '',
      uploader: [],
      showDiscuss: [],
      getDiscussData: {
        "articleId": this.articleId,
        "pageNum": 1,
        "pageSize": 10
      }
    }
  },
  created () {
    this.getDiscuss()
  },
  methods: {
    // 回答
    sent () {
      const data = { "articleId": this.articleId, "content": this.content, "file": this.uploader.length > 0 ? this.uploader[0]['file'] : null }
      createAnswer(data).then((res) => { this.$message.success(res) }).catch((err) => { this.$message.error(err) })
    },
    // 评论
    discuss () {
      const data = { "articleId": this.articleId, "commentDetails": this.discussValue }
      if (this.discussValue.length > 0 && this.discussValue.length < 200) {
        createDiscuss(data).then((res) => {
          this.$message.success(res)
          this.getDiscuss()
          this.discussValue = ''
        }).catch((err) => { this.$message.error(err) })
      } else {
        this.$message.error('评论字控制在在0到200之间,如有需要可以多次评论！')
      }


    },
    // 获取评论
    getDiscuss () {
      getDiscuss(this.getDiscussData).then((res) => { this.showDiscuss = res }).catch((err) => { this.$message.error(err) })

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';

.box {
  z-index: 9;
  padding: 10px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  height: 50px;
  width: 100%;
  box-shadow: -10px 0px 5px $ce8;
  flex-direction: row;
  justify-content: space-between;
  .icon {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  &__button {
    margin-bottom: 8px;
  }

  &--popup {
    padding-top: 20px;
    height: 60%;

    &__pl {
      margin-bottom: 20px;
      font-size: 15px;
      color: $ce8;
    }

    &__input {
      background-color: $cf;
      position: fixed;
      top: 93%;
      left: 0px;
      right: 0px;
      padding: 2px 10px;
    }
  }
}

::v-deep .van-field__control {
  font-size: 15px;
}
.favorite {
  margin-top: 5px;
  margin-left: 10px;
}

.red {
  color: red;
}
</style>