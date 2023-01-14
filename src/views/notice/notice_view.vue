<template>
  <div>
    <div>{{ message }}</div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
export default {
  name: 'NoticeView',
  components: { TabBar },
  data() {
    return {
      message: 'notice_view',
    }
  },
}
</script>

<style></style>
