<template>
  <div>
    <div class="container">
		<div class="card" style="box-shadow: 0px 0px 30px 0px gray;"  id="authentication">
			<!-- 로그인 창 state === 1-->
			<div v-show='state === 1'>
				<div class="card-body">
					<div class="card-body col-xs-6 col-md-8 center-block">
						<p class="center-block text-center text-welcome"  >Welcome !!</p>
					</div>
					<br/><br/><br/><br/>
					<form>
						<div class="form-inline">
							<label class="sr-only" for="ID">ID</label>
							<input type="id" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="ID">
						</div>
						<div class="form-inline">
							<label class="sr-only" for="Password">PW</label>
							<input type="password" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="PW">
						</div>
						<br/>
						<button type="button" class="center-block btn btn-success col-md-6" v-on:click="gameSelect" style="font-size: 25px;">Login</button>
					</form>
					<br/><br/><br/><br/>
				</div>
				<button type="button" class="btn btn-success btn-account" href="#" style="margin-top: 10px" v-on:click="wantRegister">Create an Account</button>
			</div>

			<!-- 회원가입 창 -->
			<div v-show='state === 0'>
				<div class="card-body">
					<div class="card-body col-xs-6 col-md-8 center-block">
						<p class="center-block text-center text-welcome"  >Nice to meet you !!</p>
					</div>
					<br/><br/>
					<form>
						<div class="form-inline">
							<label class="sr-only" for="ID">ID</label>
							<input type="id" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="ID">
						</div>
						<div class="form-inline">
							<label class="sr-only" for="Password">PW</label>
							<input type="password" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="PW">
						</div>
						<div class="form-inline">
							<label class="sr-only" for="Password">PW-RE</label>
							<input type="password" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="PW-RE">
						</div>
						<div class="form-inline">
							<label class="sr-only" for="ID">E-mail</label>
							<input type="email" class="center-block form-control col-md-6" style="margin-bottom: 10px" placeholder="E-mail">
						</div>
						<br/>
						<button type="button" class="center-block btn btn-success col-md-6" style="font-size: 25px;">Register</button>
					</form>  
					<br/><br/>              
				</div>
				<button type="button" class="btn btn-success btn-account" href="#"  style="margin-top: 10px;" v-on:click="wantLogin">Login</button>
			</div>

			<!-- 게임 선택 창 state === 2-->
			<div v-show='state === 2'>
				<div class="card-body" style="margin-bottom: 5%;">
					<div class="card-body col-xs-6 col-md-8 center-block">
						<p class="center-block text-center text-welcome"  >CHOOSE GAME</p>
					</div>
					<div class="row" style="margin-top:5%;">
						<div class="col-md-4">
							<button type="button" class="center-block btn-game"   v-on:click="soverwatch"><img :src="require(`@/assets/overwatch.png`)" width="80%"> </button>
							<div class="col-md-3 center-block select-box" v-show='game === 1'></div>
							<div class="col-md-3 center-block un-select-box" v-show='disableButton === true'></div>
						</div>
						<div class="col-md-4">
							<button type="button" class="center-block btn-game"  v-on:click="slol"><img :src="require(`@/assets/lol.png`)" width="80%"></button>
							<div class="col-md-3 center-block select-box" v-show='game === 2'></div>
						</div>
						<div class="col-md-4">
							<button type="button" class="center-block btn-game"  v-on:click="spubg"><img :src="require(`@/assets/pubg.png`)" width="80%"></button>
							<div class="col-md-3 center-block select-box" v-show='game === 3'></div>
						</div>
					</div>
					<button v-show='disableButton === true' type="button" class="center-block btn col-md-4 next-btn"   disabled><a href="#"></a>NEXT</button>
					<button v-show='disableButton === false' type="button" class="center-block btn btn-success col-md-4 next-btn"  ><a href="#"></a>NEXT</button>
				</div>
			</div>

			<!-- 다음 페이지-->
			<div v-show='state === 3'>
				<div class="card-body">
				</div>
			</div>
		</div>
	</div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
	data () {
		return {
			// state === 0 : 회원가입 창
			// state === 1 : 로그인 창
			// state === 2 : 게임 선택 창
			state: 1,
			// game === 0 : null
			// game === 1 : 옵치
			// game === 2 : 롤
			// game === 3 : 배그
			game: 0,
			disaleButton: true
		}
	},
	methods: {
		// 페이지 전환
		wantRegister : function() {
			this.state = 0;
		},
		wantLogin : function() {
			this.state = 1;
		},
		gameSelect : function() {
			this.state = 2;
		},

		// 게임 선택(s = select)
		soverwatch : function() {
			this.game = 1;
			this.disableButton = false;
		},
		slol : function() {
			this.game = 2;
			this.disableButton = false;
		},
		spubg : function() {
			this.game = 3;
			this.disableButton = false;
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
}
body {
    background-image: url("../assets/unknown-1.png");
    /*background-image: url("../img/background.jpg");*/
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Orbitron', sans-serif;
}

/* Bootstrap btn-success 색 수정 */
.btn-success {
    background-color: #a9d18e;
    border: #a9d18e;
    outline: #a9d18e;
}
.btn-success:hover {
    background-color: #99bf80;
    border: #a9d18e;
    outline: #a9d18e;
}

/* input 태그 폼 _________ 모양 만드는 클래스 (미사용) */
.form-input {
    border-right: #ffffff 1px solid;
    border-left: #ffffff 1px solid;
    border-top: #ffffff 1px solid;
    border-bottom: #000000 1px solid;
}

.card .btn-account {
    color: #ffffff;
    font-size: 15px;
    width: 100.2%;
    /* padding: 0; */
    margin: 0;
    border-radius: 0 0 1px 1px;
}

@media (min-width: 992px) {
    .card {
        margin-left: 10rem;
        margin-right: 10rem;
        margin-top: 10rem;
        /* 카드 주위에 회색 테두리 없애줌 */
        border-right: #ffffff 3px solid;
        border-left: #ffffff 1px solid;
        border-top: #ffffff 1px solid;
        border-bottom: #ffffff 1px solid;
        /* padding-bottom: 10%; */
    }

    .form-auth > .form-group {
        margin-left: 7rem;
        margin-right: 7rem;
    }

    .btn-game:after,
    .btn-game:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 2px;
        width: 0;
        background: #1AAB8A;
        transition: 400ms ease all;
    }
}

