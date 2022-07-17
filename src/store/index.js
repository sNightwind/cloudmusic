import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item'
export default createStore({
  state: {
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,//歌曲详细页的显示
    lyricList:{},//歌词
  },
  getters: {
  },
  mutations: {
    updataIsbtnShow:function(state,value){
      state.isbtnShow =value
    },
    updataPlayList:function(state,value){
      state.playList = value
    },
    updataPlayListIndex:function(state,value){
      state.PlayListIndex =value
    },
    updataDetailShow:function(state){
      state.detailShow = state.detailShow
    },
    updataLyricList:function(state,value){
      state.lyricList = value
    },
  },
  actions: {
    getLyric:async function(context,value){
      let res =await getMusicLyric(value)
      console.log(res)
      context.commit("updataLyricList",res.data.lrc)
    }
  },
  modules: {
  }
})
