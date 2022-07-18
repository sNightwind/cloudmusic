import request from '@/until/request'
import API from './contants'
// import API from './detail'
/*
    查询所有分类数据接口
*/
export const getCategories = ()=>request({
    url:API.TABS_API,
})

/**
 * 查询电台推荐
 */
export const getDjRadios = ()=>request({
    url:API.DJRADIOS_API,
})

// export const getProgram = (rid = 792734685)=>request({
//     url:API.PROGRAM_API+'?rid=' + rid,
// })

export const getRecommend = (limit = 6)=>request({
    url:API.RECOMMEND_API+'?limit=' + limit,
})

export const getDjDetail = (rid = 794532838)=>request({
    url:API.DJDETAIL_API,
    params:{
        rid,
    }   
})
// +'?rid=' + rid