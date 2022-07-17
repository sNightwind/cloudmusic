import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item'
export default createStore({
  state: {
    isLogin:false,//是否登录
    isFooterMusic:true,//判断底部播放组件是否需要显示
    playList: [
      {
        al: {
          //底部测试数据
          id: 120577126,
          name: "测试歌曲",
          pic: 109951165929038820,
          picUrl: "",
          pic_str: "109951165929038814",
        },
        name:'测试名',
        id: 1805395376,
      },
    ],
    playListIndex: 0, //默认播放器
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,//歌曲详细页的显示
    lyricList:{},//歌词
<<<<<<< HEAD
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
=======
>>>>>>> a7927d64dddee71cdbcb97e65b77735477905433

  },
  getters: {},
  mutations: {
    updataIsbtnShow:function(state,value){
      state.isbtnShow =value
    },
    updataPlayList:function(state,value){
      state.playList = value
    },
    updataPlayListIndex:function(state,value){
      state.playListIndex =value
    },
    updataDetailShow:function(state){
      state.detailShow = !state.detailShow
    },
    updataLyricList:function(state,value){
      state.lyricList = value
    },
    updataCurrentTime:function(state,value){
      state.currentTime=value
    },
    updataDuration:function(state,value){
      state.duration=value
    }
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

