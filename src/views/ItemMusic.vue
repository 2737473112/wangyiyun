<template>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import ItemMusicTop from '@/components/item/itemMusicTop.vue'
import ItemMusicList from '@/components/item/itemMusicList.vue'
import { userInfo } from 'os'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import {getMusicItemList,getItemList} from "@/request/api/item.js"
    export default{
        setup(){
            const state=reactive({
                playlist:{},//歌单详情页数据
                itemList:{},//歌单的歌曲

            });

            onMounted(async ()=>{
                let id=useRoute().query.id; 
                //获取歌单详情              
                let res=await getMusicItemList(id) 
                state.playlist=res.data.playlist;
                //获取歌单的歌曲
                let result=await getItemList(id)
                state.itemList=result.data.songs;
                //防止页面刷新造成数据丢失，保存在sessionStorage中
                sessionStorage.setItem('itemDetail',JSON.stringify(state))
            });
            return {state}
        },

        components: {
            ItemMusicTop,ItemMusicList
        }

    }
</script>
