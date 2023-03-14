<template>
  <div class="box">
    <!-- navBar -->
    <navBar title=""></navBar>
    <!-- title -->
    <div class="box__title">
      有没有可以摘抄下来的神仙句子有没有可以摘抄下来的神仙句子有没有可以摘抄下来的神仙句子
    </div>
    <!-- 文章内容部分 -->
    <div class="box--content">
      1234561255566111111111118888
    </div>
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
export default {
  name: 'ContentDetial',
  components: { navBar },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/styles/globalVariable.scss';
.box {
  display: flex;
  flex-direction: column;
  background-color: aqua;
  padding-top: 35px;
  &__title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 5px;
    text-align: start;
  }
}
</style>
