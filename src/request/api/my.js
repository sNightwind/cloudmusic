//个人中心页面获取数据
import service from "..";
//通过uid获取用户详情 /user/detail?uid=380945083
export function getUserDetail(uid) {
  //获取首页轮播图数据
  return service({
    method: "GET",
    url: "/user/detail?uid=" + uid,
  });
}
