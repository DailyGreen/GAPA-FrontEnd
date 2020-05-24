<template>
  <div>
	<div class="container">
		<div class="content row">
			<!--
					login-page : 0
					idle-page : 1
					search-page : 2
			-->
			<!-- 로그인 화면 (왼쪽) -->
			<div class="left-content login-page col-md-4" v-if="type===0">
				<img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/>
				<h1 class="login-title">SIGN IN</h1>
				<!--<p class="text-danger"> 아이디 혹은 비밀번호가 다릅니다.</p>-->
				
				<div class="login card">
					<div class="row">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" v-model="signInData.email">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"  v-model="signInData.pw">
					</div>
					<button type="button" class="btn btn-success" v-on:click="LoginSuccess" id="Login">Login</button>
					<a class="text-center" v-on:click="SingUp" id="SingUp">SingUp</a>
					<!-- 로그인 실패시 띄워주기 -->
					<!-- <a href="#">로그인이 안되시나요?</a> -->
				</div>
			</div>
			
			<!-- 회원가입 페이지 (왼쪽) -->
			<div class="left-content SingUp-page col-md-4" v-if="type===-1">
				<img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/>
				<h1 class="SingUp-title">SingUp</h1>
				
				<div class="SingUp card">
					<div class="row">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" v-model="signUpData.email">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" v-model="signUpData.pw">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="Confirm Password" class="col-md-10" placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'" v-model="signUpData.repw">
					</div>
					<div class="row">
						<i class="col-md-2 far fa-user align-middle"></i>
						<input type="Nickname" class="col-md-10" placeholder="Nickname" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nickname'" v-model="signUpData.nickname">
					</div>
					<button type="button" class="col-md-6 btn btn-success" v-on:click="Register">SIGN UP</button>
				</div>
			</div>
		
			<!-- 로그인 화면 (오른쪽) -->
			<div class="right-content login-page col-md-8" v-if="type===0">
				<p>여기 안에는 뭐할까요</p>
			</div>
			<!-- 회원가입 페이지(오른쪽) -->
			<div class="right-content SingUp-page col-md-8" v-if="type===-1">
				<button type="button" class="btn btn-success" v-on:click="SingIn">SIGN IN</button>
			</div>
		</div>
	</div>
  </div>
</template>

<script>

export default {
	data () {
		return {
			/*
				type: 페이지 상황
				-1: 회원가입
				0: 로그인
				1: 평소 Index
				2: 팀원 검색 중
			*/
			type: 0,
			signInData: {
				email: '',
				pw: ''
			},
			signUpData: {
				email: '',
				pw: '',
				repw: '',
				nickname: ''
			}
		}
    },
	methods:{
		LoginSuccess: function(){
			this.type = 1;
		},
		SingIn: function() {
			this.type = 0;
		},
		SingUp: function() {
			this.type = -1;
		},
		Register: function() {
			
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

@mixin media($queryString){
  @media #{$queryString} {
    @content;
  }
}

.container {
	margin-top: 100px;
    -webkit-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	-moz-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	background-color: white;
	border-radius: 30px;
	padding: 0px 15px 0px 15px;
}
.content {
    height: 40rem;
	border-radius: 30px 30px 30px 30px;
	background-image: url("../assets/img/usefull/background.jpg");
	background-repeat : no-repeat;
	background-size : cover;
	// background-color: #8458B3;
	.left-content {
		padding: 25px;
		// border-radius: 50px 0px 0px 50px;
		border-radius: 30px 30px 30px 30px;
		background-color: $themeColor;
		.title-img {
			width: 40px;
			position: relative;
		}
		.card {
			.row {
				background-color: #e6e6e6;
				display: block;
				margin: 0px 0px 10px 0px;
			}
			input{
				padding: 10px 0px 10px 0px;
				font-size: 18px;
				border: 0px;
				background-color: #e6e6e6;
				color: #686868;
				box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
				&:focus {
					outline:none;
				}
			}
			i {
				padding: 0px 0px 5px 0px;
				text-align: center;
				vertical-align: middle;
				color: #686868;
			}
		}
		&.login-page{
			.login-title {
				color: white;
				margin-top: 8rem;
				margin-bottom: 1rem;
				font-weight: 700;
			}
			.login{
				border-color: $themeColor;
				background-color: $themeColor;
				#Login {
					font-weight: 600;
					background-color: $pointColor;
					margin-top: 3rem;
				}
				#SingUp {
					cursor: pointer;
					color: white;
					font-weight: 400;
					font-size: 12px;
				}
			}
		}
		&.SingUp-page{
			.SingUp-fonts {
				color: white;
				font-size : 20px;
			}
			.SingUp-title {
				color: white;
				margin-top: 4rem;
				margin-bottom: 1rem;
			}
			.SingUp{
				border-color: $themeColor;
				background-color: $themeColor;
			}
			button {
				background-color: #8ce33d;
				display: table;
				margin: 0 auto;
				margin-top: 2rem;
			}
		}
	}
	.right-content {
		padding: 20px 40px 0px 40px;
		border-radius: 50px;
		// border-radius: 40px 50px 50px 40px;
		// border-radius: 0px 50px 50px 0px;
		background: none;
		overflow: hidden;
		&.login-page {
			// 로긴 페이지
			color: black;
		}
		&.SingUp-page{
			// background-image: url("../assets/temp.jpg");
			background-repeat : no-repeat;
			background-size : cover;
		}
	}
}
</style>
