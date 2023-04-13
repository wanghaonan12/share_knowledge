<template>
  <div class="tabBar">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="tabBar__item"
    >
      <router-link :to="{ name: item.routername }">
        <div :class=" $route.name==item.routername ? 'tabBar__item--icon iconfont active' : 'tabBar__item--icon iconfont no_active' ">{{ item.iconfont }}</div>
        <div :class="$route.name=='' ?  $route.name==item.routername ?'tabBar__item--title active':'tabBar__item--title no_active':$route.name==item.routername ?'tabBar__item--title active':'tabBar__item--title no_active' ">{{ item.message }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>

import store from '@/store'
export default {
  name: 'CeateView',
  data () {
    return {
      // tableBarData: [
      //   {
      //     message: '首页',
      //     iconfont: '\ue600',
      //     routername: 'HomeView',
      //   },
      //   {
      //     message: '发布',
      //     iconfont: '\ue85a',
      //     routername: 'CreateView',
      //   },
      //   {
      //     message: '通知',
      //     iconfont: '\ue63e',
      //     routername: 'NoticeView',
      //   },
      //   {
      //     message: '我的',
      //     iconfont: '\ue679',
      //     routername: 'MineView',
      //   },
      // ],
    }
  },
  computed: {
    list: () => {
      return store.state.login.roler == 'admin' ? [
        {
          message: '首页',
          iconfont: '\ue600',
          routername: 'HomeView',
        },
        {
          message: '发布',
          iconfont: '\ue85a',
          routername: 'CreateView',
        }, {
          message: '管理',
          iconfont: '\ueb3c',
          routername: 'ManagementView',
        },
        {
          message: '通知',
          iconfont: '\ue63e',
          routername: 'NoticeView',
        },
        {
          message: '我的',
          iconfont: '\ue679',
          routername: 'MineView',
        },
      ] : [
        {
          message: '首页',
          iconfont: '\ue600',
          routername: 'HomeView',
        },
        {
          message: '发布',
          iconfont: '\ue85a',
          routername: 'CreateView',
        },
        {
          message: '通知',
          iconfont: '\ue63e',
          routername: 'NoticeView',
        },
        {
          message: '我的',
          iconfont: '\ue679',
          routername: 'MineView',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.tabBar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 54px;
  padding-top: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px #e9e9e9;
  &__item {
    flex: 1;
    &--icon {
      color: #383838;
      width: 22px;
      height: 22px;
      font-size: 22px;
      margin: auto;
    }
    &--title {
      font-size: 11px;
      line-height: 20px;
    }
  }
}
.no_active {
  color: $c4;
}
.active {
  color: $wd-primary;
}
</style>
