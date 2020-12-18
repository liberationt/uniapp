<template>
	<view class="navbar" :style="{height:statusBarHeight+navBareight+'px',background:'black'}"> <!-- 如若不写 高度始终为44 没有找到原因 -->
		<view class="narbar-flexd">
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="narbar-content" :class="{searchInfor:isSearch}" :style="{height:navBareight+'px',width:windowWidth+'px'}" @click.stop="open">
				<view class="leftReturn" v-if="isSearch" @click="goback">
					<uni-icons type="back" color="#fff" size="22"></uni-icons>
				</view>
				<view class="navbar-search" v-if="!isSearch">
					<view class="navbar-icon">
						<uni-icons type="search" color='#999'></uni-icons>
					</view>
					<view class="navbar-text">搜索</view>
				</view>
				<view class="navbar-search" v-else>
					<input class="navbar-text" type="text" v-model="text" placeholder="请输入要搜索的内容" @input="inputChange"/>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navBareight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		props:{
			isSearch:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		data() {
			return {
				statusBarHeight:20,
				navBareight: 45,
				windowWidth: 375,
				text:''
			};
		},
		methods:{
			open(){
				if(this.isSearch) return
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			inputChange(e){
				const { value } = e.detail
				this.$emit('inputEmit',value)
			},
			goback(){
				uni.navigateBack(-1)
			}
		},
		created() {
			//获取手机系统信息 -- 状态栏高度
			let {
				statusBarHeight,
				windowWidth
			} = uni.getSystemInfoSync()
			this.statusBarHeight = statusBarHeight
			this.windowWidth = windowWidth
			//去除
			//#ifndef H5 || MP-ALIPAY ||APP-PLUS
			//获取小程序胶囊的高度
			let {
				top,
				bottom,
				left
			} = uni.getMenuButtonBoundingClientRect()
			//高度 =（胶囊底部高低-状态栏高度）+（胶囊顶部高度-状态栏内的高度）
			this.navBareight = (bottom - statusBarHeight) + (top - statusBarHeight)
			this.windowWidth = left
			//#endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.narbar-flexd {
			background: $navbar;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			.narbar-content {
				// height: 45px;
				padding: 0 15px;
				display: flex;
				box-sizing: border-box;
				justify-content: center;
				align-items: center;
				
			}
			.navbar-search {
				height: 32px;
				background: #fff;
				border-radius: 30px;
				width: 100%;
				display: flex;
				padding: 0 15px;
				align-items: center;
				.navbar-icon {
					margin-right: 10px;
				}
				.navbar-text {
					width:100%;
					font-size: 12px;
					color: #666;
				}
			}
			.searchInfor{
				padding-left: 0;
				.leftReturn{
					margin:0 10px;
				}
			}
		}
	}
</style>
