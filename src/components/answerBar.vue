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
        :class="favorite ? 'iconfont box__iconfont favorite red' :'iconfont box__iconfont favorite' "
        class-prefix='icon'
        size="25"
        name='favorite'
        @click="praise"
      />
    </div>

    <div class="box__button">
      <van-button
        round
        color="#3497fb"
      >我来回答</van-button>
    </div>

    <van-popup
      v-model:show="showBottom"
      round
      closeable
      close-icon-position="top-left"
      position="bottom"
      class="box--popup"
    >
      <div class="box--popup__pl"> 评论:(20)</div>
      <div style="margin-bottom: 50px">
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
        <comment-card></comment-card>
      </div>

      <div class="box--popup__input">
        <van-cell-group inset>
          <van-field
            v-model="value"
            placeholder="抢占沙发"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
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
  Field as VanField
} from 'vant';
import '@/assets/icons/iconfont.css';
import commentCard from "@/components/commentCard.vue";

export default {
  name: "AnswerBar",
  components: { VanIcon, VanButton, VanPopup, commentCard, VanCellGroup, VanField },
  props: {
    favorite: {
      type: String,

    }
  },
  data () {
    return {
      showBottom: false,
      value: ''
    }
  },
  methods: {
    praise () {
      console.log('点赞');
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