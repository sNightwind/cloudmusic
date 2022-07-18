import service from "..";
//获取歌单详情页数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}