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
			<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="false" v-if="showFollowers">
				<div class="list-content">
					<div class="card" v-for="i in 40" :key="i">
						<img :src="require(`@/assets/img/profile/profileImg.png`)" alt="profile-image" class="profile"/>
						<div class="card-content">
							<h2>닉네임</h2>
							<p>14 Followers</p>
						</div>
					</div>
				</div>
			</simplebar>
			<button class="btn btn-primary refresh-btn mx-auto d-block">방 생성</button>
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

	.form-box {
		margin-top: 30px;
		padding-left: 3rem;
		padding-right: 3rem;
		.wrapper-titles {
			display: flex; 
			flex-direction: row;
			&:after { 
				content: ""; 
				flex: 1 1; 
				border-bottom: 1px solid $grayColor;
				margin: auto auto auto 15px;
			} 
		}
		.scrolling-wrapper {
			height: 200px;
			padding-right: 10px;
			margin-bottom: 25px;
			-webkit-overflow-scrolling: touch;
			.card {
				margin-bottom: 25px;
				display: inline-block;
				position: relative;
				color: #ffffff;
				text-align: center;
				width: 138px;
				border: 0px;
				border-radius: 10px;
				box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
				background-color: $themeColor;
				padding: 30px 0px 30px 0px;
				.profile {
					border-radius: 50%;
					min-width: 50px;
					min-height: 50px;
					max-width: 50px;
					max-height: 50px;
					object-fit: cover;
				}
				.card-content {
					h2 {
						font-size: 18px;
					}
				}
			}
		}
	}
</style>
