<template>
  <div class="box">
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
          :name="value.classify+'/'+value.id"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <ShowCard
        v-for="(data,index) in artticleData"
        :key="index"
        :title="data.title"
        :accessory-url="data.accessoryUrl"
        :article-tag-id="tageData[data.articleTagId].classify"
        :create-time="data.createTime"
        :price="data.price"
        @click="goDetail"
      ></ShowCard>
    </div>

    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
import ShowCard from '@/components/showCard.vue'
import { Icon as VanIcon } from 'vant';
import { getAllArticle, getArticleByTag } from 'api/home'
import { getTageAll } from 'api/tag'
// import {}
export default {
  name: 'HomeView',
  components: { TabBar, ShowCard, VanIcon },
  data () {
    return {
      activeName: '1',
      artticleData: [],
      tageData: [],
      contentData: {
        'pageNum': 1,
        'pageSize': 10,
        'content': ''
      },
      searchByTag: {
        'pageNum': 1,
        'pageSize': 10,
        'content': ''
      }
    }
  },
  created () {
    // 初始化页面数据
    this.getArticle()
    this.getTage()
  },
  methods: {
    // 标签点击事件
    handleClick (tab) {
      // 获取全部的index为0所以用if判断
      if (tab.index == 0) {
        // 清除content数据防止多次调用时出现问题
        this.contentData.content = '';
        this.getArticle();
      } else {
        this.searchByTag.content = [tab.index]
        getArticleByTag(this.searchByTag).then((res) => {
          this.artticleData = res.records
        }).catch((err) => {
          this.$message.error(err)
        })
      }
    },
    // 获取文章
    getArticle () {
      getAllArticle(this.contentData).then((res) => {
        this.artticleData = res.records
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 获取标签
    getTage () {
      getTageAll().then((res) => {
        let all = {
          classify: "all",
          content: null,
          id: 0
        }
        this.tageData = []
        this.tageData = res
        this.tageData.unshift(all)
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    goDetail () {
      console.log('1111');
      this.$router.push('ContentDetial')
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/styles/globalVariable.scss';
.el-tabs__nav-wrap {
  padding-left: 10px;
  padding-right: 10px;
}
.box {
  padding: 0px 0px 5px 0px;
  background-color: #f3f3f3;
}
.search {
  padding-top: 10px;
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
