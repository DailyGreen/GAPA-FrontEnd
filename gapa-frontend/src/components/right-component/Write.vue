<template>
	<div>
		<div class="write">
			<h1 class="write-title">작성하기</h1>
			<!-- 	TAG 기능을 넣거나, 글쓰기 유의사항을 설명하거나 할 예정		 -->
			<!-- <p class="write-desc">타인의 사진을 도용하거나 부적절한 이미지 등록시 어쩌구 저쩌구</p> -->
			<form class="write-form">
				<div class="form-group">
					<label class="textarea-label" for="img-desc">내용을 입력해주세요 :</label>
					<textarea class="form-control" id="img-desc" rows="6"></textarea>
					<label class="textarea-limit-label">(0/30)</label>
				</div>
			</form>
			<div class="write-decision-group">
				<button class="btn btn-cancel" v-on:click="PagePopAndMove()">취소</button>
				<button class="btn btn-complete positive">작성</button>
			</div>
		</div>
	</div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
export default {
	props: {
		pages: {
			name: {
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
			RIGHT_TYPE : new RIGHT_TYPE()
		}
	},
	methods: {		
		PagePopAndMove : function() {
			//	TODO: 더 나은 PagePop()호출 방식을 발견한다면 개선하기
			/*
				this.pages = this.$emit('PagePop'); 는
				this.pages = this.PagePop(); 처럼 PagePop()이 실행되고 바로 pages 로 값이 들어 가지 않는다.
				때문에 다른 방식으로 접근해야됨
			 */
			this.$emit('PagePopAndMove');
		},
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/button.scss";
.write {
	height: 670px;
	display: flex;
	// align-items: center;
	flex-direction: column;
	justify-content: space-between;
	.write-title {
		color: white;
		font-weight: 700;
	}
	.write-desc {
		color: white;
	}
	.write-form {
		.form-group {
			position: relative;
			.textarea-label {
				color: white;
			}
			.textarea-limit-label {
				opacity: 0.8;
				font-size: 10px;
				font-weight: 400;
				color: white;
				position: absolute;
				right: 0px;
			}
		}
	}
	.write-decision-group {
		position: relative;
		bottom: 0px;
		.btn {
			width: 50%;
			height: 50px;
			color: white;
			&.btn-cancel {
				background-color: $blackColor;
			}
			&.btn-complete {
				border-radius: 10px;
			}
		}
	}
}
</style>
