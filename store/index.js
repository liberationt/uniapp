import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		historyLists:uni.getStorageSync('history')||[]
	},
	mutations:{
		SET_HISTORYLISTS(state,history){
			state.historyLists = history
		},
		CLEAR_HISTORYLISTS(state){
			state.historyLists = []
		}
	},
	actions:{
		setHistory({commit,state},history){
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('history',list)
			commit('SET_HISTORYLISTS',list)
		},
		clearHistory({commit}){
			// uni.setStorageSync('history',[])
			uni.removeStorage('history')
			commit('CLEAR_HISTORYLISTS')
		}
	}
})
export default store