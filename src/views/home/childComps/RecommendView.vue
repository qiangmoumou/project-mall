<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        
      }
    },
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
 
<style scoped>
  .recommend{
    width: 100%;
    padding: 0 2.5%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin:20px auto;
    padding-bottom: 15px;
    border-bottom: 10px solid #eee;
  }
  .recommend>div{
    text-align: center;
    width: 22%;
  }
  .recommend div img{
    width: 100%;
    margin-bottom:10px;
  }
</style>