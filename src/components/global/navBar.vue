<template>
  <div
    class="navbar"
    :style="bgColor"
  >
    <div
      class="iconfont leftIcon"
      :style="{ color: letfColor }"
      @click="OnClickLeft()"
    >
      {{ leftIcon }}
    </div>
    <div class="title">{{ title }}</div>
    <div
      v-if="showRight"
      class="iconfont rightIcon"
      :style="{color: rightColor}"
      @click="onClickRight()"
    >
      {{ rightIcon }}
    </div>
    <div v-else></div>
  </div>
</template>
<script>
export default {
  props: {
    // 图标
    leftIcon: {
      type: String,
      default: '\ue6a9',
    },
    rightIcon: {
      type: String,
      default: '\ue621',
    },
    // 右插槽点击事件
    onClickRight: {
      type: Function,
      default: () => { },
    },
    // 标题
    title: {
      type: String,
      default: '标题',
    },
    // 背景色
    bgColor: {
      type: String,
      default: 'background-color:#fff',
    },
    // icon和标题色
    letfColor: {
      type: String,
      default: '#444',
    },
    rightColor: {
      type: String,
      default: '#444',
    },
    showRight: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
  },
  data () {
    return {}
  },
  methods: {
    OnClickLeft () {
      console.log('123123')
      if (this.to) {
        this.$router.push({ name: this.to })
      } else {
        this.$router.back()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
}
.leftIcon {
  font-size: 20px;
  line-height: 15px;
}
.title {
  font-size: 20px;
  line-height: 15px;
}
.rightIcon {
  font-size: 20px;
}
</style>
