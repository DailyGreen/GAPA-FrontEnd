<template>
	<div>
		<h1>방 만들기</h1>
		<form class="form-box">
			<div class="form-group">
				<label for="roomTitle">방 제목</label>
				<input class="form-control form-control-lg" type="text" placeholder="즐겁게 게임하실 분들만 구해요 ^^" id="roomTitle">
			</div>
			<div class="form-group">
				<label for="headCount">인원수</label>
				<select id="headCount" class="form-control">
					<option selected>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<p class="wrapper-titles" v-on:click="showFollowers = !showFollowers"> 대기 중인 팔로우들 </p>
			<simplebar class="followers-scrolling-wrapper" data-simplebar-auto-hide="false" v-if="showFollowers">
				<div class="row card-wrapper">
					<div class="col-sm-6" v-for="i in 12" :key="i">
						<div class="card card-rounded card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
								<p class="user-state">리그오브레전드 대기중</p>
							</blockquote>
						</div>
					</div>
				</div>
			</simplebar>
			<button class="btn positive mx-auto d-block">방 생성</button>
		</form>
	</div>
</template>

<script>	
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

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
			RIGHT_TYPE : new RIGHT_TYPE(),
			showFollowers: false
		}
	},
	methods:{
		PopPage : function() {
			this.$emit('PopPage');
		}
	},
	components: {
		simplebar
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/card.scss";
@import "@/assets/css/button.scss";
	
	.form-box {
		margin-top: 30px;
		padding-left: 3rem;
		padding-right: 3rem;
		.wrapper-titles {
			margin-bottom: 0px;
			display: flex; 
			flex-direction: row;
			&:after { 
				content: ""; 
				flex: 1 1; 
				border-bottom: 1px solid $grayColor;
				margin: auto auto auto 15px;
			} 
		}
		.followers-scrolling-wrapper {
			height: 200px;
			padding-right: 10px;
			margin-bottom: 25px;
			-webkit-overflow-scrolling: touch;
			.card-wrapper {
				margin-left: 0px;
				margin-right: 0px;
			}
		}
	}
</style>
