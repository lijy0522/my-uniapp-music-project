<!-- 云村页面 -->
<template>
	<view class="">
		<VideoPage :list="videoLifes"></VideoPage>
	</view>
</template>

<script>
	import {reqGetVideoLife} from '@/api/index.js'
	import VideoPage from '@/components/VideoPage.vue'
	export default {
		data() {
			return {
				videoLifes: [], 	// 精选视频
				
			};
		},
		components: {
			VideoPage
		},
		onLoad() {
			this.getVideoLife()
		},
		methods: {
			// 精选视频
			getVideoLife(){
				const params = {
					id: 32154
				}
				reqGetVideoLife(params).then(res => {
					this.videoLifes = res.data
				})
			}
		
		}
	}
</script>

<style lang="scss">

</style>
