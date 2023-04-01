<!-- 箭头小列表 -->
<template>
  <div
    class="listBar"
    @click="click"
  >
    <div class="left">
      <div class="iconfont">
        {{ myIcon }}
      </div>
      <div class="key">
        {{ myKey }}
      </div>
    </div>

    <div class="value">
      {{ myValue }}
    </div>
    <div class="iconfont">
      {{right}}
    </div>
  </div>
</template>
<script>

export default {
  name: 'ListBar',
  props: {
    myIcon: {
      type: String,
      default: '\ue679'
    },
    myKey: {
      type: String,
      default: '姓名'
    },
    myValue: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: '\ue694'
    }, click: {
      type: Function,
      default: () => { }
    }

  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.listBar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 10px 0px;
  font-size: 15px;
  color: $c4;
  margin: 0px 25px;
  border-bottom: 1px solid rgba(147, 145, 145, 0.344);
}
.left {
  display: flex;
}

.iconfont {
  margin-right: 10px;
}
</style>
