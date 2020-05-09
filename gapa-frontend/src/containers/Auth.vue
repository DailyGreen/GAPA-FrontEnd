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
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
				<h1 class="login-title">SIGN IN</h1>
				<!--<p class="text-danger"> 아이디 혹은 비밀번호가 다릅니다.</p>-->
				
				<div class="login card">
					<div class="row login-input">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
					</div>
					<div class="row login-input">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
					</div>
					<button type="button" class="btn btn-success" v-on:click="LoginSuccess" id="Login">Login</button>
					<a class="text-center" v-on:click="SingUp" id="SingUp">SingUp</a>
					<!-- 로그인 실패시 띄워주기 -->
					<!-- <a href="#">로그인이 안되시나요?</a> -->
				</div>
			</div>
			
			<!-- 로그인 화면 (오른쪽)-->
			<div class="right-content login-page col-md-8" v-if="type===0">
				<p>여기 안에는 뭐할까요</p>
			</div>
			
			
			
			<!-- 회원가입 페이지-->
			<div class="left-content SingUp-page col-md-4" v-if="type===-1">
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
				<h1 class="SingUp-title">SingUp</h1>
				
				<div class="SingUp card">
					<div class="row SingUp-input">
						<i class="col-md-2 far fa-1x fa-envelope align-middle"></i>
						<input type="email" class="col-md-10" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
					</div>
					<div class="row SingUp-input">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="password" class="col-md-10" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
					</div>
					<div class="row SingUp-input">
						<i class="col-md-2 fas fa-1x fa-lock align-middle"></i>
						<input type="Confirm Password" class="col-md-10" placeholder="Confirm Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Confirm Password'">
					</div>
					<div class="row SingUp-input">
						<i class="col-md-2 far fa-user align-middle"></i>
						<input type="Nickname" class="col-md-10" placeholder="Nickname" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nickname'">
					</div>
				<button type="button" class="col-md-6 btn btn-success" v-on:click="SingIn">SIGN UP</button>
				</div>
			</div>
		
			<!-- 회원가입 페이지(오른쪽)-->
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
		}
    },
	methods:{
		LoginSuccess : function(){
			this.type = 1;
		},
		SingIn : function(){
			this.type = 0;
		},
		SingUp : function(){
			this.type = -1;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
	
// 폰트 생김새 : https://fonts.google.com/specimen/Lilita+One
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
// 폰트 생김새 : https://fonts.google.com/specimen/Baloo+Bhai ** 한글은 눈갱 **
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
// 폰트 생김새 : http://bitly.kr/gXMccr3 ** 한글은 눈갱 **
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

@font-face { font-family: 'Godo'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff'); }
@font-face { font-family: 'Godo'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff'); } .godo * { font-family: 'Godo', sans-serif; }

@mixin media($queryString){
  @media #{$queryString} {
    @content;
  }
}

.container {
	margin-top: 130px;
    -webkit-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	-moz-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	background-color: white;
	border-radius: 50px;
	// padding: 5px 20px 5px 20px;
	font-family: 'Noto Sans KR', sans-serif;
}
.content {
    height: 40rem;
	// background-color: #8458B3;
	.left-content {
		padding: 25px;
		// border-radius: 50px 0px 0px 50px;
		border-radius: 50px 50px 50px 50px;
		background-color: $themeColor;
		.title-img {
			width: 40px;
			position: relative;
		}
		&.login-page{
			.login-title {
				color: white;
				margin-top: 8rem;
				font-family: 'Lilita One', cursive;
				margin-bottom: 1rem;
			}
			.login{
				border-color: $themeColor;
				background-color: $themeColor;
				.login-input {
					background-color: #e6e6e6;
					display: block;
					margin: 0px 0px 10px 0px;
					input{
						padding: 10px 0px 10px 0px;
						font-size: 18px;
						border: 0px;
						background-color: #e6e6e6;
						color: #686868;
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
				a{
					cursor: pointer;
					color: white;
					margin-top: 2rem;
					font-family: 'Lilita One', cursive;
				}
				button#Login{
					background-color: $pointColor;
					margin-top: 3rem;
				}
				button#SingUp{
					background-color: $pointColor;
					margin-top: 1rem;
				}
			}
		}
		&.SingUp-page{
			.SingUp-fonts {
				color: white;
				font-family: 'Lilita One', cursive;
				font-size : 20px;
			}
			.SingUp-title {
				color: white;
				margin-top: 4rem;
				font-family: 'Lilita One', cursive;
				margin-bottom: 1rem;
			}
			.SingUp{
				border-color: $themeColor;
				background-color: $themeColor;
				.SingUp-input {
					background-color: #e6e6e6;
					display: block;
					margin: 0px 0px 10px 0px;
					margin-top: 15px;
					input{
						padding: 10px 0px 10px 0px;
						font-size: 18px;
						border: 0px;
						background-color: #e6e6e6;
						color: #686868;
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
		// background-color: $idleColor;
		overflow: hidden;
		&.login-page {
			// 로긴 페이지
			color: black;
		}
		&.SingUp-page{
			background-image: url("../assets/temp.jpg");
			background-repeat : no-repeat;
			background-size : cover;
		}
	}
}
</style>
