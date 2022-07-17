<template>
    <ItemMusicTop :playlist="state.playlist"/>
</template>
<script>
import {useRoute} from 'vue-router'
import { onMounted,reactive } from 'vue'
import {getMusicItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/home/item/itemMusicTop.vue'
export default {
    setup(){
        const state=reactive({
            playlist:{}
        });
        onMounted(async ()=>{
            let id=useRoute().query.id
            console.log(id);
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist=res.data.playlist
        });
        return {state}
    },
    components:{
        ItemMusicTop
    }
}
</script>