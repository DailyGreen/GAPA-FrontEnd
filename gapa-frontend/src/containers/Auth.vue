<template>
  <div>
	<div class="container">
		<div class="content row">
			<!---------------------------------- start of left-content ---------------------------------->
			<!-- 로그인 화면 (왼쪽) -->
			<div class="left-content login-page col-md-5" v-show="page === 'LOGIN'">
				<!-- <img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/> -->
				<h1 class="login-title">안녕하세요!</h1>
				<!--<p class="text-danger"> 아이디 혹은 비밀번호가 다릅니다.</p>-->
				
				<div class="card form-card">
					<div class="row input-block">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="loginData.email">
					</div>
					<div class="row input-block">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'"  v-model="loginData.pw">
					</div>
					<div class="remember">
						<input type="checkbox" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">로그인 정보 기억하기</label>
					</div>
					<!-- 로그인 실패시 띄워주기 -->
					<!-- <a href="#">로그인이 안되시나요?</a> -->
				</div>
				<div class="row d-flex align-items-center" style="margin-bottom: 180px;">
					<div class="col-sm-7">
						<span class="forgotPwBtn" v-on:click="page = 'FORGOT'"> 비밀번호를 깜빡했어요! </span>
					</div>
					<div class="col-sm-5">
						<button type="button" class="btn primary loginBtn" v-on:click="Login">로그인</button>
					</div>
				</div>
				<button type="button" class="btn registerBtn" v-on:click="page = 'REGISTER'" id="REGISTER">계정이 없으신가요?<span>회원가입</span></button>
			</div>			
			<!-- 회원가입 페이지 (왼쪽) -->
			<div class="left-content register-page col-md-5" v-show="page === 'REGISTER'">
				<h1 class="register-title">환영합니다!</h1>
				
				<div class="card form-card">
					<div class="row input-block">
						<i class="col-md-2 far fa-user align-middle"></i>
						<input type="Nickname" class="col-md-10" placeholder="닉네임" onfocus="this.placeholder = ''" onblur="this.placeholder = '닉네임'" v-model="registerData.nickname">
					</div>
					<div class="row input-block">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="registerData.email">
					</div>
					<div class="row input-block">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'" v-model="registerData.pw">
					</div>
					<div class="row input-block">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="비밀번호 재입력" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호 재입력'" v-model="registerData.repw">
					</div>
					<!-- <button type="button" class="col-md-6 btn btn-success" v-on:click="Register">SIGN UP</button> -->
				</div>
				<div class="row d-flex align-items-center">
					<div class="col-sm-7">
						<span class="loginBtn" v-on:click="page = 'LOGIN'">로그인 하러 가기</span>
					</div>
					<div class="col-sm-5">
						<button class="btn primary registerBtn" v-on:click="Register"> 회원가입 </button>
					</div>
				</div>
			</div>
			<!-- 계정 잊었을때 페이지 (왼쪽) -->
			<div class="left-content found-page col-md-5" v-show="page === 'FORGOT'">			
				<h1 class="found-title">계정 찾기</h1>
				<p class="found-desc">가입시 입력한 이메일 주소를 입력해주세요.</p>
				<div class="card form-card">
					<div class="row input-block">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="loginData.email">
					</div>
				</div>
				<div class="row d-flex align-items-center">
					<div class="col-sm-7">
						<span class="loginBtn" v-on:click="page = 'LOGIN'">로그인 하러 가기</span>
					</div>
					<div class="col-sm-5">
						<button class="btn primary foundBtn" > 계정 찾기 </button>
					</div>
				</div>
			</div>
			<!----------------------------------- end of left-content ----------------------------------->
		


			<!---------------------------------- start of right-content ---------------------------------->
			<!-- 로그인 화면 (오른쪽) -->
			<div class="right-content login-page col-md-7">
				<div id="introduceCarousel" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#introduceCarousel" class="indicate-item active" data-slide-to="0"></li>
						<li data-target="#introduceCarousel" class="indicate-item" data-slide-to="1"></li>
						<li data-target="#introduceCarousel" class="indicate-item" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
						<img class="d-block w-100" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)" alt="First slide">
						</div>
						<div class="carousel-item">
						<img class="d-block w-100" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)" alt="Second slide">
						</div>
						<div class="carousel-item">
						<img class="d-block w-100" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)" alt="Third slide">
						</div>
					</div>
					<a class="carousel-control-prev" href="#introduceCarousel" role="button" data-slide="prev">
						<!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
						<!-- <span class="sr-only">Previous</span> -->
					</a>
					<a class="carousel-control-next" href="#introduceCarousel" role="button" data-slide="next">
						<!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
						<!-- <span class="sr-only">Next</span> -->
					</a>
				</div>

				<!-- <br/>
				<img class="" style="width: 300px;" :src="require(`@/assets/img/usefull/gapa_project.png`)"/>
				<br/><br/><br/><br/>
				<p>게임 파티 매칭 시스템, 가파입니다.</p>
				<p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p>
				<img class="" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)"/> -->
				<!-- <p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p> -->
			</div>
			<!-- 회원가입 페이지(오른쪽) -->
			<!-- <div class="right-content register-page col-md-7">
				<button type="button" class="btn btn-success" v-on:click="SingIn">SIGN IN</button>
			</div> -->
			<!----------------------------------- end of right-content ----------------------------------->
		</div>
	</div>
  </div>
