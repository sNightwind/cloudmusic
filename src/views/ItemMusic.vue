<template>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import {useRoute} from 'vue-router'
import { onMounted,reactive } from 'vue'
import {getMusicItemList,getItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/home/item/itemMusicTop.vue'
import ItemMusicList from '@/components/home/item/itemMusicList.vue'

export default {
    setup(){
        const state=reactive({
            playlist:{},//歌单详情页
            itemList:[]//歌单歌曲
        });
        onMounted(async ()=>{
            let id=useRoute().query.id
            console.log(id);
            //获取歌单详情
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist=res.data.playlist
            //获取歌单歌曲
            let result=await getItemList(id);
            console.log(result);
            state.itemList=result.data.songs

            //防止刷新造成数据丢失
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return {state}
    },
    components:{
        ItemMusicTop
    }
}
</script>