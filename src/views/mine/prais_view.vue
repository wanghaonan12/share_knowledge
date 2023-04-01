<!-- 点赞列表 -->
<template>
  <div class="box">
    <navBar title=""></navBar>
    <rechangeRecoderList></rechangeRecoderList>
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
import rechangeRecoderList from '@/components/mine/rechangeRecoderList.vue';
export default {
  name: 'HistoryView',
  components: { rechangeRecoderList, navBar },
  data () {
    return {
    }
  },
  created () { },
  methods: {

  }
}
</script>

<style lang="scss" >
@import '@/assets/styles/globalVariable.scss';
.box {
  margin-top: 33px;
}
</style>
