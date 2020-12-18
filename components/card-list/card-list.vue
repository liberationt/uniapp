<template>
	<view @click="open">
		<!-- 单图模式 -->
		<view class="card" v-if="mode=='base'">
			<view class="imageInfor">
				<image :src="item.imgList[0]" mode="aspectFill"></image>
			</view>
			<view class="cardInfor">
				<view class="cardTitle">
					<text>{{item.title}}</text>
				</view>
				<view class="cardBottom">
					<view class="cardType">
						<view class="labelInfor">{{item.label}}</view>
					</view>
					<view class="lookPeople">
						{{item.peopleNum}}人看过
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="card cardImg" v-if="mode=='column'">
			<view class="cardInfor">
				<view class="cardTitle">
					<text>{{item.title}}</text>
				</view>
				<view class="imageInfor">
					<view class="" v-for="(item,i) in item.imgList" class="imageInforItem" :key="i">
						<image :src="item" mode=""></image>
					</view>
				</view>
				<view class="cardBottom">
					<view class="cardType">
						<view class="labelInfor">{{item.label}}</view>
					</view>
					<view class="lookPeople">
						{{item.peopleNum}}人看过
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="card cardImgs" v-if="mode=='images'">
			<view class="imageInfor">
				<image :src="item.imgList[0]" mode=""></image>
			</view>
			<view class="cardInfor">
				<view class="cardTitle">
					<text>{{item.title}}</text>
				</view>
				<view class="cardBottom">
					<view class="cardType">
						<view class="labelInfor">{{item.label}}</view>
					</view>
					<view class="lookPeople">
						{{item.peopleNum}}人看过
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:'base'
			},
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				uni.navigateTo({
					url:"/pages/homeDetails/homeDetails"
				})
			}
		}
	}
</script>

<style lang="scss">
.card{
	display: flex;
	padding:10px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
	box-sizing: border-box;
	.imageInfor{
		width:60px;height:60px;overflow: hidden;border-radius: 5px;
		flex-shrink: 0;
		image{
			width:100%;height:100%;
		}
	}
	.cardInfor{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left:10px;
		width:100%;
		.cardTitle{
			font-size:14px;
			font-weight: 400;
			color:#333;
			line-height: 1.2;
			text{
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp:2;
				-webkit-box-orient:vertical
			}
		}
		.cardBottom{
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			.cardType{
				color:$navbar;
				.labelInfor{
					border:1px solid $navbar;
					padding:0 10px;
					margin-right:5px;
					border-radius: 15px;
				}
			}
			.lookPeople{
				color:#999;
				line-heihgt:1.5;
			}
		}
	}
	&.cardImg{
		.cardInfor{
			width:100%;
			padding-left:0;
			.imageInfor{
				width: 100%;
				margin: 10px 0;
				display: flex;
				height:70px;
				.imageInforItem{
					width:100%;
					margin-left: 10px;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left:0
					}
					img{
						widht:100%;height:100%;
					}
				}
			}
		}
		// img{
		// 	width:100px;height: 100px;;
		// }
	}
	&.cardImgs{
		flex-direction: column;
		.imageInfor{
			width:100%;height:100px;
		}
		.cardInfor{
			padding-left:0;
			.cardTitle{
				margin:10px 0;
			}
		}
	}
}
</style>
