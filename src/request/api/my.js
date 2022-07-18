//个人中心页面获取数据
import service from "..";
//通过uid获取用户详情 /user/detail?uid=380945083
export function getUserDetail(uid) {
    return service({
        method: "GET",
        url: "/user/detail?uid=" + uid,
    })
}
//通过uid获取用户发送过的动态 /user/event?uid=380945083
export function getUserTrends(uid) {
    return service({
        method: "GET",
        url: "/user/event?uid=" + uid,
    })
}
//获取关注列表 /user/follows?uid=32953014
export function getUserFollows(uid) {
    return service({
        method: "GET",
        url: "/user/follows?uid=" + uid,
    })
}
//获取粉丝列表 /user/followeds?uid=32953014
export function getUserFolloweds(uid) {
    return service({
        method: "GET",
        url: "/user/followeds?uid=" + uid,
    })
}