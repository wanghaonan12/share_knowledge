<template>
  <div class="box">
    <!-- navBar -->
    <navBar title=""></navBar>
    <!-- title -->
    <div class="box__title">
      {{ showTitle }}
    </div>
    <!--    tab-->
    <div class="box--type">
      <van-tag
        plain
        type="primary"
      >{{ articleTag }}</van-tag>
    </div>
    <!-- 文章内容部分 -->
    <content-card
      :content="content"
      :imgs=imgs
      :video-url=videoUrl
    ></content-card>
    <div class="box__comment">
    </div>
    <answer-bar />
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
import answerBar from "@/components/answerBar.vue";
import { Tag as vanTag } from 'vant';
import contentCard from "@/components/contentCard.vue";
import { getArticleDetail, createHistory } from 'api/home.js'

export default {
  name: 'ContentDetail',
  components: { navBar, answerBar, vanTag, contentCard },
  data () {
    return {
      content: '',
      showTitle: '',
      articleId: '',
      articleTag: '',
      videoUrl: '',
      imgs: []
    }
  },
  computed: {},
  created () {
    // 路由取值
    this.articleId = this.$route.query.articleId
    this.articleTag = this.$route.query.articleTagId
    this.getDetail()
    this.addHistory()
  },

  methods: {
    getDetail () {
      getArticleDetail({ "id": this.articleId }).then((res) => {
        this.showTitle = res['title']
        this.imgs = []
        this.content = res['content']
        res['pictureUrls'].forEach(element => {
          this.imgs.push({
            url: element['imageUrl'],
            title: element['imageName'],
            preview: '1'
          })
        });
        this.videoUrl = res['videoUrls'].length > 1 ? res['videoUrls'][0] : ''
      }).catch((err) => { this.$message.error(err) })
    },
    addHistory () {
      createHistory({ "articleId": this.articleId })
        .then((res) => { console.log(res); })
        .catch((err) => { this.$message.error(err) })
    }
  }
}
</script>

<style lang="scss" >
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
