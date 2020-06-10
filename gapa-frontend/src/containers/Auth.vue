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
				<button type="button" class="btn loginBtn" v-on:click="Login" id="login">로그인</button>
				<button type="button" class="btn registerBtn" v-on:click="page = 'REGISTER'" id="REGISTER">회원가입</button>
			</div>			
			<!-- 회원가입 페이지 (왼쪽) -->
			<div class="left-content register-page col-md-5" v-show="page === 'REGISTER'">
				<h1 class="register-title">반갑습니다!</h1>
				
				<div class="card form-card">
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
						<input type="Confirm Password" class="col-md-10" placeholder="비밀번호 재입력" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호 재입력'" v-model="registerData.repw">
					</div>
					<div class="row input-block">
						<i class="col-md-2 far fa-user align-middle"></i>
						<input type="Nickname" class="col-md-10" placeholder="닉네임" onfocus="this.placeholder = ''" onblur="this.placeholder = '닉네임'" v-model="registerData.nickname">
					</div>
					<!-- <button type="button" class="col-md-6 btn btn-success" v-on:click="Register">SIGN UP</button> -->
				</div>
				<button type="button" class="btn loginBtn" v-on:click="page='LOGIN'" id="login">로그인</button>
				<button type="button" class="btn registerBtn" v-on:click="Register" id="register">회원가입</button>
			</div>
			<!----------------------------------- end of left-content ----------------------------------->
		


			<!---------------------------------- start of right-content ---------------------------------->
			<!-- 로그인 화면 (오른쪽) -->
			<div class="right-content login-page col-md-7" v-if="page === 'LOGIN'">
				<br/>
				<img class="" style="width: 300px;" :src="require(`@/assets/img/usefull/gapa_project.png`)"/>
				<br/><br/><br/><br/>
				<p>게임 파티 매칭 시스템, 가파입니다.</p>
				<p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p>
				<!-- <p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p> -->
				<img class="" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)"/>
			</div>
			<!-- 회원가입 페이지(오른쪽) -->
			<div class="right-content register-page col-md-7" v-if="page === 'REGISTER'">
				<button type="button" class="btn btn-success" v-on:click="SingIn">SIGN IN</button>
			</div>
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

.left-content {
	height: 100%;
	border-radius: 30px 30px 30px 30px;
	overflow: hidden;
	background-color: $themeColor;
	.title-img {
		width: 40px;
		position: relative;
	}
	&.login-page{
		.login-title {
			color: white;
			margin-top: 8rem;
			margin-bottom: 1rem;
			font-weight: 700;
		}
		.btn {
			&.loginBtn {
				font-weight: 600;
				background-color: $themeColor;
				padding: 10px 30px 10px 30px;
			}
			&.registerBtn {
				// margin-left: 20px;
				color: white;
				font-weight: 400;
				font-size: 12px;
				padding: 10px;
				padding: 15px 30px 15px 30px;
			}
		}
	}
	&.register-page{
		.register-title {
			color: white;
			margin-top: 4rem;
			margin-bottom: 1rem;
		}
		.btn {
			&.loginBtn {
				color: white;
				font-weight: 400;
				font-size: 12px;
				padding: 10px;
				padding: 15px 30px 15px 30px;
			}
			&.registerBtn {
				font-weight: 600;
				background-color: $themeColor;
				padding: 10px 30px 10px 30px;
			}
		}
	}
}
.right-content {
	padding: 25px;
	background: none;
	overflow: hidden;
	&.login-page {
		color: black;
		text-align: center;
	}
	&.register-page{
		
	}
}

.form-card {
	border-color: $themeColor;
	background-color: $themeColor;
	.input-block {
		background-color: #e6e6e6;
		display: block;
		margin: 0px 0px 10px 0px;
		box-shadow: 5px 5px 10px rgba(0,0,0,0.4);
		input {
			padding: 10px 20px 10px 20px;
			font-size: 18px;
			border: 0px;
			background-color: #e6e6e6;
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
