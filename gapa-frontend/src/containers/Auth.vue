<template>
  <div>
	<div class="container">
		<div class="content row">
			<!-- <div class="col-md-" -->
			<!--
					login-page : 0
					idle-page : 1
					search-page : 2
			-->
			<!-- 로그인 화면 (왼쪽) -->
			<div class="left-content login-page col-md-5" v-if="type===0">
				<!-- <img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/> -->
				<h1 class="login-title">안녕하세요!</h1>
				<!--<p class="text-danger"> 아이디 혹은 비밀번호가 다릅니다.</p>-->
				
				<div class="login-form card">
					<div class="row">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="signInData.email">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'"  v-model="signInData.pw">
					</div>
					<div class="remember">
						<input type="checkbox" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">로그인 정보 기억하기</label>
					</div>
					<!-- 로그인 실패시 띄워주기 -->
					<!-- <a href="#">로그인이 안되시나요?</a> -->
				</div>
				<button type="button" class="btn btn-success" v-on:click="LoginSuccess" id="Login">로그인</button>
				<button type="button" class="btn btn-success" v-on:click="SingUp" id="SingUp">회원가입</button>
			</div>
			
			<!-- 회원가입 페이지 (왼쪽) -->
			<div class="left-content SingUp-page col-md-5" v-if="type===-1">
				<h1 class="SingUp-title">반갑습니다!</h1>
				
				<div class="SingUp card">
					<div class="row">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="이메일" onfocus="this.placeholder = ''" onblur="this.placeholder = '이메일'" v-model="signUpData.email">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="비밀번호" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호'" v-model="signUpData.pw">
					</div>
					<div class="row">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="Confirm Password" class="col-md-10" placeholder="비밀번호 재입력" onfocus="this.placeholder = ''" onblur="this.placeholder = '비밀번호 재입력'" v-model="signUpData.repw">
					</div>
					<div class="row">
						<i class="col-md-2 far fa-user align-middle"></i>
						<input type="Nickname" class="col-md-10" placeholder="닉네임" onfocus="this.placeholder = ''" onblur="this.placeholder = '닉네임'" v-model="signUpData.nickname">
					</div>
					<!-- <button type="button" class="col-md-6 btn btn-success" v-on:click="Register">SIGN UP</button> -->
				</div>
				<button type="button" class="btn btn-success" v-on:click="type=0" id="Login">로그인</button>
				<button type="button" class="btn btn-success" v-on:click="Register" id="SingUp">회원가입</button>
			</div>
		
			<!-- 로그인 화면 (오른쪽) -->
			<div class="right-content login-page col-md-7" v-if="type===0">
				<br/>
				<img class="" style="width: 300px;" :src="require(`@/assets/img/usefull/gapa_project.png`)"/>
				<br/><br/><br/><br/>
				<p>게임 파티 매칭 시스템, 가파입니다.</p>
				<p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p>
				<!-- <p>당신의 성향과 비슷한 유저를 찾고 같이 플레이하세요!</p> -->
				<img class="" :src="require(`@/assets/img/usefull/gapa_intro_1.png`)"/>
			</div>
			<!-- 회원가입 페이지(오른쪽) -->
			<div class="right-content SingUp-page col-md-7" v-if="type===-1">
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
	// background-color: #8458B3;
	.left-content {
		padding: 40px 40px 0px 40px;
		// border-radius: 50px 0px 0px 50px;
		border-radius: 30px 0px 0px 30px;
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
			.login-form {
				border-color: $themeColor;
				background-color: $themeColor;
			}
			#Login {
				font-weight: 600;
				background-color: $themeColor;
				padding: 10px 30px 10px 30px;
			}
			#SingUp {
				// margin-left: 20px;
				color: white;
				font-weight: 400;
				font-size: 12px;
				padding: 10px;
				padding: 15px 30px 15px 30px;
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
			#SingUp {
				font-weight: 600;
				background-color: $themeColor;
				padding: 10px 30px 10px 30px;
			}
			#Login {
				// margin-left: 20px;
				color: white;
				font-weight: 400;
				font-size: 12px;
				padding: 10px;
				padding: 15px 30px 15px 30px;
			}
			// button {
			// 	background-color: #8ce33d;
			// 	display: table;
			// 	margin: 0 auto;
			// 	margin-top: 2rem;
			// }
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
			text-align: center;
		}
		&.SingUp-page{
			
		}
	}
}
</style>
