<!-- 关注页面 -->
<template>
	<view class="">
		<VideoPage :list="dynamics"></VideoPage>
	</view>
</template>

<script>
	import {reqGetVideoLife} from '@/api/index.js'
	import VideoPage from '@/components/VideoPage.vue'
	export default {
		data() {
			return {
				dynamics: [], 	// 动态
				
			};
		},
		components: {
			VideoPage
		},
		onLoad() {
			this.getDynamics()
		},
		methods: {
			// 精选视频
			getDynamics(){
				const params = {
					id: 32154
				}
				reqGetVideoLife(params).then(res => {
					this.dynamics = res.data
				})
			}
		}
	}
</script>

<style lang="scss">

</style>