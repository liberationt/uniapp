'use strict';
let db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const { name,page,pageSize } = event
	let data = {}
	if(name==="全部"){
		data ={}
	}else{
		data={
			label:name
		}
	}
	let res = await db.collection('getList').aggregate().match(data).skip(pageSize*(page-1)).limit(pageSize).end()
	//返回数据给客户端
	return {
		code:'0',
		data:res.data,
		msg:'查询成功'
	}
};
