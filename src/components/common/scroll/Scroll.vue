<template>
    <!-- ref/children -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            } 
        },
        mounted() {
            // 1. 创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                // 只有 click设置为 true 被 包裹的 地方里面的 点击 才能 生效
                click: true,
                // 开启 滚动监听 , 有需要的开启，不浪费性能
                probeType: this.probeType
            })

            // 2. 监听滚动的位置
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            
            // scrollTo(0, 0, 500) 位置和时间
            this.scroll.scrollTo(0, 0)
        },
        methods: {
            scrollTo(x, y, time=300) {
                this.scroll.scrollTo(x, y, time)
            }
        }
    }
</script>

<style scoped>
    
</style>