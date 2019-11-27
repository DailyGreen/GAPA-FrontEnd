<template>
	<div>
		<div class="container" id="main">
			<!-- 시작 페이지 -->
			<div class="row" v-show='state === 1'>
				<div class="col-md-6 gray" id="left">
					<img id="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
					<div class="col-content">
						<img src="img/gapa_intro_1.png"/>
					</div>
				</div>

				<div class="col-md-6 white" id="right">
					<div class="col-content">
						<h1> 안녕하세요 !</h1>
						<h5 id="bottom-text">반갑습니다! 저는 GAPA라고 해요.</h5>
						<h5 id="bottom-text">저는 게임 친구, 파티를 찾아드리기 위해 만들어졌어요.</h5><br><br><br>
						<button type="button" class="btn btn-success" v-on:click="wantLogin" id="open">문 두드리기</button>
					</div>
				</div>
			</div>

			<!-- 로그인 칭 -->
			<div class="row" v-show='state === 2'>
				<div class="col-md-6 gray" id="left">
					<img id="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
					<div class="col-content">
						<img :src="require(`@/assets/gapa_intro_1.png`)"/>
					</div>
				</div>

				<div class="col-md-6 white" id="right">
					<div class="col-content">
						<h1 id="top-text">똑! 똑! 똑!</h1>
						<h5 id="bottom-text">GAPA는 낯선사람에게 문열어주지 말라고 배웠어요.</h5><br><br><br>
						<div class="form-inline">
							<label class="sr-only" for="ID">ID</label>
							<input type="id" class="center-block" style="margin-bottom: 10px;" placeholder="  ID">
						</div>
						<div class="form-inline">
							<label class="sr-only" for="Password">PW</label>
							<input type="password" class="center-block" style="margin-bottom: 10px;" placeholder="  PW">
						</div>
						<button type="button" class="btn btn-success" id="loginbtn" v-on:click="gameSelect">Login</button><br/>
						<a href="#" id="register">회 원 가 입</a>
					</div>
					<div class="col-box" id="col-box">
					</div>
				</div>
			</div>

			<!-- 게임 입력 창 -->
			<div class="row" v-show='state === 3'>
				<div class="col-md-6 white" id="left">
					<img id="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
					<div class="col-content">
						<br/><br/><br/><br/><br/>
						<h1>어떤 게임의 친구를 찾으시나요?</h1>
						<h5>어떤 게임의 친구를 찾으시는지 선택해 주세요.</h5>
						<p>아! 언제든 변경할 수 있으니 걱정하지 않으셔도 되요 :)</p>
						<img id="intro-image" :src="require(`@/assets/gapa_intro_2.png`)"/>
					</div>
				</div>

				<div class="col-md-6 gray" id="right">
					<div class="form-inline">
						<label class="sr-only" for="game">game</label>
						<input type="game" class="center-block" id="gamebox" style="margin-bottom: 10px;" placeholder="   게임 입력">

						<!-- <div class="btn-group">
							<input type="game" class="center-block" id="gamebox" style="margin-bottom: 10px;" placeholder="   게임 입력">
							<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							</button>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Separated link</a>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	data () {
		return {
			// state === 0 : 회원가입 창
			// state === 1 : 시작 창
			// state === 2 : 로그인 창
			// state === 3 : 게임 창
			state: 1,
			on: true
		}
	},
	methods: {
		// 페이지 전환
		wantRegister : function() {
			this.state = 0;
		},
		wantLogin : function() {
			this.state = 2;
		},
		gameSelect : function() {
			this.state = 3;
		}
	},
	components: {
	}
}
// $('#open').on('click', function(e) {
//     setTimeout(function(){
//         $('#col-box').hide() 
//     }, 2000); // 1초는 깜빡이는 시간, 1초는 잠시 휴식(바로 버튼 못누르게)
// });
</script>


<style lang="scss" scoped>
body {
    background-color: #E2F0D9;
}

@font-face { 
    font-family: 'KoPubDotumMedium'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; 
}

@media (max-width :992px){
    .row .col-md-6#right #bottom-text{
        font-size: 16px;
    }
}

@media (min-width : 992px) {
    body {
        margin-top: 10rem;
    }
    .row .col-md-6#right #bottom-text{
        /*margin-top: -0.2rem;*/
        font-size: 18px;
    }
}

img#title-img {
    width:60px;
    position: relative;
    margin-left: 15px;
    /* margin-top:60px; */
}

.row {
    font-family: 'KoPubDotumMedium'; 
    height: 40rem;
    box-shadow: rgb(112, 106, 112) 0px 0px 35px -2px;
}
.row .col-md-6 .col-content {
    text-align: center;
}

.row .col-md-6.white{
    background-color: white;
}
.row .col-md-6.gray{
    background-color: rgb(248,248,248);
}

@keyframes col-box-anim {
    0% {
        opacity: 100;
    }
    20% {        
        opacity: 0;
    }
    40% {        
        opacity: 100;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 100;
    }
    99% {
        /* width: 100%; */
    }
    100% {
        opacity: 0;
        /* width: 0; */
    }
  }

.row .col-md-6 .col-box {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 100;
    background-color: white;
    animation-name: col-box-anim;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.row .col-md-6#left { 
    padding-top: 3%;
    height: 40rem;
}
.row .col-md-6#left #intro-image { 
    width:200px;
    position: absolute;
    bottom: 0;
    margin-left: -100px;
}
.row .col-md-6#right {
    padding-top: 20%;
    height: 40rem;
}

.row .col-md-6#right button {
    font-size: 25px;
    width: 150px;
    height: 50px;
}

.row .col-md-6#right .center-block{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.row .col-md-6#right input{
    height: 50px;
    width: 400px;
    border-right: #d5ebca 1px solid;
    border-left: #d5ebca 1px solid;
    border-top: #d5ebca 1px solid;
    border-bottom: #d5ebca 1px solid;
    box-shadow: 0px 0px 15px -7px gray;
}

.row .col-md-6#right button{
    background-color: #8dcc75;
    border-right: #8dcc75 1px solid;
    border-left: #8dcc75 1px solid;
    border-top: #8dcc75 1px solid;
    border-bottom: #8dcc75 1px solid;
}

.row .col-md-6#right #loginbtn{
    margin-top: 10%;
    width: 40%;
}

.row .col-md-6#right #top-text{
    margin-top: -8rem;
}

.row .col-md-6#right #register{
    color: #8dcc75;
    text-decoration: underline;
}

/* 게임 입력창 input */
.row .col-md-6#right .form-inline #gamebox{
    height: 50px;
    width: 400px;
    border-right: #8dcc75 3px solid;
    border-left: #8dcc75 3px solid;
    border-top: #8dcc75 3px solid;
    border-bottom: #8dcc75 3px solid;
    margin-top: 10px;
}
</style>
