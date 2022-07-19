import { createStore } from "vuex";
import {
  loginByPhoneAndPassword,
  loginByPhoneAndCaptchaCode,
  getCaptchaCode,
} from "@/request/api/login.js";
import { getUserDetail } from "@/request/api/my";
import { getMusicLyric } from "@/request/api/item";

export default createStore({
  state: {
    //袁隆俊
    isLogin: false, //是否登录
    isFooterMusic: true, //判断底部播放组件是否需要显示
    token: "", //登录后返回的token
    user: {}, //用户信息
    //袁隆俊finished
    playList: [
      {
        al: {
          //底部测试数据
          id: 120577126,
          name: "测试歌曲",
          pic: 109951165929038820,
          picUrl:
            "https://p1.music.126.net/gtzaOYEY6WN24zai2JG5ww==/109951165929038814.jpg",
          pic_str: "109951165929038814",
        },

        name: "测试歌曲",
        id: 346089,
      },
    ],
    playListIndex: 0, //默认播放器
    isbtnShow: true, //暂停按钮的显示
    detailShow: false, //歌曲详细页的显示
    lyricList: {}, //歌词
    currentTime: 0, //当前时间
    duration: 0, //歌曲总时长
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
      state.playListIndex = value;
    },
    pushPlayList: function (state, value) {
      state.playList.push(value);
    },
    updataDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updataLyricList: function (state, value) {
      state.lyricList = value;
    },
    updataCurrentTime: function (state, value) {
      state.currentTime = value;
    },
    updataDuration: function (state, value) {
      state.duration = value;
    },
    updateLoginStatus: function (state, value) {
      //修改登录状态
      state.isLogin = value;
    },
    updateToken: function (state, value) {
      state.token = value;
      localStorage.setItem("token", state.token);
    },
    updateUser: function (state, value) {
      state.user = value;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      // console.log(res);
      context.commit("updataLyricList", res.data.lrc);
    },
    getCaptchaCode: async function (context, value) {
      //获取验证码
      let res = await getCaptchaCode(value);
      // console.log(res);
      return res;
    },
    getLoginByPhoneAndCaptchaCode: async function (context, value) {
      //通过手机号+验证码登录
      let res = await loginByPhoneAndCaptchaCode(value);
      // console.log(res);
      return res;
    },
    getLoginByPhoneAndPassword: async function (context, value) {
      //通过手机号+密码登录
      let res = await loginByPhoneAndPassword(value);
      // console.log(res);
      return res;
    },
    getUserDetail: async function (context, value) {
      let res = await getUserDetail(value.uid);
      // console.log(res);
      return res;
    }
  },
  modules: {},
});
