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
        >
        </el-input>
        <el-input
          v-model="form.verification"
          style="padding:0px;"
          class="table--email"
          prefix-icon="el-icon-key"
          placeholder="请输入验证码"
        >
          <template #append>
            <el-button @click="getVerification()">{{ verification }}</el-button>
          </template>
        </el-input>

        <el-input
          v-model="form.password"
          class="table--password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          show-password
        ></el-input>
        <el-input
          v-model="form.confirmPassword"
          class="table--password"
          prefix-icon="el-icon-lock"
          placeholder="确认密码"
          show-password
        ></el-input>
        <el-button
          size="medium"
          type="primary"
          round
          @click="resetPassword()"
        >注册账号</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/global/navBar.vue'
import { register, getVer } from 'api/login'
import { Email } from '@/constant/rules'
export default {
  name: 'RegisterView',
  components: {
    NavBar,
  },
  data () {
    return {
      verification: '获取验证码',
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        verification: ''
      },
    }

  },
  methods: {
    // 设置获取验证码显示
    setSowVerification () {
      if (this.verification === '获取验证码') {
        this.verification = 60
        let that = this
        let time = setInterval(() => {
          that.verification--
          if (that.verification === 0) {
            that.verification = '获取验证码'
            clearInterval(time)
          }
        }, 1000)
      }
    },

    // 获取验证码
    getVerification () {
      if (Email.test(this.form.email)) {
        getVer({ email: this.form.email })
          .then((res) => {
            this.setSowVerification()
            this.$message.success(res)
          }).catch((err) => {
            this.$message.error(err)
          })
      }
    },

    // 注册账号
    resetPassword () {
      if (this.form.confirmPassword === this.form.password) {
        register({ email: this.form.email, password: this.form.password, code: this.form.verification })
          .then((res) => {
            console.log(res);
            this.$message.success(res)
          }).catch((err) => {
            this.$message.error(err)
          })
      } else {
        this.$message.error('两次密码不一致')
      }
    }
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
:deep(.el-input-group__append) {
  width: 3rem;
  border: none;
  border-radius: 5px;
  padding: 0px;
}
:deep(.el-input-group__prepend) {
  padding: 0px;
}
:deep(.el-button--default) {
  padding: 0px;
}
</style>
