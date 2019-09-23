<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tabbar-icon" src="~assets/img/tabbar/home.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/home-active.png">
      <div slot="tabbar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tabbar-icon" src="~assets/img/tabbar/fl.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/fl-active.png">
      <div slot="tabbar-text">分类</div>
    </tab-bar-item>  
    <tab-bar-item path="/cart">
      <img slot="tabbar-icon" src="~assets/img/tabbar/shopping.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/shopping-active.png">
      <div slot="tabbar-text">购物车</div>
    </tab-bar-item>  
    <tab-bar-item path="/profile">
      <img slot="tabbar-icon" src="~assets/img/tabbar/me.png">
      <img slot="tabbar-icon-active" src="~assets/img/tabbar/me-active.png">
      <div slot="tabbar-text">我的</div>
    </tab-bar-item>    
  </tab-bar> 
</template>
 
<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
 
<style scoped>
  img{
    width:23px;
    margin:auto;
    margin-bottom:5px;
  }
</style>