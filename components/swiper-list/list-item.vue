<template>
	<scroll-list class="scroll-height" @loadMore = "loadMore">
		<card-list :mode='item.type' :item="item" v-for="(item,i) in list" :key="i"></card-list>
		<uni-load-more v-if="list.length>6 || list.length===0" :status="load.loading || 'loading'"></uni-load-more>
	</scroll-list>
</template>
<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			load:{
				type:Object,
				default(){
					return {
						loading:"loading"
					}
				}
			}
		},
		data() {
			return {
			};
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			},
			change(){
				alert(1)
			}
		},
		mounted(){
		}
	}
</script>
<style lang="scss">
	.scroll-height{
		height:100%;
	}
</style>



