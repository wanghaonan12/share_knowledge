<template>
  <div class="box">
    <van-button
      type="default"
      @click="show=true"
    >
      <div style="padding:0px 125px;">+</div>
    </van-button>
    <div
      v-for="(value,index) in tag"
      :key="index"
    >
      <van-swipe-cell>
        <van-cell
          center
          :title="value['classify'] "
          value=""
          :label="value['content'] ? value['content'] :'暂无描述'"
        />
        <template #right>
          <van-button
            square
            type="danger"
            text="删除"
            @click="removeTag(value['id'])"
          />
        </template>
      </van-swipe-cell>
    </div>
    <van-popup
      v-model:show="show"
      :style="{ padding: '20px 64px' }"
    >
      <van-field
        v-model="tagData['classify']"
        placeholder="标签名称"
      />
      <van-field
        v-model="tagData.content"
        placeholder="标签描述"
      />
      <el-button
        class="button"
        @click="add"
      >
        <div style="padding:0px 70px;">确定</div>
      </el-button>
    </van-popup>
  </div>
</template>
<script>
import { getTageAll, createTage, deleteTage } from 'api/tag';
import { SwipeCell as VanSwipeCell, Cell as VanCell, Button as VanButton } from 'vant';
export default {
  name: 'TagView',
  components: { VanSwipeCell, VanCell, VanButton },
  data () {
    return {
      tag: [],
      show: false,
      tagData: {
        "classify": "",
        "content": "",
      }
    }
  },
  created () {
    this.getTage()
  },
  methods: {
    // 获取标签
    getTage () {
      getTageAll().then((res) => {
        this.tag = res
        console.log(res);
      })
    },
    // 移除标签
    removeTag (index) {
      deleteTage(index).then(() => {
        this.getTage()
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    // 添加标签
    add () {
      if (this.tagData.classify.length > 0) {
        createTage(this.tagData).then(() => {
          this.getTage()
          this.show = false
        }).catch((err) => {
          this.$message.error(err)
        })
      } else {
        this.$message.error("请输入标签标题")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>