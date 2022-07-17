import { createStore } from "vuex";
import { getMusicLyric } from "@/request/api/item";
export default createStore({
  state: {
    isLogin: false, //是否登录
    isFooterMusic: true, //判断底部播放组件是否需要显示
    playList: [
      {
        al: {
          //底部测试数据
          id: 34110,
          name: "海阔天空",
          pic: 109951165796899180,
          picUrl: "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "109951165929038814",
        },
        id: 346089,
      },
    ],
    playListIndex: 0, //默认播放器
    isbtnShow: true, //暂停按钮的显示
    detailShow: false, //歌曲详细页的显示
    lyricList: {}, //歌词
  },
  getters: {},
  mutations: {
    updataIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    updataPlayList: function (state, value) {
      state.playList = value;
    },
    updataPlayListIndex: function (state, value) {
      state.PlayListIndex = value;
    },
    updataDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updataLyricList: function (state, value) {
      state.lyricList = value;
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      console.log(res);
      context.commit("updataLyricList", res.data.lrc);
    },
  },
  modules: {},
});
