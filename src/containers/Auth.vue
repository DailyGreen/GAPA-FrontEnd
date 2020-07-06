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
				
				<form @submit.prevent="loginUser">
					<div class="card form-card">
						<div class="row input-block">
							<i class="col-md-2 far fa-1x fa-envelope align-middle" :class="{ helpMe : loginData.emailHelp }"></i>
							<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="loginData.email">
						</div>
						<div class="row input-block">
							<i class="col-md-2 fas fa-1x fa-lock align-middle" :class="{ helpMe : loginData.pwHelp }"></i>
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
							<button type="submit" class="btn primary loginBtn">로그인</button>
						</div>
					</div>
				</form>
				<button type="button" class="btn registerBtn" v-on:click="page = 'REGISTER'" id="REGISTER">계정이 없으신가요?<span>회원가입</span></button>
			</div>			
			<!-- 회원가입 페이지 (왼쪽) -->
			<div class="left-content register-page col-md-5" v-show="page === 'REGISTER'">
				<h1 class="register-title">환영합니다!</h1>
				<form @submit.prevent="registerUser">
					<div class="card form-card">
						<div class="row input-block">
							<i class="col-md-2 far fa-user align-middle"></i>
							<input type="Nickname" id="name" class="col-md-10" placeholder="닉네임" onfocus="this.placeholder = ''" onblur="this.placeholder = '닉네임'" v-model="registerData.nickname">
						</div>
						<div class="row input-block">
							<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
							<input type="email" id="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="registerData.email">
						</div>
						<div class="row input-block">
							<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
							<input type="password" id="pw" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'" v-model="registerData.pw">
						</div>
						<div class="row input-block">
							<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
							<input type="password" class="col-md-10" placeholder="비밀번호 재입력" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호 재입력'" v-model="registerData.repw">
						</div>
						<div class="row justify-content-between" style="margin: 0px;">
							<button type="button" class="col-md-4 sex-btn" v-if="registerData.sex === false" v-on:click="registerData.sex = !registerData.sex">
								<i class="fas fa-1x fa-male align-middle" style="margin-right: 10px;"></i> 남자
							</button>
							<button type="button" class="col-md-4 sex-btn" v-else-if="registerData.sex === true" v-on:click="registerData.sex = !registerData.sex">
								<i class="fas fa-1x fa-female align-middle" style="margin-right: 10px;"></i> 여자
							</button>
							<div class="col-md-5" style="padding: 0px;">
								<div class="row input-block">
									<i class="col-md-4 fas fa-1x fa-child align-middle"></i>
									<input type="number" id="age" class="col-md-8 text-center" style="padding-right:10px;" min="1" max="99"  placeholder="나이" onfocus="this.placeholder = ''" onblur="this.placeholder = '나이'" v-model="registerData.age">
								</div>
							</div>
						</div>
					</div>
					<div class="row d-flex align-items-center">
						<div class="col-sm-7">
							<span class="loginBtn" v-on:click="page = 'LOGIN'">로그인 하러 가기</span>
						</div>
						<div class="col-sm-5">
							<button class="btn primary registerBtn" type="submit"> 회원가입 </button>
						</div>
					</div>
				</form>
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
				pw: '',
				emailHelp: false,
				pwHelp: false
			},
			registerData: {
				email: '',
				pw: '',
				repw: '',
				nickname: '',
				sex: false,
				age: ''
			}
		}
    },
	methods:{
		loginUser: function(){
			this.loginData.emailHelp = false;
			this.loginData.pwHelp = false;
			// 로그인 버튼 눌렀을때
			this.$http.get('http://localhost:3000/users', {
				params: {
					email: this.loginData.email,
					pw: this.loginData.pw
				}
			})
			.then(response => {
				console.log(response);
				if (response.data.msg === 'SUCCESS') {
					console.log("로그인 성공");
					this.$router.push('IndexPage');
				} else if (response.data.msg === 'EMAIL_SUCCESS') {
					this.loginData.pwHelp = true;
					console.log("이메일만 성공");
				} else {
					this.loginData.emailHelp = true;
					this.loginData.pwHelp = true;
					console.log("로그인 실패");
				}
			})
			.catch(error => {
				console.log(error);
			});
		},
		registerUser: function() {
			// 회원가입 버튼 눌렀을때
			this.$http.post('http://localhost:3000/users', {
				email: this.registerData.email,
				pw: this.registerData.pw,
				name: this.registerData.nickname,
				sex: this.registerData.sex,
				age: this.registerData.age
			})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/form.scss";
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
		.sex-btn {
			width: 100%;
			height: 47px;
			border: 0;
			color: #686868;
			cursor: pointer;
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
	background-color: $blackColor;
}

</style>
