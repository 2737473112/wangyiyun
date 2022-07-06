<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>


<script>
    import axios from 'axios'
    import {getBanner} from '@/request/api/home.js'
    import { reactive, onMounted } from 'vue';
        export default {
        setup() {
            const state = reactive({
                images:[
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]});

            onMounted(async ()=>{
               
                let res=await getBanner();
                state.images=res.data.banners
                

            })
            return { state };

        },
        };
</script>


<style lang="less" >
    .van-swipe{
        width: 100%;
        padding:5px;
        .van-swipe__track{
            .van-swipe-item{
                img{
                    width: 100%;
                    height: 3rem;
                }
            }
        .van-swipe__indicator--active{
        background-color: red;
    }
        }
    }

    
</style>
