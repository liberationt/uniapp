import Vue from 'vue'
import App from './App'
import getTab from "./common/api"
import store from "./store/index.js"
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$api = getTab
const app = new Vue({
	store,
    ...App
})
app.$mount()
