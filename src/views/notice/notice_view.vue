<template>
  <div class="box">
    <div
      v-if="noticeData.length>0 "
      class="delete iconfont icon-delete"
      @click="remove"
    ></div>
    <div
      v-for="(value,index) in noticeData"
      :key="index"
    >
      <div @click="enShow(index)">
        <noticeListVue
          :article-tag-id="value['articleTagId']"
          :species="value['species']"
          :user-id="value['userId']"
          :article-tag-name="value['articleTagName']"
          :index="index"
          :content="value['content']"
          :create-time="value['date']"
          :nickname="value['nickname']"
          :show-point="value['showPoint']"
          :send-user-avatar="value['avatar']"
          @delete-manage="deleteManage"
        />
      </div>
    </div>

    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/global/tabbar.vue'
import noticeListVue from '@/components/noticeList.vue'
import { setItem, getItem, removeItem } from "@/utils/storage";

export default {
  name: 'NoticeView',
  components: { TabBar, noticeListVue },
  data () {
    return {
      message: 'notice_view',
      noticeData: []
    }
  },
  created () {
    this.noticeData = getItem("notice") ? getItem("notice") : []
    this.socketApi.createWebSocket()
    this.socketApi.getSock(this.getConfigResult);
  },
  methods: {
    remove () {
      removeItem("notice")
      this.noticeData = getItem("notice")
    },
    getConfigResult (res) {
      if ('' == res['species']) {
        // 通知信息处理
        // 添加是否点击的属性
        res['showPoint'] = true
        this.noticeData.push(res)
        setItem("notice", this.noticeData)
      } else {

        res['showPoint'] = true
        this.noticeData.push(res)
        console.log(this.noticeData, 'noticel');
        setItem("notice", this.noticeData)
      }

    },
    enShow (index) {
      this.noticeData[index]['showPoint'] = false
      setItem("notice", this.noticeData)
    },
    // 删除已经解决的事件
    deleteManage (index) {
      console.log(index);
      // this.noticeData.splice(index, 1)
      // setItem("notice", this.noticeData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';

.box {
  padding: 10px 5px;
  margin-bottom: 50px;
}

.delete {
  border: 1px solid $c8;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  right: 30px;
  bottom: 80px;
  color: $c8;
  font-size: 23px;
}
</style>
