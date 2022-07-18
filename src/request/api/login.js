//登录页面获取数据
import service from "..";
//通过手机+密码登录 /login/cellphone?phone=xxx&password=yyy
export function loginByPhoneAndPassword(data) {
  //获取首页轮播图数据
  return service({
    method: "GET",
    url: "/login/cellphone?phone=" + data.phone + "&password=" + data.password,
  });
}
//通过手机+验证码登录
export function loginByPhoneAndCaptchaCode(data) {
  //获取首页轮播图数据
  return service({
    method: "GET",
    url: "/captcha/verify?phone=" + data.phone + "&captcha=" + data.captchaCode,
  });
}
//通过手机号获取验证码 /captcha/sent?phone=13xxx
export function getCaptchaCode(data) {
  //获取首页轮播图数据
  return service({
    method: "GET",
    url: "/captcha/sent?phone=" + data.phone,
  });
}
