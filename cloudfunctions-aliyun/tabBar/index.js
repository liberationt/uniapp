'use strict';
let db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let collection = await db.collection('getTab').get()
	//返回数据给客户端
	return {
		code:'0',
		data:collection.data,
		msg:'查询成功'
	}
};
