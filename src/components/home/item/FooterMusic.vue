<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" />
      <div>
        <p>
          {{ playList[playListIndex].name }}
        </p>
        <span> 横滑切换歌曲 </span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="` https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail 
      :musicList="playList[playListIndex]" 
      :play="play"
      :isbtnShow="isbtnShow"
      :addDuration="addDuration"
      />
    </van-popup>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import MusicDetail from "@/components/item/MusicDetail.vue";
export default {
  data(){
    return{
      interVal:0
    }
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
  },
  mounted() {
    
    this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
    
  },
  updated(){
    this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
    this.addDuration()
  },
  methods: {
    play: function () {
      //暂停 那么播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updataIsbtnShow(false);
        this.updateTime()//播放调用函数进行传值
      } //播放 则暂停
      else {
        this.$refs.audio.pause();
        this.updataIsbtnShow(true);
        clearInterval(this.interVal)//暂停清除定时器
      }
    },
    addDuration:function(){
      this.updataDuration(this.$refs.audio.duration)
    },
    updateTime:function(){
      this.interVal=setInterval(()=>{
        this.updataCurrentTime(this.$refs.audio.currentTime)
      },1000)
    },
    ...mapMutations(["updataIsbtnShow", "updataDetailShow","updataCurrentTime","updataDuration"]),
  },
  components: {
    MusicDetail,
  },
};
</script>

<style>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  background-color: #fff;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
}

.footerLeft {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footerLeft img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.footerRight {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footerRight .icon {
  width: 0.65rem;
  height: 0.65rem;
}
</style>