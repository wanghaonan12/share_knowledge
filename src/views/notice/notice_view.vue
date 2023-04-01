<template>
  <div class="box">
    <noticeListVue />
    <noticeListVue />
    <noticeListVue />
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
import noticeListVue from '@/components/noticeList.vue'
export default {
  name: 'NoticeView',
  components: { TabBar, noticeListVue },
  data () {
    return {
      message: 'notice_view',
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  padding: 10px 5px;
  margin-bottom: 50px;
}
</style>
