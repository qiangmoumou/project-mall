<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="tabbar-text" ></slot></div>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
       
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // 跳转页面 没有历史记录，点击返回 会 返回上上级， 不会返回上级，因为没有记录
        this.$router.replace(this.path)
      }
    }
  }
</script>
 
<style scoped>
  .tab-bar-item{
      flex: 1;
      text-align: center;
      height:46px;
      font-size:14px;
  }
  .active{
    color:red;
  }
</style>