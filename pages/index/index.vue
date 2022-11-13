<!-- 我的页面 -->
<template>
	<view class="">
		<!-- 入口 -->
		<view class="main-bar flex-box">
			<view class="flex-item" v-for="(item, index) in myMenuBar" :key="index">
				<img :src="'../../static/image/index/t_' + (index + 1) + '.png'" alt="图标" class="img">
				<view>{{item.name}}</view>
			</view>
		</view>
		<!--  -->
		<view class="myLikeSongs">
			<view class="item">
				<img src="../../static/image/myPage/head01.jpg" alt="图片" class="img">
				<view class="desc ellipsis">
					我喜欢的音乐
				</view>
				<button class="likeModule">心动模式</button>
			</view>
		</view>
		
		<!-- 创建歌单 -->
		<ScrollViewY title="创建歌单" link="" :list="createList"></ScrollViewY>
		
		<!-- 收藏歌单 -->
		<ScrollViewY title="收藏歌单" link="" :list="starList"></ScrollViewY>
	</view>
</template>

<script>
	import ScrollViewY from '@/components/ScrollViewY.vue'
	export default {
		data() {
			return {
				myMenuBar: [				// 个人页面入口菜单数据
					{name: '最近播放'},
					{name: '本地/下载'},
					{name: '排行'},
					{name: '收藏和赞'},
				],
				createList: [				// 创建歌单数据
					{picUrl: '../../static/image/myPage/head01.jpg', name: '2022'},
					{picUrl: '../../static/image/myPage/head01.jpg', name: '2021'},
					{picUrl: '../../static/image/myPage/head01.jpg', name: '2020'},
				],
				starList: [					// 收藏歌单数据
					{picUrl: '../../static/image/myPage/head01.jpg', name: '纯音乐'},
					{picUrl: '../../static/image/myPage/head01.jpg', name: '主题曲'},
					{picUrl: '../../static/image/myPage/head01.jpg', name: '热歌榜'},
				]
			}
		},
		components: {
			ScrollViewY
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	page {
			color: #1a1a1a;
			font-size: 24rpx;
		}
		
		.main-bar {
			padding-bottom:22rpx;
			text-align: center;
			line-height: 70rpx;
			color:#666;
			margin-top: 5rem;
			border-bottom:1rpx solid #e6e6e6;
			.img {
				display: block;
				width: 92rpx;
				height: 92rpx;
				margin: 0 auto;
			}
			.flex-item{
				position:relative;
				.date{
					position:absolute;
					left:60rpx;
					top:40rpx;
					line-height: 1;
					font-size: 24rpx;
					color:#ff392d;
					transform:scale(0.8);
				}
			}
			
		}
		
		.myLikeSongs{
			margin-top: .5rem;
			
			.item {
				display: flex;
				position: relative;
				width: 100%;
				height: 5rem;
				padding-bottom:16rpx;
				margin-right: 16rpx;
				line-height: 34rpx;
				&.video{
					width: 450rpx;
				}
				.img {
					display: block;
					width: 20%;
					height: 4.5rem;
					margin-bottom: 16rpx;
					background: #eee;
					border-radius: 10rpx;
				}
				.desc{
					width: 50%;
					height:64rpx;
					margin:1rem .5rem .3rem;
					line-height: 30rpx;
					overflow: hidden;
				}
				.likeModule {
					height: 1rem;
					font-size: 30rpx;
					line-height: 1rem;
					top: 2rem;
					left: -2rem;
				}
			}
		
		
	
		}
			/*
		 *平台差异化处理的代码可以放在底部，这样有利于集中管理
		*/
		/* #ifdef MP-WEIXIN */
		.banner{
			margin-top:60rpx;
		}
		/* #endif */
</style>
