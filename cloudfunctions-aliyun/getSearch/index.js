'use strict';
let db = uniCloud.database()
let $ = db.command.aggregate
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const { value } = event
	let res = await db.collection('getList').aggregate().match({
		title:new RegExp(value)
	}).end()
	//返回数据给客户端
	return {
		code:'0',
		data:res.data,
		msg:'查询成功'
	}
};
