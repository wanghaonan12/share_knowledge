<template>
  <div>
    <div>
      <van-field
        v-model="title"
        rows="1"
        type="textarea"
        placeholder="标题"
      />
      <van-field
        v-model="message"
        rows="10"
        type="textarea"
        placeholder="请输入内容描述"
      />
      <van-uploader>
      </van-uploader>
      <list-bar
        :click="sent"
        my-key="分享"
        my-value="是"
      ></list-bar>

      <list-bar
        :click="sent"
        my-key="分类"
        my-value="java"
      ></list-bar>

      <list-bar
        my-value="10"
        my-key="赏金"
        :click="sent"
      ></list-bar>
    </div>
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      @select="onSelect"
    />

    <el-button
      class="button"
      @click="sent()"
    >
      <div style="padding:0px 125px;">发布</div>
    </el-button>
    <TabBar></TabBar>
  </div>
</template>
<script>
import listBar from '@/components/global/listBar.vue';
import TabBar from '@/components/global/tabbar.vue'
import { Field as vanField, ActionSheet as VanActionSheet, Uploader as VanUploader } from 'vant';
export default {
  name: 'CeateView',
  components: { TabBar, vanField, VanActionSheet, VanUploader, listBar },
  data () {
    return {
      show: false,
      message: '',
      title: '',
      actions: [
        { name: '一' },
        { name: '二' },
        { name: '三' },
      ]
    }
  },
  methods: {
    sent () { console.log('发布'); },
    onSelect (item) {
      this.show.value = false;
    }, afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
