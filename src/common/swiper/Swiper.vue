<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in banner" :key="item.id">
                <a :href="item.link">
                    <img :src="item.image" alt="" :class="{'full': isfull}">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script>
    export default {
        //["banner", "isfull"]
        props: {
            banner: Array,
            isfull: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        text-align:center;
        height:230px;
        .mint-swipe-item{

            img{
                height:100%;
            }
        }
        }
        .full{
            width:100%;
        }
</style>