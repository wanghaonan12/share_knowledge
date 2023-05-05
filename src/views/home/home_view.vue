<template>
  <div class="box">
    <div class="position">
      <div class="search">
        <div class="search--input">
          <el-input
            v-model="contentData.content"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div class="search--avatar">
          <van-icon
            name="search"
            @click="getArticle"
          />
        </div>
      </div>
      <div class="el-tabs">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane
            v-for="(value,index) in tageData"
            :key="index"
            :label="value.classify"
            :name="value.classify+','+value.id"
          ></el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <vue-loadmore
      class="content123"
      :on-refresh="getArticle"
      :on-loadmore="onLoad"
      :finished="finished"
      loading-text
    >
      <ShowCard
        v-for="(data,index) in artticleData"
        :key="index"
        :title="data.title"
        :send-user-avatar="data.sendUserAvatar"
        :article-tag-id="tagClassify[data.articleTagId]"
        :create-time="data.createTime"
        :price="data.praiseCount"
        :article-id="data.id"
        :content="data.content"
        @click="goDetail()"
      ></ShowCard>
    </vue-loadmore>

    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
import ShowCard from '@/components/showCard.vue'
import { Icon as VanIcon } from 'vant';
import { getAllArticle } from 'api/home'
import { GetJoinForum, getTageAll } from 'api/tag'

// import {}
export default {
  name: 'HomeView',
  components: { TabBar, ShowCard, VanIcon },
  data () {
    return {
      activeName: '1',
      artticleData: [],
      tageData: [],
      tagClassify: {},
      finished: false,
      total: '',
      contentData: {
        'pageNum': 1,
        'pageSize': 10,
        'content': '',
        'tab': ''
      },
    }
  },
  created () {
    // 初始化页面数据
    this.getArticle()
    this.getTage()
    this.getAllTag()
  },
  methods: {
    getAllTag () {
      getTageAll().then((res) => {
        this.tagClassify = res
      })
    },
    // 标签点击事件
    handleClick (tab) {
      // 获取全部的index为0所以用if判断
      this.contentData.content = '';
      if (tab.index == 0) {
        // 清除content数据防止多次调用时出现问题
        this.contentData.tab = '';
        this.getArticle();
      } else {
        // tab += ''
        const arr = tab.name.split(/,/);
        this.contentData.tab = arr[1]
        this.getArticle()
      }
    },
    // 获取文章
    getArticle (done) {
      this.contentData.pageNum = 1
      getAllArticle(this.contentData).then((res) => {
        this.total = res.total
        this.artticleData = res.data
        res.data == [] || res.data.length == 0 ? this.finished = true : this.finished = false
        done()
      })
    },
    // 上拉加载
    onLoad (done) {
      this.contentData.pageNum++
      if (this.artticleData.length < this.total) {
        getAllArticle(this.contentData).then((res) => {
          this.artticleData = [...res.data, ...this.artticleData]
          done()
        }).catch((err) => {
          done()

          this.$message.error(err)
        })
      } else {
        done()
        this.finished = true
      }

    },
    // 获取标签
    getTage () {
      GetJoinForum().then((res) => {
        let all = {
          classify: "all",
          content: null,
          id: 0
        }
        this.tageData = []
        this.tageData = res
        this.tageData.unshift(all)
        console.log(this.tageData, '99999999999999');
      }).catch((err) => {
        this.$message.error(err)
      })
    },
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/styles/globalVariable.scss';
.content123 {
  margin-top: 130px;
  height: 100vh;
  width: 100vw;
  background-color: $wd-primary;
  overflow: auto;
}
.el-tabs__nav-wrap {
  padding-left: 10px;
  padding-right: 10px;
}
.box {
  // background-color: $wd-primary;
  margin-bottom: 55px;
  overflow: hidden;
}
.position {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: #f3f3f3;
}
.search {
  // padding-top: 10px;
  padding: 0px 0px 5px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  &--input {
    width: 270px;
  }
  &--avatar {
    margin-left: 14px;
    margin-top: 5px;
  }
}
// 修改el-tabs的选中颜色
.el-tabs__item.is-active {
  color: $wd-primary;
}
// 修改el-tabs的选中下划线颜色
.el-tabs__active-bar {
  background-color: $wd-primary;
}
</style>
