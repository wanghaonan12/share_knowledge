<template>
  <div>
    <NavBar
      to="PasswordLogin"
      bg-color="transparency"
      title=""
      letf-color="
      #fff"
    ></NavBar>
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
          placeholder="请输入验证码"
          show-password
        ></el-input>
        <el-input
          v-model="form.password"
          class="table--password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          show-password
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
          native-type="submit"
        >重置密码</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/global/navBar'
export default {
  name: 'ForgetView',
  components: {
    NavBar,
  },
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
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
