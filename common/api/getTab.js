import $http from "../../utils/request"
export const getTab = (data)=>{
	return new $http({
		url:'tabBar',
		data
	})
}
export const getList = (data)=>{
	console.log(data)
	return new $http({
		url:'getList',
		data
	})
}
export const getSearch = (data)=>{
	return new $http({
		url:'getSearch',
		data
	})
}

