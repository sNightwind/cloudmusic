import service from "..";

//获取歌曲的歌词/lyric?id=33894312
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:'/lyric?id=${data}'
    })
}