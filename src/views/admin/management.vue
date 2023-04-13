<template>
  <div>
    <van-tabs
      v-if="showTag"
      v-model:active="active"
    >
      <van-tab
        title="用户管理"
        :to="{name:'ManagementUser'}"
      ></van-tab>
      <van-tab
        title="标签管理"
        :to="{name:'TagView'}"
      ></van-tab>

    </van-tabs>
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
import { Tab as VanTab, Tabs as VanTabs } from 'vant';
export default {
  name: 'ManagementView',
  components: { TabBar, VanTab, VanTabs },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    showTag () {
      return this.$store.state.login.userId == '79c308ea630d4e6f8d647e8278962bea'
    }
  },
  created () {
    () => {
      console.log(this.$store.state.login.userId);
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
