<template>
  <div class="box">
    <navBar title="权限申请" />
    <div class="grey">
      <listBarVue
        :click="()=>{
          show=true, 
        data={
        classify: '',
        classifyName: '',
        code: '',
      }}"
        :my-icon="applyForIcon"
        my-key="申请类型"
        :my-value="applyForcontent"
      ></listBarVue>
      <listBarVue
        v-if="data.code=='2'||data.code=='1'"
        :click="()=>{showPopupForum=true}"
        :my-icon="ApplyTagIcon"
        my-key="申请社区"
        :my-value="data.classifyName"
      ></listBarVue>
      <listBarVue
        v-if="data.code=='3'"
        :click="()=>{showPopupCreate=true}"
        :my-icon="createIcon"
        my-key="社区名称"
        :my-value="data.classifyName"
      ></listBarVue>
    </div>

    <!--申请类型action -->
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      @select="onSelect"
    />

    <!-- 申请的社区action -->
    <van-action-sheet
      v-model:show="showPopupForum"
      :actions="tageData"
      @select="selectName"
    />

    <!-- classify Popup -->
    <van-popup
      v-model:show="showPopupCreate"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="data.classifyName"
        placeholder="请输入"
      />
      <el-button
        class="button"
        @click="()=>{showPopupCreate=false}"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>

    <!-- 申请按钮 -->
    <el-button
      class="button"
      @click="apply()"
    >
      <div style="padding:0px 125px;">申请</div>
    </el-button>
    <TabBar></TabBar>
  </div>
</template>
<script>
import navBar from '@/components/global/navBar.vue';
import { ActionSheet as VanActionSheet, Popup as VanPopup, Field as VanField } from 'vant';
import TabBar from '@/components/global/tabbar.vue'
import listBarVue from '@/components/global/listBar.vue'
import { getTageAll } from 'api/tag'
import { ApplyFor } from 'api/mine'
export default {
  name: 'ApplyForView',
  components: { TabBar, listBarVue, VanActionSheet, VanPopup, VanField, navBar },
  data () {
    return {
      data: {
        classify: '',
        classifyName: '',
        code: '',
      },
      // 选择面板的显示属性
      show: false,
      showPopupCreate: false,
      showPopupForum: false,
      applyForIcon: '\ue651',
      applyForcontent: '',
      ApplyTagIcon: '\ue651',
      applyTagcontent: '',
      createIcon: '\ue651',
      actions: [
        { name: '申请加入社区', value: '1' },
        { name: '申请管理员', value: '2' },
        { name: '申请创建社区', value: '3' },
      ],
      tageData: []
    }
  },
  created () {
    this.getTage()
  },
  methods: {
    // 获取标签
    getTage () {

      getTageAll().then((res) => {
        this.tageData = []
        res.forEach(element => {
          this.tageData.push({ name: element['classify'], value: element['id'] })
        });
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 创建
    apply () {
      if (this.data.calssify != '' && this.data.classifyName != '') {
        console.log(this.data);
        ApplyFor(this.data).then(() => {
          this.$message.success('请等待结果！')
          this.$router.back()
        }).catch((err) => {
          this.$message.error(err)
        })
      } else {
        this.$message.error("请输入数值在进行提交")
      }

    },
    // 路由跳转
    routerPush (path) {
      this.$router.push({ name: path })
    },
    // 申请类型选择
    onSelect (res) {
      this.data.code = res['value']
      this.applyForcontent = res['name']
      this.show = false;
    },
    // 申请社区选择
    selectName (res) {
      console.log(res);
      this.data.classify = res['value']
      this.data.classifyName = res['name']
      this.showPopupForum = false;
    },

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.box {
  margin-top: 35px;
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
