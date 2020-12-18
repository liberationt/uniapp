<template>
	<swiper class="home-swiper" @change="changeTab" :current="swiperIndex">
		<swiper-item class="swiper-item" v-for="(item,i) in tabList">
			<list-item :list="listCardData[i]" @loadMore = "loadMore" :load="load[i]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		components:{
			listItem
		},
		props:{
			tabList:{
				type:Array,
				default(){
					return []
				}
			},
			swiperIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				dataList:[],
				listCardData:{},
				load:{},
				pageSize:10
			};
		},
		watch:{
			tabList(newValue){
				if(newValue.length==0) return
				this.getList(this.swiperIndex)
			}
		},
		methods:{
			changeTab(item){
				const { current } = item.detail
				this.$emit('change',current)
				if(!this.listCardData[current]||this.listCardData[current].length===0){
					this.getList(current)
				}
			},
			getList(current){
				if(!this.load[current]){
					this.load[current] = {
						page:1,
						loading:'loading'
					}
				}
				this.$api.getList({name:this.tabList[current].name,page:this.load[current].page,pageSize:this.pageSize}).then(res=>{
					let oldList = this.listCardData[current] || []
					if(res.data.length===0){
						let oldLoad = {}
						oldLoad.loading = "noMore"
						oldLoad.page = this.load[current].page
						this.$set(this.load,current,oldLoad)
					}
					oldList.push(...res.data)
					this.$set(this.listCardData,current,oldList)
				})
			},
			loadMore(){
				if(this.load[this.swiperIndex].loading ==='noMore') return
				this.load[this.swiperIndex].page++
				this.getList(this.swiperIndex)
			}
		},
		created(){
		}
	}
</script>

<style lang="scss">
.home-swiper{
	height:100%;
	.swiper-item{
		height:100%;
		overflow: hidden;
		.scroll-height{
			height:100%;
		}
	}
}
</style>
