<template>
  <div>
	<div class="container">
		<div class="content row">
			<!-- 로그인 화면 (왼쪽) -->
			<div class="left-content login-page col-md-4" v-if="type===0">
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
				<h1 class="login-title">SIGN IN</h1>
				<!--<p class="text-danger"> 아이디 혹은 비밀번호가 다릅니다.</p>-->
				
				<div class="login card">
					<!-- <div class="group">
						<input class="form-item id" id="id" type="text" name="id" required>
						<label for="id">아이디</label>
					</div> -->
					<input type="id" class="col-md-12" style="margin-bottom: 10px;" placeholder="아이디">
					<input type="id" class="col-md-12" placeholder="비밀번호">
					<button type="button" class="btn btn-success" v-on:click="LoginSuccess">Login</button>
					<a href="#" style="margin-top: 0px; text-align:center; font-size: 13px;">계정 생성</a>
					<!-- 로그인 실패시 띄워주기 -->
					<!-- <a href="#">로그인이 안되시나요?</a> -->
				</div>
			</div>
			<!-- 평상시 화면 (왼쪽)-->
			<div class="left-content common-page col-md-4" v-else-if="type===1">
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
				
				<div class="common-profile card">
					<img class="profileimg" :src="require(`@/assets/blackspirit.jpg`)"/>
					<h4 class="text-center" style="margin-top: 30px;">닉 넣을까말까?#3322</h4>
					<!-- 버튼 나중에 꾸미기! -->
					<button type="button" class="btn btn-success" id="top">호출 대기</button>
					<button type="button" class="btn btn-success" id="bottom" v-on:click="type=2">팀 생성하기</button>
				</div>
			</div>
			<!-- 팀원 검색 화면 (왼쪽)-->
			<div class="left-content search-teams col-md-4" v-else-if="type===2">
				<!-- <img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/> -->
				<h1 class="search-title">Waiting TEAM..</h1>

				<div class="teams card">
					<div class="member row" v-for="member in teams" v-bind:key="member.id">
						<div class="col-md-4 member-profile">
							<i class="fas fa-male"></i>
						</div>
						<div class="col-md-8 member-name">
							<p>{{ member.name }}</p>
						</div>
					</div>
					<div class="empty-member" v-for="i in (maxMember - teams.length)" v-bind:key="i">
						<p>Empty</p>
					</div>
				</div>
				<div class="leave-teams">
					<button class="btn btn-light" v-on:click="type=1"><i class="fas fa-sign-out-alt"></i></button>
				</div>
			</div>
			
			<!-- 로그인 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-if="type===0">
				<h1> 안녕하세요 !</h1>
				<h5 id="bottom-text">반갑습니다! 저는 GAPA라고 해요.</h5>
				<h5 id="bottom-text">저는 게임 친구, 파티를 찾아드리기 위해 만들어졌어요. \- 이런거 이제 안함ㅁㅁㅁ</h5>
			</div>
			<!-- 평상시 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-else-if="type===1">
				<div class="sprofile col-md-4">
					<h1 style="font-size: 20px; color: white;">small profile</h1>	<!-- 임시용 나중에 수정-->
				</div>
				<div class="search">
					<i class="fas fa-search"></i>
					<input class="" type="text" placeholder="Search">
				</div>
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="card-columns">
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">Card title that wraps to a new line</h5>
								<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
						</div>
						<div class="card p-3">
							<blockquote class="blockquote mb-0 card-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="blockquote-footer">
									<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div class="card bg-primary text-white text-center p-3">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
								<footer class="blockquote-footer text-white">
									<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card text-center">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
						</div>
						<div class="card p-3 text-right">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="blockquote-footer">
									<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<!-- 팀원 찾기 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-else-if="type===2">
				<p>fdsa</p>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
	
export default {
	data () {
		return {
			/*
				type: 페이지 상황
				0: 로그인
				1: 평소 Index
				2: 팀원 검색 중
			*/
			type: 0,
			teams: [
				{
					name: 'USER_0',
					id: 'asdf'
				},
				{
					name: '유저_1',
					id: 'fdsa'
				}
			],
			maxMember: 4
		}
    },
	methods:{
		LoginSuccess : function(){
			this.type = 1;
		}
	},
	components: {
		simplebar
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
	margin-top: 100px;
    // box-shadow: #4E67EB 0px 0px 5px 0px;
	background-color: white;
	border-radius: 50px;
	padding: 5px 20px 5px 20px;
}
.content {
	img#title-img {
    width:60px;
    position: relative;
	}
	
    height: 40rem;
	// background-color: #8458B3;
	.left-content {
		padding: 25px;
		border-radius: 50px 0px 0px 50px;
		background-color: white;
		.title-img {
			width: 40px;
		}
		&.login-page{
			.login-title {
					margin-top: 8rem;
					font-family: 'Lilita One', cursive;
					margin-bottom: 1rem;
				}
			.login{
				border-color: white;
				button{
					margin-top: 3rem;
				}
				input{
					font-size: 22px;
					border: 0px;
					border-bottom: #d5ebca 1px solid;
					margin-top: 20px;
					margin-bottom: 20px;
				}
			}
		}
		&.common-page{
			.common-profile{
				border-color: white;
				.profileimg{
					width: auto;
					height: auto;
					max-width: 128px;
					max-height: 128px;
					border-radius: 50%;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				
				button{
					&#top{
						margin-top: 8rem;
					}
					&#bottom{
						margin-top: 2rem;
					}
				}
			}
		}
		
		
		&.search-teams {
			.search-title {
				margin-top: 8rem;
				font-family: 'Lilita One', cursive;
			}
			.teams {
				margin-top: 10px;
				border: 0px;
				.member {
					background-color: white;
					border: 0px;
					margin: 2px 0px 2px 0px;
					.member-profile {
						padding: 8px 0px 8px 0px;
						text-align: center;
					}
					.member-name {
						padding: 8px 0px 8px 0px;
						text-align: left;
						p { margin-bottom: 0px; }
					}
					&:hover {
						background-color: #F2F2F2;
					}
				}
				.empty-member {
					margin: 10px 0px 10px 0px;
					// text-align: center;
					padding: 10px;
					font-family: 'Baloo Bhai', cursive;
				}
			}
			.leave-teams {
				position: absolute;
				bottom: 5%; 
				left: 50%; 
				transform: translateX(-50%) translateY(-50%); 
				i {
					font-size: 40px;
					// color: #ABABAB;
				}
			}
		}
	}
	.right-content {
		padding: 20px 40px 0px 40px;
		border-radius: 50px;
		// border-radius: 40px 50px 50px 40px;
		// border-radius: 0px 50px 50px 0px;
		background-color: $themeColor;
		.sprofile{
			background-color: black;
			border-radius: 50px;
			opacity: 0.5;
			float: right;
			height: 6.5%;
		}
		.search {
			margin-top: 5rem;
			font-size: 30px;
			color: white;
			input {
				margin-left: 15px;
				color: white;
				border: 0px;
				background-color: rgba(0,0,0,0);
				&::placeholder {
					color: #FAFAFA;
					border: 0px;
				}
			}
		}
		.scrolling-wrapper {
			margin-top: 50px;
			height: 443px;		
			padding-right: 10px;
			-webkit-overflow-scrolling: touch;
			.card {
				border-radius: 25px;
				overflow: hidden;
			}
		}
		.main{
			h2{
				font-family: 'Permanent Marker', cursive;
			}
		}
	}
}
</style>
