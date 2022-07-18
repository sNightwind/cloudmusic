<template>
    <div>
        <van-card
        v-for="item in art"
        :key = "item.id"
        :thumb = "item.picUrl"
        >
            <template #title>
                <span class="name">姓名：{{item.name}}</span><hr>
                <span class="alias">英文名：{{item.alias}}</span>
                
            </template> 
            
        </van-card>
        <back-top :visible="visible" @click="handleBackTop"></back-top>
    </div>
</template>

<script>
import Vue from 'vue'
import {getArtist} from '@/api/command'


export default{
    name:'artist',
    data(){
        return{
            art:[]
        }
    },
    async created(){
        try{
            let res = await getArtist();
            console.log(res.data.list.artists)
            this.art = res.data.list.artists
        }catch(error){
            console.log('有错误',error);
        }
    },
    methods:{
        handleBackTop(){
            document.querySelector('main').scrollTop = 0 ;
        }
    }

}
</script>