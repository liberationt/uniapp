<template>
	<view class="detail">
		<view class="detail-title">
			我们要不要学习
		</view>
		<view class="detail-header">
			<view class="detail-img">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="detail-header-content">
				<view class="details-header-title">
					七月
				</view>
				<view class="details-header-main">
					<!-- 2020-12-15   11:26:56  2010人浏览 -->
					<text class="">
						2020-12-15   11:26:56
					</text>
					<text class="">
						2010人浏览
					</text>
					<text class="">
						3068赞
					</text>
				</view>
			</view>
		</view>
		<view class="detali-contnet">
			大撒旦发
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-left">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detali-bottom-right">
				<view class="detali-bottom-icon">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detali-bottom-icon">
					<uni-icons type="heart"size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detali-bottom-icon">
					<uni-icons type="hand-thumbsup"size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.detail{
	padding:15px 0;
	padding-bottom: 54px;
}
.detail-title{
	padding:0 15px;
	font-size:18px;
	color:#333;
	font-weight: bold;
}
.detail-header{
	display: flex;
	justify-items: center;
	padding:0 15px;
	margin-top: 10px;
	.detail-img{
		flex-shrink: 0;
		width:40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		image{
			width:100%;
			height:100%;
		}
	}
	.detail-header-content{
		padding-left: 10px;
		width:100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size:12px;
		.details-header-title{
			font-size: 14px;
			color:#333;
		}
		.details-header-main{
			color:#999;
			text{
				margin-right:10px;
			}
		}
	}
}
.detali-contnet{
	
}
.detail-bottom{
	position: fixed;
	display: flex;
	bottom: 0;
	left:0;
	align-items: center;
	height:44px;
	width:100%;
	border-top: 1px solid #f5f5f5;
	background-color: #fff;
	box-sizing: border-box;
	.detail-bottom-left{
		margin-left:10px;
		padding:0 15px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:30px;
		width:100%;
		border: 1px solid #ddd;
		text{
			font-size: 14px;
			color:#999;
		}
	}
	.detali-bottom-right{
		display: flex;
		justify-content: center;
		flex-shrink: 0;
		padding:0 10px;
		.detali-bottom-icon{
			width:44px;
			display: flex;
			justify-content: center;
		}
	}
}
</style>
