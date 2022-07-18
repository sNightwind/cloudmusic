<template>
    <div class="program" v-if="detail">         
        <van-image
            width="100%"
            height="10rem"
            fit="cover"
            :src="detail.data.data.commentDatas.userProfile.avatarUrl"
        />
        <
    </div>
</template>

<script>
import Vue from 'vue'
import {getDjDetail} from '@/api/command'
import { Dialog } from 'vant';
export default{
    name:'Detail',
    data(){
        return{
            detail:null,
            tip:[],
        }
    },
    async created(){
        // let res5 = await getProgram()
        let detail =  await getDjDetail(this.$route.params.rid);
        // console.log(detail)
        let res = await getDjDetail();
        this.tip = res.data.data
        // console.log(this.tip)
        // const {detail} = res.data.data
        // console.log(detail)
        if(detail ==null || detail == undefined){
            Dialog.alert({
               title: '加载失败',
               message: '对不起，数据加载失败，请重试！',
               })
               .then(() => {
                 this.$router.push('/home');
               })
               .catch(() => {
                  window.close();
               });
       }
       this.detail = detail ;
    //    console.log(this.detail);
    console.log(detail.data.data.commentDatas);
    // console.log(detail.data.data.commentDatas.userProfile);
    },
}


</script>