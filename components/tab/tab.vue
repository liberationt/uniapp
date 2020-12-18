<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="scrollTab">
			<view class="scrollView">
				<view class="scrollViewItem" v-for="(item,i) in tabData" @click="changeTab(item,i)" :class="activeIndex==i?'activeColor':''">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="setting" @click="toSeet">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabData:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		watch:{
			tabIndex(newValue,oldValue){
				this.activeIndex = newValue
			}
		},
		data() {
			return {
				activeIndex:0,
			};
		},
		methods:{
			changeTab(item,index){
				this.activeIndex =index
				this.$emit("tab",{
					data:item,
					index:index
				})
			},
			toSeet(){
				uni.navigateTo({
					url:"/pages/label/label"
				})
			}
		},
		mounted(){

		}
	}
</script>

<style lang="scss">
	.tab {
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		.scrollTab {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.scrollView {
				display: flex;
				flex-wrap: nowrap;
				height: 45px;
				align-items: center;
				box-sizing: border-box;
				.scrollViewItem {
					flex-shrink: 0;
					padding: 0 10px;
					font-size: 14px;
					color: #333;
				}
				.activeColor{
					color:$navbar
				}
			}
		}
		.setting {
			position: relative;
			width: 45px;
			display: flex;
			justify-content: center;
			align-items: center;

			&::after {
				position: absolute;
				top: 12px;
				bottom: 12px;
				content: '';
				width: 1px;
				background: #ddd;
				left: 0;
			}
		}
	}
</style>
