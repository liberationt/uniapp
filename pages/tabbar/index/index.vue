<template>
	<view class="content">
		<navbar></navbar>
		<tab :tabData="dataList" @tab="tab" :tabIndex='tabIndex'></tab>
		<view class="home-list">
			<swiper-list :tabList = "dataList" @change='swiperChange' :swiperIndex="swiperIndex"></swiper-list>
		</view>
		<!-- <view class="">
			<scroll-list>
				<view v-for="item in 100">
					{{item}}
				</view>
			</scroll-list>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				dataList:[],
				tabIndex:0,
				swiperIndex:0
			}
		},
		methods: {
			tab({data,index}){
				this.swiperIndex = index
			},
			getTabList() {
				this.$api.getTab().then(res=>{
					this.dataList = res.data
					this.dataList.unshift({
						name:"全部"
					})
				})
			},
			swiperChange(current){
				this.tabIndex = current
				this.swiperIndex = current
			}
		},
		onLoad() {
			this.getTabList()
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		display: flex;
	}
	.content{
		height:100%;
		display: flex;
		border: 1px solid red;
		flex-direction: column;
		flex:1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