</template>

<script>

export default {
	data () {
		return {
			/*
				page: 페이지 상황
				'LOGIN': 로그인
				'REGISTER': 회원가입
				'FORGOT': 계정을 까먹었을때
			*/
			page: 'LOGIN',
			loginData: {
				email: '',
				pw: ''
			},
			registerData: {
				email: '',
				pw: '',
				repw: '',
				nickname: ''
			}
		}
    },
	methods:{
		Login: function(){
			// 로그인 버튼 눌렀을때
		},
		Register: function() {
			// 회원가입 버튼 눌렀을때
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/container.scss";
@import "@/assets/css/button.scss";

.left-content {
	height: 100%;
	border-radius: 30px 30px 30px 30px;
	overflow: hidden;
	background-color: $blackColor;
	.title-img {
		width: 40px;
		position: relative;
	}
	&.login-page {
		.login-title {
			color: $whiteColor;
			margin-top: 8rem;
			margin-bottom: 1rem;
			font-weight: 700;
		}
		.forgotPwBtn {
			// font-size: 14px;
			// font-weight: 400;
			color: $grayColor;
			cursor: pointer;
		}
		.btn {
			&.loginBtn {
				width: 100%;
				padding: 10px 30px 10px 30px;
			}
			&.registerBtn {
				height: 55px;
				background-color: $whiteColorOpa;
				width: 100%;
				color: $grayColor;
				font-weight: 400;
				font-size: 13px;
				padding: 10px;
				padding: 15px 30px 15px 30px;
				&:hover {
					font-size: 14px;
					span {
						font-size: 15px;
					}
				}
				span {
					margin-left: 10px;
					font-weight: 600;
					font-size: 14px;
				}
			}
		}
	}
	&.register-page {
		.register-title {
			margin-top: 8rem;
			margin-bottom: 1rem;
			font-weight: 700;
			color: $whiteColor;
		}
		.loginBtn {
			font-size: 16px;
			font-weight: 400;
			color: $grayColor;
			cursor: pointer;
		}
		.registerBtn {
			width: 100%;
			padding: 10px 30px 10px 30px;
		}
	}
	&.found-page {
		.found-title {
			color: $whiteColor;
			margin-top: 8rem;
			font-weight: 700;
			// margin-bottom: 3rem;
		}
		.found-desc {
			font-weight: 400;
			font-size: 18px;
			color: $whiteColor;
			margin-bottom: 50px;
		}
		.form-card {
			margin-bottom: 35px;
		}
		.loginBtn {
			font-size: 16px;
			font-weight: 400;
			color: $grayColor;
			cursor: pointer;
		}
		.foundBtn {
			width: 100%;
			padding: 10px 30px 10px 30px;
		}
	}
}
.right-content {
	padding: 25px;
	background: none;
	overflow: hidden;
	height: 100%;
	&.login-page {
		color: black;
		text-align: center;
		.carousel {
			height: 100%;
			.carousel-indicators {
				margin-bottom: 0px;
				.indicate-item {
					width:15px;
					height:15px;
					background-color: $blackColor;
					//  border-radius:15px !important;
				}
			}
		}
		.carousel-control-prev,
		.carousel-control-next {
			background-color: none;
		}
	}
	&.register-page{
		
	}
}

.form-card {
	// border-color: $themeColor;
	background-color: $blackColor;
	.input-block {
		border-radius: 3px;
		background-color: $whiteColorOpa;
		display: block;
		margin: 0px 0px 10px 0px;
		box-shadow: 5px 5px 10px rgba(247,247,247,0.3);
		input {
			border-radius: 0px 3px 3px 0px;
			padding: 10px 20px 10px 20px;
			font-size: 18px;
			border: 0px;
			background-color: $whiteColor;
			color: #686868;
			&:focus {
				outline: none;
			}
		}
		i {
			padding: 0px 0px 5px 0px;
			text-align: center;
			vertical-align: middle;
			color: #686868;
		}
	}
	.remember {
		color: white;
		margin-bottom: 20px;
		.form-check-input {
			margin-left: 0px;
		}
		.form-check-label {
			font-size: 12px;
			font-weight: 400;
			margin-left: 20px;
		}
	}
}

</style>
