//登录页面获取数据
import service from "..";
//通过手机+密码登录 /login/cellphone?phone=xxx&password=yyy
export function loginByPhoneAndPassword(data) {
    return service({
        method: "GET",
        url: "/login/cellphone?phone=" + data.phone + "&password=" + data.password,
    });
}
//通过手机+验证码登录 /login/cellphone?phone=xxx&captcha=1234
export function loginByPhoneAndCaptchaCode(data) {
    return service({
        method: "GET",
        url: "/login/cellphone?phone=" + data.phone + "&captcha=" + data.code,
    });
}
//通过手机号获取验证码 /captcha/sent?phone=13xxx
export function getCaptchaCode(data) {
    return service({
        method: "GET",
        url: "/captcha/sent?phone=" + data.phone,
    });
}
//获取二维码key /login/qr/key
export function getQRCodeKey(data) {
    return service({
        method: "GET",
        url: "/login/qr/key?timestamp=" + data.timestamp,
    });
}

//根据二维码key生成base64的图片二维码 /login/qr/create?key=xxx  qrimg
export function getQRCode(data) {
    return service({
        method: "GET",
        url: "/login/qr/create?key=" + data.key + "&qrimg=true&timestamp=" + data.timestamp,
    });
}
//检测二维码状态 /login/qr/check?key=xxx
export function checkQRCode(data) {
    return service({
        method: "GET",
        url: "/login/qr/check?key=" + data.key + "&timestamp=" + data.timestamp,
    });
}
