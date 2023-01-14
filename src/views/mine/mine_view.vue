<template>
  <div>
    <div>{{ message }}</div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
export default {
  name: 'MineView',
  components: { TabBar },
  data() {
    return {
      message: 'mine_view',
    }
  },
}
</script>

<style></style>
