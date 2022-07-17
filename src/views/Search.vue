<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="Taylor" v-model="searchKey" @keydown.enter="enterKey"/>
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for="item in keyWorldList" :key="item" class="spanKey">
        {{item}}
        </span>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
</template>
<script>
export default{
    data(){
        return{
            keyWorldList:[],
            searchKey:""
        }
    },
    mounted(){
        this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')) 
    },
    methods:{
        enterKey:function(){
            this.keyWorldList.push(this.searchKey);
            localStorage.setItem("keyWorldList",JSON.stringify(this.keyWorldList))
            this.searchKey=""
        }
    }
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
    }
    .icon{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: .2rem;
    }
}
</style>