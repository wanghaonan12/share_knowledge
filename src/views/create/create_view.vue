<template>
  <div style="padding-bottom: 65px;">
    <div>
      <van-field
        v-model="data['title']"
        rows="1"
        type="textarea"
        placeholder="标题"
      />
      <van-field
        v-model="data['content']"
        rows="10"
        type="textarea"
        placeholder="请输入内容描述"
      />
      <!-- 文件选择器 -->
      <van-uploader
        v-model="file"
        multiple
        :max-count="5"
      >
      </van-uploader>
      <!-- 分享标签 -->
      <list-bar
        :click="()=>{showShareAcrion = true
      showData = calssfilyShowActions}
        "
        my-key="分享"
        :my-value="showShare"
      ></list-bar>
      <!-- 分类标签 -->
      <list-bar
        :click="()=>{showClassifyAcrion = true
      showData = tageData}
        "
        my-key="分类"
        :my-value="showClassify"
      ></list-bar>
      <!-- 赏金 -->
      <list-bar
        :click="()=>{showAward=true}"
        :my-value="data['award']"
        my-key="赏金"
      ></list-bar>

    </div>
    <!-- 赏金Popup -->
    <van-popup
      v-model:show="showAward"
      :style="{ padding: '20px 64px' }"
    ><van-field
        v-model="data['award']"
        placeholder="请输入"
      />
      <el-button
        class="button"
        @click="()=>{showAward=false}"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>
    <!-- 分类action -->
    <van-action-sheet
      v-model:show="showClassifyAcrion"
      :actions="showData"
      @select="onSelectClassify"
    />
    <!-- 分享action -->
    <van-action-sheet
      v-model:show="showShareAcrion"
      :actions="showData"
      @select="onSelectShare"
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
import { createArticle } from '@/api/create';
import { getTageAll } from '@/api/tag';
import { Popup as VanPopup, Field as vanField, ActionSheet as VanActionSheet, Uploader as VanUploader } from 'vant';
export default {
  name: 'CeateView',
  components: { VanPopup, TabBar, vanField, VanActionSheet, VanUploader, listBar },
  data () {
    return {
      data: {
        'articleTagId': '',
        'award': '0',
        'content': '',
        'title': '',
        'share': 'true',
        'imageFile': []
      },
      file: [],
      showAward: false,
      showShare: '是',
      showClassify: '',
      showData: [],
      message: '',
      title: '',
      showClassifyAcrion: false,
      showShareAcrion: false,
      tageData: [],
      calssfilyShowActions: [
        { name: '是', value: 'true' },
        { name: '否', value: 'false' },
      ]
    }
  },
  created () {
    this.getTage()
  },
  methods: {
    // 选择事件
    onSelectShare (item) {
      this.showShareAcrion = false
      this.showShare = item['name']
      this.data['share'] = item['value']
    },
    onSelectClassify (item) {
      this.showClassifyAcrion = false
      this.showClassify = item['name']
      this.data['articleTagId'] = item['value']
    },
    // 创建文章
    sent () {
      if (this.file.length > 0) {
        this.file.forEach(element => {
          this.data['imageFile'].push(element['file'])
        });
      }

      createArticle(this.data).then((res) => { this.$message.success(res) }).catch((err) => { this.$message.error(err) })
    },
    // 获取标签
    getTage () {
      getTageAll().then((res) => {
        this.tageData = []
        res.forEach(element => {
          this.tageData.push({ name: element.classify, value: element.id })
        });
        this.showClassify = this.tageData[0]['name']
        this.data['articleTagId'] = this.tageData[0]['value']
      }).catch((err) => {
        this.$message.error(err)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
