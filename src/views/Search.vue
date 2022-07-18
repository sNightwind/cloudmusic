<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="Taylor" v-model="searchKey" @keydown.enter="enterKey"/>
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for="item in keyWorldList" :key="item" class="spanKey" @click="searchHistory(item)">
        {{item}}
        </span>
        <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
</template>
<script>
import { getSearchMusic } from "@/request/api/home.js"

export default{
    data(){
        return{
            keyWorldList:[],
            searchKey:"",
            searchList:[],
        }
    },
    mounted(){
        this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')) ?JSON.parse(localStorage.getItem('keyWorldList')) : [] 
    },
    methods:{
        enterKey:async function(){
            if(this.searchKey != ""){
            this.keyWorldList.unshift(this.searchKey);
            //去重
            this.keyWorldList=[...new Set(this.keyWorldList)]
            //固定长度
            if(this.keyWorldList.length>10){
                this.keyWorldList.splice(this.keyWorldList.length-1,1)
            }
            localStorage.setItem("keyWorldList",JSON.stringify(this.keyWorldList));
            let res =await getSearchMusic(this.searchKey);
            console.log(res);
            this.searchList=res.data.result.songs
            this.searchKey="";
            }
            
        },
        delHistory:function(){
            localStorage.removeItem("keyWorldList")
            this.keyWorldList=[]
        },
        searchHistory:async function(item){
            let res = await getSearchMusic(item);
            console.log(res);
            this.searchList=res.data.result.songs
        },
    },
}
</script>
<style lang="less" scoped>
.searchTop{
    width: 100%;
    height: 1rem;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    input{
        margin-left: .2rem;
        border: none;
        border-bottom:1px solid #666 ;
        width: 90%;
        padding: .1rem;
    }
}
.searchHistory{
    width: 100%;
    padding: .2rem;
    position: relative;
    .searchSpan{
        font-weight: 700;
    }
    .spanKey{
        background-color: rgb(231, 214, 214);
        padding: .1rem .2rem;
        border-radius: .4rem;
        margin: .1rem .2rem;
        display: inline-block;
    }
    .icon{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: .2rem;
    }
}
</style>