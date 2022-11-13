import request from '@/utils/request.js'

// 轮播图数据
export const reqGetBanner = (data) => request({url:'/banner', data, method:'GET'})

// 推荐歌单
export const reqGetRecommendedSongs = (data) => request({url:'/personalized', data, method:'GET'})

// 新碟新歌
export const reqGetNewDiscAndNewSongs = (data) => request({url:'/album/newest', data, method:'GET'})

// 精选视频（云村广场）
export const reqGetVideoLife = (data) => request({url:'/related/allvideo', data, method:'GET'})

// 登录
