<template>
	<view class="home">
		<navbar :isSearch='isSearch' @inputEmit="inputChange"></navbar>
		<view class="search-list">
			<view class="label-box" v-if="isContent">
				<view class="label-header">
					<view class="label-title">搜索历史</view>
					<view class="label-clear" @click="clearHistory">清空</view>
				</view>
				<view class="label-list" v-if="historyLists.length>0">
					<view v-for="(item,index) in historyLists" :key="index" class="label-item">
						{{item}}
					</view>
				</view>
				<view class="no-data" v-else>
					没有搜索历史
				</view>
			</view>
			<scroll-list class="scroll-height" v-else>
				<card-list :item="item" v-for="(item,i) in searList" :key="i"></card-list>
				<uni-load-more v-if="searList.length>3 || searList.length===0" :status="loading"></uni-load-more>
			</scroll-list>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				isContent:true,
				isSearch:true,
				searList:[],
				loading:'loading'
				// historyList:[]
			}
		},
		computed:{
			...mapState(['historyLists'])
		},
		methods: {
			debounce (value, wait) {
			  // if(!this.mark){
				 //  this.mark = true
				  
			  // }
			  this.timer = setTimeout(() => {
			  	this.getSearch(value)
			  }, wait)
			},
			inputChange(value){
				if(!value){
					this.loading = "noMore"
					clearTimeout(this.timer)
					this.getSearch(value)
				}
				this.debounce(value, 1000)
			},
			getSearch(value){
				this.loading = "loading"
				if(!value){
					this.isContent = true
					return this.searList = []
				}
				this.isContent = false
				this.$api.getSearch({value}).then(res=>{
					this.searList =  res.data
					this.loading = "noMore"
					this.$store.dispatch('setHistory',value)
				})
			},
			clearHistory(){
				this.$store.dispatch('clearHistory')
			}
		},
		onLoad(){
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	display: flex;
	background-color:#f5f5f5;
}
.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		height:100%;
	}
	.search-list{
		.label-box{
			margin-bottom: 10px;
			background: #fff;
			.label-header{
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color:#666;
				padding:10px 15px;
				border-bottom:1px solid #f5f5f5;
				.label-title{
					color:$navbar;
				}
				.label-clear{
					color:#30b33a;
					font-weight: bold;
				}
			}
			.label-list{
				display: flex;
				flex-wrap: wrap;
				padding:15px;
				padding-top:0px;
				.label-item{
					padding:3px 12px;
					border:1px solid #666;
					border-radius: 5px;
					margin-top: 12px;
					margin-right: 10px;
					font-size: 14px;
					color:#666;
				}
			}
			.no-data{
				height: 200px;
				color:#666;
				font-size:14px;
				text-align: center;
				line-height: 200px;
			}
		}
	}
</style>
