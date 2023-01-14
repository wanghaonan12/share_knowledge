<template>
  <div>
    <div>{{ message }}</div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
export default {
  name: 'CeateView',
  components: { TabBar },
  data() {
    return {
      message: 'CreateView',
    }
  },
}
</script>

<style></style>
