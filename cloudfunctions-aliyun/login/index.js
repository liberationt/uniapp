'use strict';
let db = uniCloud.database()
exports.main = async (event, context) => {
	console.log(event,event.name,444,context)
	// let collection = db.collection("login")
	//新增
	// let res = await collection.add({
	// 	userName:"admin",
	// 	passWord:"123"
	// })
	// 删除
	// let res = await collection.doc("5fb4c6444d03d000019e84ec").remove()
	// 查询
	// let res = await collection.where({userName:'admin'}).get()
	//修改
	// let res = await collection.where({
	// 	userName: 'admin'
	// }).update({
	// 	type: 'hhh'
	// })
	//event为客户端上传的参数
	// console.log('event : ',context)
	//返回数据给客户端
	return {
		// code: 200,
		// msg: '登录成功',
		// data: {
		// 	name: '1',
		// 	age: '18'
		// },
	}
};
