<template>
	<view>
			<scroll-view scroll-y="true" class="page-content">
				<!-- 播放列表 -->
				<view class="album-list">
					<view class="title-bar flex-box">
						<view class="play">
							<text class="iconfont">&#xe710;</text>
							播放全部
						</view>
					</view>
					<!-- 音乐列表 -->
					<view class="list">
						<view class="item flex-box" v-for="(item, index) in album.name" :key="index" @click="setPlayList">
							<view class="num" :class="{on: index < 3}">
								{{index + 1}}
							</view>
							<view class="flex-item">
								<view class="flex-box con">
									<view>
										<view class="tit">
											{{item.name}}
										</view>
										<view class="count">
											{{item.score}}
										</view>
									</view>
									<view class="iconfont">
										&#xe60f;
									</view>
								</view>
								<view class="desc">
									{{item.content}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {reqGetSongList} from '@/api/index.js'
	export default {
		data() {
			return {
				album: {},		// 音乐对象
				playList: [],	// 播放列表
			};
		},
		onLoad(options) {
			// console.log(options)
			this.getData(options)
		},
		methods: {
			...mapMutations(['storePlayList']),
			//获取音乐列表
			getData(uid) {
				const params = {
					uid: 32953014
				}
				reqGetSongList(params).then(res => {
					console.log("album:", res)
					//截取详情内容   太长了
					// res.playlist.description = res.playlist.description.slice(0,27);
					this.album = res.playlist;
					this.playList = res.privileges;
				})
			},
			//跳转播放
			setPlayList() {
				//保存到vuex
				this.storePlayList(this.playList);
				uni.navigateTo({
					url: '/pages/palyMusicPage/palyMusicPage'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-content {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		bottom: 0;
		/* #ifdef H5 */
		top:44px;  // h5 无状态栏
		bottom: 100rpx;
		/* #endif */
		
		.album-list {
			position: relative;
			background: #fff;
			border-radius: 36rpx 36rpx 0 0;
			z-index: 100;
			.title-bar{
				padding:10rpx;
				justify-content: space-between;
				.iconfont{
					margin-left: 16rpx;
					margin-right: 16rpx;
					font-size: 40rpx;
				}
				.play{
					line-height: 80rpx;
					color:#252621;
					font-weight: 600;
					font-size: 32rpx;
				}
				.collect{
					width:228rpx;
					height:80rpx;
					text-align: center;
					line-height: 80rpx;
					border-radius: 80rpx;
					color:#fff;
					background: #fb2b21;
				}
			}
			.item {
				border: .01rem solid #999;
				align-items: center;
				height: 120rpx;
			}
			.con {
				padding-right: 40rpx;
				align-items: center;
				justify-content: space-between;
			}
			.num {
				width: 84rpx;
				text-align: center;
				line-height: 120rpx;
				color: #999;
				font-size: 24rpx;
				&.on {
					color: #ff3a3a;
				}
			}
			.tit {
				margin-right: 20rpx;
				color: #333;
				line-height: 48rpx;
				font-size: 32rpx;
			}
			.count {
				margin-right: 20rpx;
				color: #ccc;
				line-height: 48rpx;
				font-size: 24rpx;
				transform: scale(0.84);
			}
			.icon {
				width: 56rpx;
				height: 20rpx;
			}
			.desc {
				color: #999;
				font-size: 24rpx;
				line-height: 40rpx;
			}
		}
	}
</style>
