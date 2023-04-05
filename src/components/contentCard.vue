<!--显示文章内容和视频的content组件 方便在回答的时候套用-->
<template>
  <div class="box">
    <!-- 文章内容部分 -->
    <div class="box--content">
      {{ content }}
    </div>
    <!--    图片-->
    <imageStyle :imgs="imgs" />
    <!--    视频-->
    <!-- <div v-show="videoUrl.length>0">
      <vue-core-video-player
        :src="videoUrl"
        autoplay
        preload="metadata"
        controls="auto"
        cancelable=true
        @seeked="updataTime"
      />
    </div> -->

  </div>
</template>


<script>
import imageStyle from './global/imageStyle.vue';
export default {
  name: "ContentCard",
  components: { imageStyle },
  props: {
    // [
    //   {
    //     url:
    //         "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    //     title: "图片2",
    //     preview: "1"
    //   }
    // ]
    imgs: {
      type: Array,
    },
    videoUrl: {
      type: String
    },
    content: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
    }
  },
  methods: {
    updataTime (data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.box {
  &--content {
    font-size: 20px;
    color: $c4;
    flex-direction: column;
    text-align: start;
    text-indent: 2em;
    margin-bottom: 5px;
  }

  &__image {
    padding-bottom: 5px;
  }
}

// 调整播放器样式
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>