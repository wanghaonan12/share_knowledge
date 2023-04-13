<template>
  <div class="box">
    <div class="infor">
      <div class="infor--avatar"><van-image
          width="60"
          height="60"
          fit="cover"
          :src="infor['avatar']"
        /></div>
      <div class="infor__content">
        <div class="infor__content--nickname">
          {{infor['name']}}
        </div>
        <div class="infor__content--count">
          {{infor['email']}}
        </div>
      </div>
    </div>

    <div
      v-for=" ( key ,index) in showTab"
      :key="index"
      class="grey"
    >
      <listBarVue
        :click="key['click']"
        :my-icon="key['icon']"
        :my-key="key['discription']"
        :my-value="key['content']"
      ></listBarVue>
    </div>
    <!-- 性别选择action -->
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      @select="onSelect"
    />
    <!-- 昵称Popup -->
    <van-popup
      v-model:show="showPopupNickame"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="userData['name']"
        placeholder="请输入"
      />
      <el-button
        class="button"
        @click="updataUserData()"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>

    <!-- 密码Popup -->
    <van-popup
      v-model:show="showPopupPassWord"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="userData['password']"
        placeholder="请输入"
      />
      <el-button
        class="button"
        @click="updataUserData()"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>

    <!-- 年纪Popup -->
    <van-popup
      v-model:show="showPopupAge"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="userData['age']"
        placeholder="请输入"
      />
      <el-button
        class="button"
        @click="updataUserData()"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>

    <!-- 积分Popup -->
    <van-popup
      v-model:show="alipayShow"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="total"
        type="number"
        placeholder="请输入充值金额"
      />
      <el-button
        class="button"
        @click="AliPayFunction()"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>

    <!-- 退出登录按钮 -->
    <el-button
      class="button"
      @click="logout()"
    >
      <div style="padding:0px 125px;">退出登录</div>
    </el-button>
    <TabBar></TabBar>
  </div>
</template>
<script>
import { ActionSheet as VanActionSheet, Image as VanImage, Popup as VanPopup, Field as VanField } from 'vant';
import TabBar from '@/components/global/tabbar.vue'
import listBarVue from '@/components/global/listBar.vue'
import { getUserInfo, updata, AliPay } from 'api/mine'
export default {
  name: 'MineView',
  components: { TabBar, listBarVue, VanActionSheet, VanImage, VanPopup, VanField, },
  data () {
    return {
      total: '',
      userData: {
        "age": "",
        "name": "",
        "password": "",
        "sex": ""
      },
      infor: {
        'avatar': '',
        'name': '',
        'email': '',
      },
      nickname: '',
      password: '',
      alipayShow: false,
      showPopupPassWord: false,
      showPopupAge: false,
      showPopupNickame: false,
      // 选择面板的显示属性
      show: false,
      // 列表渲染数据
      showTab: [
        { icon: '\ue69b', discription: '浏览历史', content: '', click: () => { this.$router.push({ name: 'HistoryView' }) } },
        { icon: '\ue612', discription: '积分详情', content: '', click: () => { this.$router.push({ name: 'RechangeRecord' }) } },
        { icon: '\ue651', discription: '我的点赞', content: '', click: () => { this.$router.push({ name: 'PraisHistory' }) } },
        { icon: '\ue614', discription: '我的创建', content: '', click: () => { this.$router.push({ name: 'MyCreate' }) } },
        { icon: '\ue638', discription: '修改密码', content: '', click: () => { this.showPopupPassWord = true } },
        { icon: '\ue615', discription: '修改昵称', content: '', click: () => { this.showPopupNickame = true } },
        { icon: '\ue617', discription: '年纪', content: '', click: () => { this.showPopupAge = true } },
        { icon: '\ue642', discription: '性别', content: '', click: () => { this.show = true } },
        { icon: '\ue603', discription: '积分', content: '', click: () => { this.alipayShow = true } },
        { icon: '\ue603', discription: '权限申请', content: '', click: () => { this.$router.push({ name: 'ApplyForView' }) } },
      ],
      actions: [
        { name: '女', value: '0' },
        { name: '男', value: '1' },
      ]

    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    // 支付
    AliPayFunction () {
      AliPay(this.total)
      this.total = ''
    },
    // 路由跳转
    routerPush (path) {
      this.$router.push({ name: path })
    },
    // 推出登录
    logout () {
      this.$store.dispatch('logout')
    },
    // 性别选择
    onSelect (res) {
      this.userData['sex'] = res['value']
      this.updataUserData()
      this.show = false;
    },
    // 更新用户信息
    updataUserData () {
      console.log(this.userData);
      updata(this.userData).then((res) => {
        this.$message.success(res)
        // 清除数据
        this.userData = {
          "age": "",
          "name": "",
          "password": "",
          "sex": ""
        }
        this.getInfo()
        this.showPopupPassWord = false
        this.showPopupAge = false
        this.showPopupNickame = false
      }).catch((err) => { this.$message.error(err) })
    },
    // 获取用户信息
    getInfo () {
      getUserInfo(this.$store.state.login.userId).then((res) => {
        this.infor = res
        this.showTab[5]['content'] = res['name']
        this.showTab[6]['content'] = res['age'] + ''
        this.showTab[7]['content'] = res['sex']
        this.showTab[8]['content'] = res['bonus'] + ''
      }).catch((err) => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.box {
  margin-bottom: 60px;
  .infor {
    margin-bottom: 10px;
    padding: 25px;
    background-color: $grey;
    display: flex;
    font-size: 18px;
    &--avatar {
      width: 60px;
      height: 60px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60px;
      padding: 5px 15px;
      align-items: start;
    }
  }
  .grey {
    padding: 5px 0px;
    background-color: $grey;
  }
  .newGrey > * {
    padding: 5px 0px;
    background-color: $grey;
  }
  .button {
    margin-top: 10px;
  }
}
</style>
