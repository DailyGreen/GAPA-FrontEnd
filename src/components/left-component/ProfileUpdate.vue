<template>
	<div class="profile-update">
		<form @submit.prevent="updateUser">
			<div class="profile-block">
				<div class="profile-img-logo d-flex align-items-center justify-content-center">
					<i class="fas fa-file-upload"></i>
				</div>
				<textarea class="desc-form form-control" maxlength="30" id="desc" rows="3" placeholder="자기소개를 작성해주세요. (최대 30글자)" v-model="profileData.desc"></textarea>
			</div>

			<div class="card form-card">
				<div class="row input-block">
					<i class="col-md-2 far fa-user align-middle"></i>
					<input type="Nickname" id="name" class="col-md-10" placeholder="닉네임" onfocus="this.placeholder = ''" onblur="this.placeholder = '닉네임'" v-model="profileData.nickname">
				</div>
				<div class="row input-block">
					<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
					<input type="email" id="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="profileData.email">
				</div>
				<div class="row input-block">
					<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
					<input type="password" id="pw" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'" v-model="profileData.pw">
				</div>
				<div class="row input-block">
					<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
					<input type="password" class="col-md-10" placeholder="비밀번호 재입력" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호 재입력'" v-model="profileData.repw">
				</div>
				<div class="row theme-block">
					<div class="col-md-2 text-center"><i class="fas fa-1x fa-palette align-middle"></i></div>	
					<div class="col-md-10">
						<button v-for="theme in THEME_TYPE" :key="theme.idx" class="btn btn-theme" 
							:class="{ 'active' : theme.idx === profileData.theme}" :style="{ background : theme.color }" v-on:click="profileData.theme = theme.idx"></button>
					</div>
				</div>	
			</div>
			<div class="text-center" style="width: 100%;">
				<button class="btn primary updateBtn" type="submit"> 수정 </button>
			</div>
		</form>
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
			THEME_TYPE : {
				PURPLE : {
					color: '#9754CB',
					idx: 0
				},
				GREEN : {
					color: '#C0EB6A',
					idx: 1
				},
				BLUE : {
					color: '#6A67CE',
					idx: 2
				},
				ORANGE : {
					color: '#FF8F00',
					idx: 3
				},
			},
			profileData: {
				email: '',
				pw: '',
				repw: '',
				nickname: '',
				theme: 0,
				desc: '',
				img: ''
			}
		}
	},
	methods:{
		updateUser: function() {

		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
@import "@/assets/css/button.scss";

@import "@/assets/css/form.scss";

.profile-update {
	height: 100%;
	position: relative;
	padding-left: 50px;
	padding-right: 50px;
	.profile-block {
		width: 100%;
		border-radius: 25px;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		.profile-img-logo {
			width: 150px;
			height: 150px;
			border-radius: 20px;
			background-color: $whiteColorOpa;	
			text-align: center;
			i {
				font-size: 100px;
				color: $whiteColor;
			}
		}
		.desc-form {
			margin-top: 15px;
			margin-bottom: 15px;
			width: 70%;
		}
	}
	.form-card {
		.theme-block {
			margin: 15px 0px 15px 0px;
			i {
				color: $blackColorOpa;
			}
			.btn-theme {
				width: 35px;
				height: 35px;
				padding: 0px;
				border-radius: 25px;
				margin-right: 10px;
				&.active {
					-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4) !important;
					-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4) !important;
					box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4) !important;
					border: 2px solid $whiteColorOpa !important;
				}
			}
		}
	}
	.updateBtn {
		position: absolute;
		bottom: 50px;
		margin-left: -25px;
	}
}
</style>
