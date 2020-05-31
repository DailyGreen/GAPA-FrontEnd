<template>
	<div>
		<div class="upload-img-block" v-show="writeType === 'imgWrite'">
			<div class="upload-img-logo d-flex align-items-center justify-content-center">
				<i class="fas fa-file-upload"></i>
			</div>
			<p class="upload-img-title">UPLOAD IMAGE</p>
			<p class="upload-img-desc">이미지는 게시글에 하나만 등록가능합니다.</p>
			<button class="btn upload-img-button">이미지 찾기</button>
		</div>
		<div class="textWrite" v-show="writeType === 'textWrite'">
		</div>
	</div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
export default {
	props: {
		pages: {
			names: {
				type: String,
				default: ''
			},
			leftType: {
				type: Number,
				default: -1
			},
			rightType: {
				type: Number,
				default: -1
			}
		}
	},
	data () {
		return {
			LEFT_TYPE : new LEFT_TYPE(),
			RIGHT_TYPE : new RIGHT_TYPE(),
			writeType: 'imgWrite'		// 'imgWrite': 이미지 업로드  || 'textWrite': 글만 업로드
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
	
.upload-img-block {
	width: 100%;
	height: 553px;
	border-radius: 25px;
	background-color: $idleColor;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	.upload-img-logo {
		width: 150px;
		height: 150px;
		border-radius: 20px;
		background-color: $grayColor;
		text-align: center;
		i {
			font-size: 100px;
			color: $idleColor;
		}
	}
	.upload-img-title {
		margin-top: 10px;
		margin-bottom: 0px;
		color: $grayColor;
		font-size: 18px;
		font-weight: 600;
	}
	.upload-img-desc {
		margin-top: 5px;
		margin-bottom: 0px;
		color: $grayColor;
		font-size: 14px;
		font-weight: 400;
	}
	.upload-img-button {
		margin-top: 15px;
		font-size: 14px;
		font-weight: 600;
		color: white;
		background-color: $positiveColor;
		&:hover {
			opacity: 0.9;
		}
		&:active {
			opacity: 0.8;
		}
	}
}
</style>
