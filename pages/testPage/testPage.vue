<template>
	<view>
		<!-- <uni-nav-bar>
			<block slot="left">
				<img src="" alt="12">
			</block>
			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm" />
			</view>
			<block slot="right">搜索</block>
		</uni-nav-bar> -->
		<!-- <uni-nav-bar>
					<block slot="left">
						<img src="../../static/img/account/a16.png" mode="widthFix" class="top-img left">
					</block>
					<view class="tac">
						账号1
					</view>
					<block slot="right">
						<img src="../../static/img/mine/r.png" mode="widthFix" class="top-img">
					</block>
				</uni-nav-bar> -->
	</view>
</template>

<script>
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import uniList from '../../uni_modules/uni-list/components/uni-list/uni-list.vue'
	import uniListItem from '../../uni_modules/uni-list/components/uni-list-item/uni-list-item.vue'
	
</script>

<style lang="scss">
$nav-height: 30px;

.box-bg {
	background-color: #f5f5f5;
	padding: 5px 0;
}

.city {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	// width: 160rpx;
	margin-left: 4px;
}

.input-view {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	// width: 500rpx;
	flex: 1;
	background-color: #f8f8f8;
	height: $nav-height;
	border-radius: 15px;
	padding: 0 15px;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: $nav-height;
}

.input-uni-icon {
	line-height: $nav-height;
}

.nav-bar-input {
	height: $nav-height;
	line-height: $nav-height;
	/* #ifdef APP-PLUS-NVUE */
	width: 370rpx;
	/* #endif */
	padding: 0 5px;
	font-size: 12px;
	background-color: #f8f8f8;
}
</style>
