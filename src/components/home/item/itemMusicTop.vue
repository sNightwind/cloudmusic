<template>
    <div class="itemMusicTop">
        <div class="itemLeft">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou"></use>
                </svg>
                <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
</template>
<script>
export default{
    setup(props){
        console.log(props);
    },
    props:['playlist']
}
</script>
<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    .itemLeft,.itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>