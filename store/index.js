import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {
			isLogin: false
		}
	},
	mutations: {},
	actions: {},
	getters: {}
})

export default store