//首页获取数据
import service from "..";
export function getBanner(){
    //获取首页轮播图数据
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}