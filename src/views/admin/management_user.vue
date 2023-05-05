
<template>
  <div class="box">
    <div
      v-for="(value,index) in userList"
      :key="index"
    >
      <authority
        :is-super-admin="isSuperAdmin"
        :avatar="value['avatar']"
        :opition="value['managementTables']"
        :nickname="value['name']"
        :roler="value['roles']"
        :user-id="value['id']"
        :join-table="value['joinForums']"
      />
    </div>

  </div>
</template>
<script>
import { setUserRoler, getAllUserAndManagement } from 'api/mine'
// import { Cell as VanCell, Image as VanImage, ActionSheet as VanActionSheet } from 'vant';

import authority from '@/components/authority.vue'
export default {
  name: 'ManagementUser',
  components: { authority },
  data () {
    return {

      showClassifyAcrion: false,
      showData: [
        { name: '管理员', value: '1' },
        { name: '用户', value: '0' },
        { name: '禁用', value: '-1' },
      ],
      index: 0,
      userList: [],
      pageQuuery: {
        "id": "",
        "name": "",
        "roles": ""
      }
    }
  },
  computed: {
    isSuperAdmin () {
      return this.$store.state.login.userId == '79c308ea630d4e6f8d647e8278962bea'
    }
  },
  created () {
    // this.getAll()
    this.getAllUserManagement()
  },
  methods: {
    // 获取用户和权限
    getAllUserManagement () {
      this.pageQuuery.roles = this.isSuperAdmin ? '' : 'user'
      getAllUserAndManagement(this.pageQuuery).then((res) => {
        console.log(res);
        this.userList = res
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 展示用权限
    show (index) {
      this.showClassifyAcrion = true;
      this.index = index
    },
    // 选择权限点击事件，设置用户角色
    onSelect (data) {
      this.showClassifyAcrion = false;
      data = {
        "roles": data['value'],
        "userId": this.index
      }
      setUserRoler(data).then(() => {
        this.getAll()
      }).catch((err) => {
        this.$message.error(err)
      })
    },

    // // 获取用户列表
    // getAll () {
    //   getUser().then((res) => {
    //     this.userList = res
    //   }).catch((err) => {
    //     this.$message.error(err)
    //   })
    // },


  }
}
</script>

<style lang="scss" scoped>
</style>
