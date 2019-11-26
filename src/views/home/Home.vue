<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>

        <!-- 绑定 BScroll -->
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">

            <!-- 轮播图 -->
            <swiper :banner="banners" :isfull="true"></swiper>

            <!-- 推荐 -->
            <recommendView :recommend="recommends" />

            <!-- 本周流行 -->
            <feature-view />

            <!-- 分类 -->
            <!-- 默认类型为 pop  => :goods="goods['pop'].list" -->
            <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
            <goods-list :goods="showGoods" />

        </scroll>
            
        <!-- 回到顶部  当我们需要监听一个组件的原生事件时，必须给对应的事件加上 .native修饰符 才能进行监听（区别：元素就像上面写的方法一样直接监听，但是这里是组件监听所以要用修饰符）-->
        <back-top @click.native="backClick" v-show="isShow"/>
        
    </div>
</template>

<script>
// 公共
import Swiper from '@/common/swiper/Swiper'
import Scroll from '@/components/common/scroll/Scroll'

// 半公共
import {getHomeMultidata, getHomeGoods} from 'network/home'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

// 私有
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

    export default {
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                // 默认为 pop
                currentType: 'pop',
                // 返回顶部的显示隐藏
                isShow: false,
                // 滚动框高度
                isHeight: 0
            }
        },
        components: {
            Swiper,
            Scroll,

            NavBar,
            TabControl,
            GoodsList,
            BackTop,
            
            RecommendView,
            FeatureView,


        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        created() {
            // 1.1 请求多个数据
            this.getHomeMultidata()

            // 2.1 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
   
        },
        methods: {
            /*
            * 事件监听相关的方法
            */

            // 子组件传过来的值， 来触发的一个方法 $emit
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2: 
                        this.currentType = 'sell' 
                        break       
                }
            },

            // 回到顶部
            backClick() {
                // 拿到 Scroll 内部的方法进行调用，time默认300，传值就会改变
                this.$refs.scroll.scrollTo(0, 0)
            },

            // 滚动相关操作
            contentScroll(position) {               
                this.isHeight = this.$refs.scroll.$refs.wrapper.offsetHeight
                this.isShow = -position.y > this.isHeight
            },



            /*
            * 网络请求相关的方法
            */
            // 把请求数据的代码方法写到这里更好,到时候直接交给 created 调用就行
            getHomeMultidata() {
                // 1. 请求多个数据
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },

            // 2. 请求商品数据
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    // ...nums1 解构: 解析数组,将数组中的元素一个一个的取出来
                    this.goods[type].list.push(...res.data.list)
                    // 页码加 1
                    this.goods[type].page += 1
                })
            }
        }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index: 9;
    }
    
    .tab-control{
        position: sticky;    /* 如果要用 position：stikcy 的话，它的父元素就不能用 overflow: hidden; 但是地导航切换又需要overflow, 所以在这里把动画去掉了， */
        top: 44px;           /* 因为我们要这个 position:sticky的效果， 这个效果这样写只是暂时的，将来正确的写法是用js 来实现 */
    }

    .content{
        height: calc(100% - 96px);
        overflow: hidden;
        margin-top: 44px;
    }
</style>
