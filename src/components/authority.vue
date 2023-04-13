<template>
  <van-collapse
    v-model="activeNames"
    :disabled="collapseEnable"
  >
    <van-collapse-item
      :is-link="false"
      name="1"
    >
      <!-- 左侧标题 -->
      <template #title>
        <div class="title">
          <van-image
            round
            width="30"
            height="30"
            :src="avatar"
          />
          <div class="nickname">{{ nickname }} </div>
        </div>
      </template>
      <!-- 右侧事件 -->
      <template #value>
        <div class="roler">
          <van-dropdown-menu>
            <van-dropdown-item
              v-model="value"
              :options="isSuperAdmin ? rolerList1 : rolerList2"
              @change="setRoler"
            />

          </van-dropdown-menu>
        </div>
      </template>
      <!-- 展开内容 -->
      <div
        v-if="isSuperAdmin"
        class="content"
      >
        <div>
          社区管理权限
        </div>
        <div class="check">
          <div
            v-for="(value,index ) in opition "
            :key="index"
          >
            <van-checkbox
              v-model="value['have']"
              @click="setManagement(value['have'],value['managementTagId'])"
            >{{ value['classify'] }}</van-checkbox>
          </div>
        </div>
      </div>

      <div class="content">
        <div>
          加入社区
        </div>
        <div class="check">
          <div
            v-for="(value,index ) in joinTable "
            :key="index"
          >
            <van-checkbox
              v-model="value['join']"
              @click="ForumManagement(value['join'],value['id'])"
            >{{ value['classify'] }}</van-checkbox>
          </div>
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
import { setUserRoler } from '@/api/mine';
import { removeManagement, createManagement, JoinForum, RemoveForum } from '@/api/mine';
export default {
  name: 'AuthorityVue',
  props: {
    collapseEnable: {
      type: Boolean,
      default: false
    },
    nickname: {
      type: String,
      default: 'wangrich'
    },
    avatar: {
      type: String,
      default: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
    },
    checkboxData: {
      type: Array

    },
    opition: {
      type: Array
    },
    isSuperAdmin: {
      type: Boolean,
      default: true
    },
    roler: {
      type: String,
      default: 'user'
    },
    userId: {
      type: String
    },
    joinTable: {
      type: Array
    }

  },
  data () {
    return {
      value: this.roler === 'user' ? '0' : this.roler === 'admin' ? '1' : '-1',
      checked: false,
      activeNames: [],
      isExpanded: false,
      selectedOptions: [],
      rolerList1: [
        { text: '管理员', value: '1' },
        { text: '用户', value: '0' },
        { text: '禁用', value: '-1' },
      ],
      rolerList2: [
        { text: '用户', value: '0' },
        { text: '禁用', value: '-1' },
      ]
    };
  },
  computed: {
  },
  methods: {
    expand () {
      this.isExpanded = !this.isExpanded;
    },
    // 设置角色
    setRoler (articleTagId) {
      setUserRoler({ "userId": this.userId, "roles": articleTagId }).then(() => {
      }).catch((err) => {
        this.$message.error(err)
      })
    },

    // 设置管理
    setManagement (status, managementTagId) {
      let data = {
        "managementTagId": managementTagId,
        "managementUserId": this.userId
      }
      if (!status) {
        // 移除权限
        removeManagement(data).catch((err) => {
          this.$message.error(err)
        })
      } else {
        // 添加权限
        createManagement(data).catch((err) => {
          this.$message.error(err)
        })
      }
    },
    // 进入移出论坛管理
    ForumManagement (status, tagId) {
      let data = {
        "articleTagId": tagId,
        "userId": this.userId
      }
      if (!status) {
        // 移出
        RemoveForum(data).catch((err) => {
          this.$message.error(err)
        })
      } else {
        // 加入
        JoinForum(data).catch((err) => {
          this.$message.error(err)
        })
      }
    }
  },

};
</script>

<style  lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.title {
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
}
.nickname {
  height: 20px;
  margin-left: 10px;
}
.content {
  display: flex;
  flex-direction: column;
}
.check {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(auto-fill, 20px);
}
</style>
