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

// 广告
export const reqGetAd = (data) => request({url:'/banner', data, method:'GET'})

// 歌单详情  /user/playlist?uid=32953014		/playlist/detail?id=24381616（需要登录）
export const reqGetSongList = (data) => request({url:'/user/playlist', data, method:'GET'})
// export const reqGetSongList_2 = (data) => request({url:'/song/detail', data, method:'GET'})

// 歌曲链接  /song/url/v1
export const reqGetSongUrl = (data) => request({url:'/song/url/v1', data, method:'GET'})

// 歌曲详情  /song/detail?ids=347230
export const reqGetSong = (data) => request({url:'/song/detail', data, method:'GET'})