.card .card-body .text-welcome {
    color: #000000;
    font-size: 200%;
    margin-top: -4rem;
    background-color: white;
    box-shadow: 0 0 0.7px 0.7px gray;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
}

.card .card-body .center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.card .card-body .next-btn {
    margin-top: 10%;
    height: 50px;
    font-size: 150%;
}

/* 게임선택창 버튼 */
.card .card-body .center-block.btn-game {
    background: #fff;
    border: none;
    position: relative;
    height: auto;
    font-size: 1.6em;
    padding: 0 2em;
    cursor: pointer;
    transition: 400ms ease all;
    outline: none;
    outline-style: none;
}
.card .card-body .center-block.btn-game:hover {
    background: #fff;
}
.card .card-body .center-block.btn-game:active {
    background: #e2f0d9;
}
.card .card-body .center-block.btn-game:focus {
    outline-style: none;
}
.card .card-body .center-block.btn-game:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
}
.card .card-body .center-block:hover:before,
button:hover:after {
    width: 100%;
    transition: 800ms ease all;
}

/* select-box */
@keyframes game-selected {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
  }

.card .card-body .center-block.select-box {
    background: #a9d18e;
    border: 1px solid;
    border-style: none;
    margin-top: 5%;
    padding: 2.5px;
    animation-name: game-selected;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
}
.card .card-body .center-block.un-select-box {
    background: white;
    border: 1px solid;
    border-style: none;
    margin-top: 5%;
    padding: 2.5px;
}
</style>