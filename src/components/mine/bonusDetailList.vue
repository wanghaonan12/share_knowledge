<!--  积分详情 -->
<template>
  <div class="card">
    <div :class="event > 0 ?'iconfont card__left green' : 'iconfont card__left red'">
      {{  event > 0 ? put : send }}
      <div class="infor">
        <div class="infor--time">
          {{ createTime }}
        </div>
        <div class="infor--description">
          {{ description }}
        </div>
      </div>
    </div>
    <div :class=" event>0 ? 'card--value green' : 'card--value red'">
      {{ event>0 ? '+' : '-' }} {{ value }}
    </div>
  </div>
</template>
<script>

export default {
  name: 'BonusDetail',
  components: {},
  props: {
    sendUserAvatar: {
      type: String,
      default: 'http://173.82.193.76:9000/share-kno/images/pexels-eberhard-grossgasteiger-2088210.jpg'
    },
    createTime: {
      type: String,
      default: '2023-3-21'
    },
    value: {
      type: String,
      default: '50'
    },
    description: {
      type: String,
      default: '白捡的50积分白捡的50积分白捡的50积分白捡的50积分'
    },
    event: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      send: "\ue62b",
      put: "\ue60e"
    }
  },
  computed () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.card {
  margin-bottom: 3px;
  background-color: aqua;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 5px 5px;
  padding-right: 10px;
  background-color: $grey;
  box-shadow: 0px 1px 1px 0px #e9e9e9;
  justify-content: space-between;
  align-content: center;
  &__left {
    display: flex;
    justify-content: center;
    .infor {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      &--time {
        align-self: start;
        font-size: 18px;
        color: $c8;
      }
      &--description {
        align-self: start;
        font-size: 15px;
        color: $c4;
        display: inline-block;
        white-space: nowrap;
        max-width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  &--value {
    font-size: 20px;
    color: $c4;
  }
}
.green {
  color: #7ebc59;
}
.red {
  color: #e41749;
}
</style>
