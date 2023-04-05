<!---->
<template>
  <div
    class="box"
    :style="'grid-template-columns: repeat('+columns+', '+width+'px);'"
  >
    <!--    图片-->
    <img
      v-for="src in imgs"
      :key="src.title"
      class="box__image"
      :style="'max-width:'+ width+'px;'"
      :src="src.url"
      :preview="src.preview"
      :preview-text="src.title"
    >
  </div>
</template>


<script>
export default {
  name: "ImageStyle",
  components: {},
  props: {
    columns: {
      type: Number,
      default: 2
    },
    width: {
      type: Number,
      default: 170
    },
    imgs: {
      type: Array,
    },
  },

  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globalVariable.scss';
.box {
  display: grid;

  grid-column-gap: 10px;
  grid-row-gap: 10px;
  // &__image {
  //   max-width: 100px;
  // }
}
</style>