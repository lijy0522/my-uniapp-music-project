import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 提取playList数据 放入vuex
let storePlayList = [];
try {
	const vaule = uni.getStorageSync("playList");
	if (value) {
		storePlayList = JSON.parse(value);
	}
} catch(e) {}

const store = new Vuex.Store({
	state: {
		userInfo: {
			isLogin: false
		},
		playList: storePlayList, 	// 播放列表
	},
	mutations: {
		//保存播放列表
		storePlayList(state, payload) {
			state.playList = payload;
			
			//持久化存储
			uni.setStorageSync("playList", JSON.stringify(payload));
		}
	},
	actions: {},
	getters: {}
})

export default store