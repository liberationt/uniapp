<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="scroll-list" @scrolltolower="loadMore">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang="scss">
.scroll{
		flex: 1;
		overflow: hidden;
		height:100%;
		box-sizing: border-box;
		.scroll-list{
			height:100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
