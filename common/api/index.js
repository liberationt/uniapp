// import { getTab } from "./getTab"
// export default {
// 	getTab
// }
const requireApi = require.context(".",false,/.js$/)
const module ={}
requireApi.keys().map((key,index)=>{
	if(key==="./index.js") return
	Object.assign(module,requireApi(key))
})
export default module