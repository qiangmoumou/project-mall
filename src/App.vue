<template>
  <div id="app">
    
    <!-- <transition> -->
      <router-view></router-view>
    <!-- </transition> -->
    
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style lang="scss">
  
  @import "assets/css/base.css";
  #app{
    // overflow: hidden;    // 去掉 overflow 也就去掉了， 动画效果，因为动画效果需要 overflow
    // .v-enter{
    //   opacity: 0;
    //   transform: translateX(100%);
    // }
    // .v-leave-to{
    //   opacity: 0;
    //   transform: translateX(-100%);
    //   position: absolute;
    // }

    // .v-enter-active,
    // .v-leave-active{
    //   transition:all .5s ease;
    // }
  }

</style>
