<template>
	<div>
		<h1>방 만들기</h1>
		<form class="form-box">
			<input class="form-control form-control-lg" type="text" placeholder="즐겁게 게임하실 분들만 구해요 ^^">
			<div class="form-group">
				<label for="inputState">인원수</label>
				<select id="inputState" class="form-control">
					<option selected>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<p> 대기 중인 팔로우들 </p>
			<button class="btn btn-primary">방 생성</button>
		</form>
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
	methods:{
		PopPage : function() {
			this.$emit('PopPage');
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

	.form-box {
		padding-left: 3rem;
		padding-right: 3rem;
	}
</style>
