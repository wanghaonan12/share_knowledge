<template>
  <div>
    <div>
      <el-button @click="logout()">退出登录</el-button>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
export default {
  name: 'MineView',
  components: { TabBar },
  data () {
    return {
      message: 'mine_view',
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style></style>
