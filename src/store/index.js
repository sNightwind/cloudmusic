import { createStore } from "vuex";
import { loginByPhoneAndPassword, loginByPhoneAndCaptchaCode, getCaptchaCode } from "@/request/api/login.js"

export default createStore({
  state: {
    isLogin: false,//是否登录
    isFooterMusic: true,//判断底部播放组件是否需要显示
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
        id: 1805395376,
      },
    ],
    playListIndex: 0, //默认播放器
    isBtnShow: true, //显示暂停按钮 / 切换播放按钮
  },
  getters: {},
  mutations: {
    updateIsBtnShow: function (state, value) {
      state.isBtnShow = value;
    },
    updatePlayList: function (state, value) {
      state.playList = value;
    },
    updateLoginStatus: function (state, value) {
      //修改登录状态
      state.isLogin = value;
    }
  },
  actions: {
    getCaptchaCode: async function (context, value) {//获取验证码
      let res = await getCaptchaCode(value)
      console.log(res);
      return res;
    },
    getLoginByPhoneAndCaptchaCode: async function (context, value) {
      let res = await loginByPhoneAndCaptchaCode(value)
      console.log(res);
      return res;
    },
    getLoginByPhoneAndPassword: async function (context, value) {//通过手机号+密码登录
      let res = await loginByPhoneAndPassword(value);
      console.log(res);
      return res;
    }
  },
  modules: {},
});
