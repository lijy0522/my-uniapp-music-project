<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar left-text="登录" right-icon="plus" title="用户名" />
		<!-- 头像 -->
		
		<!-- uni列表 -->
		<uni-list class="uni_list">
			<uni-list-item title="我的消息" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"  :show-badge="true" badge-text="12"></uni-list-item>
			<uni-list-item title="云贝中心" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="创作者中心" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
		</uni-list>
		<uni-list class="uni_list">
			<view class="">
				音乐服务
			</view>
			<uni-list-item title="商城" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="口袋彩铃" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="游戏中心" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
		</uni-list>
		<uni-list class="uni_list">
			<view class="">
				其他
			</view>
			<uni-list-item title="设置" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="深色模式" thumb="/static/image/account/a_16.png" size="mini" :show-switch="true"  @switchChange=""></uni-list-item>
			<uni-list-item title="定时关闭" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="个性装扮" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="青少年模式" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
			<uni-list-item title="音乐闹钟" thumb="/static/image/account/a_16.png" size="mini" showArrow="true"></uni-list-item>
		</uni-list>
		<!-- 退出登录 -->
		<view class="">
			退出登录
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		components: {
		},
		computed: {
			// ...mapState(['userInfo'])
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.uni_list {
		margin-top: 1rem;
	}
</style>
<style lang="scss">
	page {
		color: #333;
	}
	.scan-box{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.8);
		transform: translateX(100%);
		transition: transform 0.05s;
		&.active{
			transform: translateX(0)
		}
	}
	.tac{
		flex:1;
		text-align: center;
	}
	.top-img {
		width: 50rpx;
		height: 40rpx;
		&.left {
			margin-left: 10rpx;
		}
	}
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
		background: #f8f8f8;
	}
	.mt16 {
		margin-top: 16rpx;
	}

	.bgf {
		background: #fff;
	}

	.empty-user {
		background: #fff;
		padding-top: 40rpx;
		text-align: center;
		line-height: 50rpx;

		.btn {
			width: 710rpx;
			height: 80rpx;
			margin: 22rpx auto 0;
			text-align: center;
			line-height: 80rpx;
			border: 2rpx solid #cdcdcd;
			border-radius: 80rpx;
			font-size: 32rpx;
		}
	}

	.userinfo-box {
		padding-top: 46rpx;

		.avator {
			width: 120rpx;
			height: 120rpx;
			margin: 0 32rpx;
			border-radius: 120rpx;
			color: #fff;
			background: #d6d8da;
			overflow: hidden;
		}

		.img {
			width: 100%;
			height: 100%;
		}

		.name {
			color: #302f30;
			line-height: 68rpx;
			font-weight: 600;
		}

		.sign {
			width: 128rpx;
			height: 52rpx;
			margin-top: 16rpx;
			margin-right: 32rpx;
			border-radius: 52rpx;
		}

		.level {
			width: 100rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			border-radius: 50rpx;
			color: #838080;
			background: #d7d3d4;
			transform: scale(0.8);
		}
	}

	.nav-bar {
		margin-top: 38rpx;
		text-align: center;
		font-weight: 600;

		.flex-item {
			height: 80rpx;
			border-right: 1rpx solid #cdcacb;

			&:last-child {
				border: 0;
			}
		}

		.txt {
			color: #939293;
			font-weight: 400;
		}
	}

	.ad-bar {
		padding-top: 32rpx;

		.img {
			display: block;
			width: 686rpx;
			height: 120rpx;
			margin: 0 auto;
		}
	}

	.mall-bar {
		padding-top: 38rpx;
		padding-bottom: 20rpx;
		text-align: center;
		font-weight: 600;
		font-size: 26rpx;
		background: #fff;
		line-height: 35rpx;

		.icon {
			display: block;
			width: 48rpx;
			height: 48rpx;
			margin: 0 auto 24rpx;
		}

		.txt {
			color: #999;
			font-weight: 400;
			font-size: 24rpx;
			transform: scale(0.84);
		}
	}

	.line-item {

		.icon {
			float: left;
			width: 35rpx;
			height: 32rpx;
			margin-top: 30rpx;
			margin-right: 36rpx;
		}
	}

	.logout {
		height: 100rpx;
		margin-top: 16rpx;
		text-align: center;
		line-height: 100rpx;
		color: #333;
		background: #fff;
	}
</style>
