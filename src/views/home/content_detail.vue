<template>
  <div class="box">
    <!-- navBar -->
    <navBar title=""></navBar>
    <!-- title -->
    <div class="box__title">
      有没有可以摘抄下来的神仙句子有没有可以摘抄下来的神仙句子有没有可以摘抄下来的神仙句子
    </div>
    <!--    tab-->
    <div class="box--type">
      <van-tag plain type="primary">spring cloud</van-tag>
    </div>
    <!-- 文章内容部分 -->
    <div class="box--content">
      12345612555
    </div>
    <!--    图片-->
    <img
        v-for="src in imgs"
        :key="src.title"
        class="box__image"
        :src="src.url"
        :preview="src.preview"
        :preview-text="src.title"
    >
    <!--    视频-->
    <VueVideoPlayer
        ref="videoPlayer"
        class="video-player vjs-custom-skin"
        :playsinline="true"
        :options="playerOptions"
    />
    <div class="box__comment">
    </div>
    <answer-bar/>
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import answerBar from "@/components/answerBar.vue";
import {Tag as vanTag} from 'vant';


export default {
  name: 'ContentDetail',
  components: {navBar, VueVideoPlayer: VideoPlayer.videoPlayer, answerBar, vanTag},
  data() {
    return {
      imgs: [
        {
          url:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          title: "图片1",
          preview: "1"
        },
        {
          url:
              "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://wang-rich.oss-cn-hangzhou.aliyuncs.com/vido/20221027%E7%89%A9%E8%81%94%E7%BD%91.mp4" //url地址
        }],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth * 0.8, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }

    }

  },
  computed: {},
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scope>
@import '@/assets/styles/globalVariable.scss';

.box {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 35px 10px 10px;
  margin-bottom: 60px;

  &--type {
    margin: 5px 0px;
    display: flex;

    &__content {
      border-radius: 5px;
      padding: 2px 5px;
      background-color: $ce8;
      color: $c8;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 5px;
    text-align: start;
    text-indent: 2em;
  }

  &--content {
    font-size: 20px;
    color: $c4;
    flex-direction: column;
    text-align: start;
    text-indent: 2em;
  }

  &__image {
    padding-bottom: 5px;
  }

  &__comment {
    display: inline-block;
    text-align: start;
    padding: 15px 0px;
    font-size: 15px;
  }
}

// 调整播放器样式
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
