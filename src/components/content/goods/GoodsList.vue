<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

    export default {
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 20px 10px;
        justify-content: space-between;
    }
</style>