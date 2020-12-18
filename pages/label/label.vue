<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-clear" @click="editLabel">{{isEdit?'编辑':'完成'}}</view>
			</view>
			<view class="label-list">
				<view v-for="(item,index) in historyLists" :key="index" class="label-item">
					{{item}}
					<uni-icons type="clear" size="20" color="red" class="icons_close"></uni-icons>
				</view>
			</view>
		</view>
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
			</view>
			<view class="label-list">
				<view v-for="(item,index) in historyLists" :key="index" class="label-item">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit:true,
				historyLists:['前端开发','后端开发','移动端开发','人工智能','其它']
			}
		},
		methods: {
			editLabel(){
				this.isEdit = !this.isEdit
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #f5f5f5;
}
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
			// color:$navbar;
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
			position: relative;
		}
	}
	.no-data{
		height: 200px;
		color:#666;
		font-size:14px;
		text-align: center;
		line-height: 200px;
	}
	.icons_close{
		position: absolute;
		top:-8px;
		right:-8px;
	}
}
</style>
