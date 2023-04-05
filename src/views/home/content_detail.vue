<template>
  <div class="box">
    <!-- navBar -->
    <navBar
      :title="showTitle"
      :show-right="showDelete(data['userId'])"
      :right-icon="rightIcon"
      :on-click-right="deleteFunc"
    ></navBar>
    <!-- title -->
    <div class="box__title">
      <van-image
        round
        width="26px"
        height="26px"
        :src="data['sendUserAvatar']"
      />
      <div style="margin-left: 15px;">
        <div class="name">
          {{ data['sendUserName'] }}
        </div>
        <div class="title">
          {{ showTitle }}
        </div>
      </div>
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
    ></content-card>
    <div class="box--comment">
      --回答内容--
    </div>
    <div
      v-for="(value,index) in answercontent"
      :key="index"
      :v-if="answercontent.length > 0"
    >
      <answerCard
        :refresh="getAdopt"
        :article-id="value['article_id']"
        :user-id="value['user_id']"
        :answer-id="value['id']"
        :content="value['content']"
        :imgs="value['picture']"
        :date="value['create_time']"
        :nickname="value['name']"
        :send-user-avatar="value['avatar']"
        :show-accept="value['purchaseEnable']"
        :show-delete="showDelete(value['user_id'])"
        :video-url=videoUrl
      />
    </div>

    <answer-bar
      :get-answer="getAdopt"
      :favorite="data['praiseEnabled']"
      :click="praise"
      :article-id="articleId"
    />

  </div>
</template>
<script>
import answerCard from '@/components/answerCard.vue';
import navBar from '@/components/global/navBar.vue';
import answerBar from "@/components/answerBar.vue";
import { Tag as vanTag, Image as VanImage } from 'vant';
import contentCard from "@/components/contentCard.vue";
import { getArticleDetail, createHistory, praiseCreate, deleteArticle, getAuswer } from 'api/home.js'

export default {
  name: 'ContentDetail',
  components: { navBar, answerBar, vanTag, contentCard, VanImage, answerCard },
  data () {
    return {
      rightIcon: '\ue67e',
      data: '',
      content: '',
      showTitle: '',
      articleId: '',
      articleTag: '',
      imgs: [],
      answercontent: []
    }
  },
  computed: {
    showRight () {
      return this.$store.state.login.userId == this.data['userId']
    },

  },
  created () {
    // 路由取值
    this.articleId = this.$route.query.articleId
    this.articleTag = this.$route.query.articleTagId
    this.getDetail()
    this.addHistory()
    this.getAdopt()
    this.getRoler()
  },

  methods: {
    // 删除文章
    deleteFunc () {
      deleteArticle([this.data['id']]).then((res) => {
        this.$message.success(res)
        this.$router.back()
      }).catch((err) => { this.$message.error(err) })
    },
    //点赞
    praise () {
      praiseCreate({ 'articleId': this.data['id'] }).then((res) => {
        this.$message.success(res)
        this.getDetail()
      }).catch((err) => { this.$message.error(err) })

    },
    // 获取详情
    getDetail () {
      getArticleDetail({ "id": this.articleId }).then((res) => {
        this.data = res
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
    // 获取回答内容
    getAdopt () {
      getAuswer(this.articleId).then((res) => {
        res.forEach(r => {
          const answerImgs = []
          r['picture'].forEach(element => {
            answerImgs.push({
              url: element['imageUrl'],
              title: element['imageName'],
              preview: '1'
            })
            r['picture'] = answerImgs
          });
        })
        this.answercontent = res
      }).catch((err) => { console.log(err); })
    },
    // 添加浏览历史
    addHistory () {
      createHistory({ "articleId": this.articleId })
        .catch((err) => { this.$message.error(err) })
    },
    // 个更新管理状态
    getRoler () {
      this.$store.dispatch("getRoler")
    },
    // 判断是否
    showDelete (userId) {
      return this.$store.state.login.roler == 'admin' || userId == this.$store.state.login.userId
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
    display: flex;
    .name {
      font-size: 12px;
      color: $c8;
      margin-bottom: 5px;
    }
    .title {
      font-size: 18px;
      color: $c4;
    }
  }

  &__image {
    padding-bottom: 5px;
  }

  &--comment {
    display: inline-block;
    text-align: center;
    padding: 15px 0px;
    font-size: 20px;
  }
}

// 调整播放器样式
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
