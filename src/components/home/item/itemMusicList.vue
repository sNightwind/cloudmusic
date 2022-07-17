<template>
    <div class="itemMusicList">
        <div class="itemListTop">
            <div class="listLeft">
                <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-bofang"></use>
                </svg>
                <span>
                    >播放全部<span>(共{{itemList.length}}首)</span>
                </span>
            </div>
            <div class="listRight">
                <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-jiahao"></use>
                </svg>
                <span>收藏({{subscribedCount}})</span>

            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item,i) in itemList" :key="i">
                <div class="itemLeft">
                    <span class="leftSpan">{{i + 1 }}</span>
                    <div>
                        <p>{{ item.name }}</p>
                        <span v-for="(item1,index) in item.ar" :key="index">{{
                            item1.name
                        }}</span>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipin"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-31liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(props){
        console.log(props);
    },
    props:['itemList','subscribedCount']
}
</script>