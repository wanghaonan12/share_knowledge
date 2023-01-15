<template>
  <div class="login">
    <van-image
      class="login--image"
      width="130"
      height="80"
      :src="require('../../assets/images/login/clound.png')"
    />
    <span class="login--title">知识分享</span>
    <div class="login__table">
      <router-view />
      <div
        v-show="showOption"
        class="login__table--option"
      >
        <router-link to="/ForgetView">忘记密码</router-link>
        <router-link to="/RegisterView">注册</router-link>
      </div>
    </div>

  </div>
</template>
<script>

import { Image as VanImage } from 'vant';
export default {
  name: 'LoginView',
  components: { VanImage },
  data () {
    return {

    }
  },
  computed: {
    showOption () {
      return this.$route.path === '/PasswordLogin'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.login {
  width: 100%;
  height: 367px;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  &--image {
    position: fixed;
    top: 75px;
    left: 25px;
  }
  &--title {
    position: fixed;
    top: 180px;
    right: 25px;
    font-size: 48px;
    color: $cf;
  }
  &__table {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 420px;
    background-color: $cf;
    padding: 20px;
    border-radius: 20px 20px 0px 0px;
    &--option {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      padding: 0px 20px 0px 20px;
      a {
        font-size: 14px;
        color: $c8;
      }
    }
  }
}
</style>
