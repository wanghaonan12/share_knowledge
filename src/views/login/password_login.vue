<template>
  <div class="table">
    <el-form ref="form">
      <el-input
        v-model="form.email"
        class="table--email"
        prefix-icon="el-icon-message"
        placeholder="请输入邮箱"
      ></el-input>
      <el-input
        v-model="form.password"
        class="table--password"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        show-password
      ></el-input>
      <el-button
        size="medium"
        type="primary"
        round
        @click="login()"
      >登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'PasswordLogin',
  data () {
    return {
      form: {
        email: '1470918223@qq.com',
        password: '123456789'
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginByPassword', this.form)
    },
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin-top: 45px;
  font-size: 20px;
  &--email {
    margin-bottom: 20px;
  }
  &--password {
    margin-bottom: 20px;
  }
}

// element-ui样式修改
:deep(.el-input__inner) {
  height: 50px;
  border-radius: 25px;
}
:deep(.el-input__icon) {
  line-height: 50px;
}
:deep(.el-button) {
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
}
</style>
