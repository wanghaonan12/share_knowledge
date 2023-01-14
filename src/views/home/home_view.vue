<template>
  <div>
    <div>{{ message }}</div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
export default {
  name: 'HomeView',
  components: { TabBar },

  data() {
    return {
      message: 'homeview',
    }
  },
  beforeCreate() {
    // console.log(this.$store.state.login.token === '')
  },
}
</script>

<style lang="scss" scope>
div {
  font-size: 50px;
  color: black;
}
</style>
