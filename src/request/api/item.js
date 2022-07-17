import service from "..";
<<<<<<< HEAD

//获取歌曲的歌词/lyric?id=33894312
export function getMusicLyric(data) {
  return service({
    method: "GET",
    url: `/lyric?id=${data}`,
  });
}

//获取歌单详情页数据
export function getMusicItemList(data) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${data}`,
  });
}
=======


//获取歌曲的歌词/lyric?id=33894312
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:'/lyric?id=${data}'

//获取歌单详情页数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`

    })
}
>>>>>>> a7927d64dddee71cdbcb97e65b77735477905433
