
<template>
  <div class="box">

    <div
      v-for="(value ,index) in userList"
      :key="index"
    >
      <van-cell
        :value="value['roles']"
        is-link
        @click="show(value['id'])"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div style="display: flex;">
            <van-image
              width="30"
              height="30"
              :src="value['avatar']"
            />
            <span style="margin-left: 10px;">{{ value['name'] }}</span>
          </div>
        </template>
      </van-cell>
      <van-action-sheet
        v-model:show="showClassifyAcrion"
        :actions="showData"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import { getUser, setUserRoler } from 'api/mine'
import { Cell as VanCell, Image as VanImage, ActionSheet as VanActionSheet } from 'vant';

export default {
  name: 'ManagementUser',
  components: { VanCell, VanImage, VanActionSheet },
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
    }
  },
  created () {
    this.getAll()
  },
  methods: {
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
    // 获取用户列表
    getAll () {
      getUser().then((res) => {
        this.userList = res
      }).catch((err) => {
        this.$message.error(err)
      })
    },


  }
}
</script>

<style lang="scss" scoped>
</style>
