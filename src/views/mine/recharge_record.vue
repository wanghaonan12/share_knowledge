<!-- 充值记录列表 -->
<template>
  <div class="box">
    <navBar title=""></navBar>
    <div
      v-for=" ( key ,index) in data"
      :key="index"
    >
      <bonusDetailList
        :create-time="key['createTime']"
        :description="key['description']"
        :event="key['event']"
        :value="key['value']"
      ></bonusDetailList>
    </div>
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
import bonusDetailList from '@/components/mine/bonusDetailList.vue';
import { BonusDetail } from 'api/mine'
export default {
  name: 'HistoryView',
  components: { bonusDetailList, navBar },
  data () {
    return {
      // 分页查询
      pageQuery: {
        "pageNum": 1,
        "pageSize": 10
      },
      // 数据
      data: [{
        "id": 11,
        "userId": "79c308ea630d4e6f8d647e8278962bea",
        "createTime": "2023-01-08 20:39:16",
        "value": 29,
        "event": "-1",
        "description": "购买文章:javascript花费29积分"
      }]
    }
  },
  created () { this.getDetailData() },
  methods: {
    // 获取积分详情
    getDetailData () {
      BonusDetail(this.pageQuery).then((res) => {
        this.data = res['records']
        console.log(res['records']);
      }).catch((err) => {
        this.$message.error(err)
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
