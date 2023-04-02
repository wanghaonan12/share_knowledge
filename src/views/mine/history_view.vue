<!-- 历史记录列表 -->
<template>
  <div class="box">
    <navBar title="浏览历史"></navBar>
    <ShowCard
      v-for="(data,index) in artticleData"
      :key="index"
      :title="data.title"
      :send-user-avatar="data.sendUserAvatar"
      :article-tag-id="tageData[data.articleTagId].classify"
      :create-time="data.createTime"
      :price="data.praiseCount"
      :article-id="data.id"
      @click="goDetail()"
    ></ShowCard>
  </div>
</template>
<script>
import { getHistory } from 'api/mine'
import { getTageAll } from 'api/tag'
import ShowCard from '@/components/showCard.vue'
import navBar from '@/components/global/navBar.vue'
export default {
  name: 'HistoryView',
  components: { navBar, ShowCard },
  data () {
    return {
      artticleData: [],
      tageData: [],
      pageQuery: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.historyData()
    this.getTage()
  },
  methods: {
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
    historyData () {
      getHistory(this.pageQuery).then((res) => {
        this.artticleData = res.data
        console.log(this.artticleData);
      })
    }
  }
}
</script>

<style lang="scss" >
@import '@/assets/styles/globalVariable.scss';
.box {
  margin-top: 33px;
}
</style>
