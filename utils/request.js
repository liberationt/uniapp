export default function $http(options){
	const { url, data } = options
	return new Promise((resove,reject)=>{
		console.log('ces',url,data)
		uniCloud.callFunction({
			name:url,
			data
		}).then((res)=>{
			resove(res.result)
		}).catch(err=>{
			reject(err)
		})
	})
}