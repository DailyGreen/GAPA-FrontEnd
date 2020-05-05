<template>
  <div>
	<div class="container">
		<div class="content row">
			<!--
					idle-page : 0
					search-page : 1
					chat-page : 2
					profile-page : 3
			-->
			<!-- 평상시 화면 (왼쪽)-->
			<div class="left-content idle-page col-md-8" v-if="type===0">
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/>
				<div class="search">
					<!-- <i class="fas fa-search"></i> -->
					<input class="search-input" type="text" placeholder="리그오브레전드">
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
			<!-- 팀원 찾기 화면 (왼쪽)-->
			<div class="left-content search-page col-md-8" v-else-if="type===1">
				<div class="bg"></div>
				<div class="row h-100">
					<div class="col-md-6">
						<div class="card">
							<i class="fas fa-user-friends fa-3x"></i>
							<div class="card-body">
								<p class="card-text">Join Team</p>
							</div>
							<!-- <div class="card-footer">
								<p>asdfasf</p>
							</div> -->
						</div>
					</div>
					<div class="col-md-6">
						<div class="card">
							<i class="fas fa-plus fa-3x"></i>
							<div class="card-body">
								<p class="card-text">Create Team</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="left-content chat-page col-md-8" v-else-if="type===2">
				<div class="chat-content">
					<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
						<div class="chat-log row">
							<div class="profile col-md-2">
								<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)"/>
							</div>
							<div class="msg col-md-10">
								<p class="nickname">닉네임</p>
								<pre>안녕하세요오옹.</pre>
							</div>
						</div>
						<div class="chat-log row">
							<div class="profile col-md-2">
								<img class="profile-img float-center" :src="require(`@/assets/blackspirit.jpg`)"/>
							</div>
							<div class="msg col-md-10">
								<p class="nickname">닉네임22</p>
								<pre>
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	네 반갑습니다아. ㅁㄴㅇㄻ
	ㄴㅇㄻㄴㅇㄹ
	asdf
	여러줄 테스트으 ㅁㄴㅇㄹ
								</pre>
							</div>
						</div>
						<div class="chat-log row">
							<div class="profile col-md-2">
								<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)"/>
							</div>
							<div class="msg col-md-10">
								<p class="nickname">닉네임</p>
								<pre>안녕하세요오옹.</pre>
							</div>
						</div>
					</simplebar>
				</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Send Your Message">
					<div class="input-group-append">
						<button class="btn btn-outline-secondary" type="button">Enter</button>
					</div>
				</div>
			</div>
			<div class="left-content profile-page col-md-8" v-else-if="type===3">
				<h3>Games<span> ></span></h3>
				<div class="games">
					<img class="game-card" :src="require(`@/assets/lol_card.png`)"/>
					<img class="game-card" :src="require(`@/assets/pubg_card.jpg`)"/>
				</div>
				<h3>Recent<span> ></span></h3>
				<div class="recents">
					<p> 리그오브레전드를(을) 5인파티로 생성해서 게임함 (3hours)</p>
				</div>
			</div><!-- left-content -->
			
			<!--
					idle-page : 0
					search-page : 1
			-->
			<!-- 평상시 화면 (오른쪽)-->
			<div class="right-content idle-page col-md-4" v-if="type===0">
				<div class="state-nav">
					<!-- 상태 네비 공간으로 프로필이나 알린 등등이 들어갈 것임 -->
					<img class="profile-img float-right" :src="require(`@/assets/profileImg.png`)"/>
				</div>
				
				<div class="menu-nav">
					<!-- 버튼 나중에 꾸미기! -->
					<button type="button" class="btn btn-success btn-lg btn-block" v-on:click="type=1">
						<div class="card">
							<i class="fas fa-user-friends fa-2x"></i>
							<div class="card-body">
								<p class="card-text">함께할 팀 찾기</p>
							</div>
							<!-- <div class="card-footer">
								<p>asdfasf</p>
							</div> -->
						</div>
					</button>
					<button type="button" class="btn btn-success btn-lg btn-block" v-on:click="type=2">
						<div class="card">
							<i class="fas fa-plus fa-2x"></i>
							<div class="card-body">
								<p class="card-text">함께할 팀 꾸리기</p>
							</div>
						</div>
					</button>
				</div>
			</div>
			<!-- 팀원 검색 화면 (오른쪽)-->
			<div class="right-content search-page col-md-4" v-else-if="type===2">
				<!-- <img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/> -->
				<h1 class="search-title">Waiting TEAM..</h1>
				<div class="teams card">
					<div class="member row" v-for="member in teams" v-bind:key="member.id" v-on:click="type=3">
						<div class="col-md-3 member-profile">
							<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)"/>
						</div>
						<div class="col-md-9 member-name">
							<span class="align-middle">{{ member.name }}</span>
						</div>
					</div>
					<div class="member empty-member row" v-for="i in (maxMember - teams.length)" v-bind:key="i">
						<div class="col-md-3 member-profile">
							<img class="profile-img float-center" :src="require(`@/assets/noone.png`)"/>
						</div>
						<div class="col-md-9 member-name">
							<span class="align-middle">Empty</span>
						</div>
					</div>
				</div>
				<div class="leave-teams">
					<button class="btn btn-light" v-on:click="type=0"><i class="fas fa-sign-out-alt"></i></button>
				</div>
			</div><!-- left-content -->
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
					name: '닉네임',
					id: 'asdf'
				},
				{
					name: '닉네임22',
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
    -webkit-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	-moz-box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	box-shadow: 0px 0px 50px -25px rgba(71,71,71,1);
	background-color: white;
	border-radius: 30px;
	padding: 0px 15px 0px 15px;
	font-family: 'Noto Sans KR', sans-serif;
}
.content {
    height: 40rem;
	// background-color: #8458B3;
	.profile-img {
		min-width: 40px;
		max-width: 40px;
		min-height: 40px;
		max-height: 40px;
		border-radius: 20%;
		object-fit: cover;
		cursor: pointer;
	}
	.left-content {
		padding: 20px 40px 0px 40px;
		border-radius: 50px;
		// border-radius: 40px 50px 50px 40px;
		// border-radius: 0px 50px 50px 0px;
		background-color: $idleColor;
		overflow: hidden;		
		.title-img {
			width: 40px;
			position: relative;
		}		
		&.idle-page {
			.sprofile {
				background-color: black;
				border-radius: 50px;
				opacity: 0.5;
				float: right;
				height: 6.5%;
			}
			.search {
				// margin-top: 5rem;
				font-size: 30px;
				// font-weight: 700;
				color: black;
				.search-input {
					width: 100%;
					// margin-left: 15px;
					// display: block;
					color: white;
					border: 0px;
					border-radius: 4px;
					padding: 0px 10px 0px 10px;
					background-color: rgba(20,20,20,0.2);
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
					cursor: pointer;
				}
			}
		}
		&.search-page {
			background-color: white;
			&:not(.bg) {
				z-index: 1;
			}
			.bg {
				position: absolute;
				background: url('~@/assets/lol_illust.png') no-repeat right 0px; 
				-webkit-background-size: cover;
				-moz-background-size: cover;
				-o-background-size: cover;
				background-size: cover;
				filter: brightness(50%);
				-webkit-filter: blur(3px);
				-moz-filter: blur(3px);
				-o-filter: blur(3px);
				-ms-filter: blur(3px);
				filter: blur(3px);
				width: calc(100% + 80px);
				height: calc(100% + 20px);
				margin: -20px -40px 0px -40px;
				z-index: -1;
			}
			.row {
				height: 100%;
				text-align: center;
				.col-md-6 {
					margin-top: auto;
					margin-bottom: auto;
					.card {
						padding-top: 40px;
						padding-bottom: 10px;
						border-radius: 20px;
						cursor: pointer;
						.card-body {
							.card-text {
								font-weight: 700;
							}
						}
						.card-footer {
							padding: 0px;
							p { margin-top: 5px; margin-bottom: 0px; }
						}
					}
				}
			}
		}
		&.chat-page {
			.chat-content {
				margin-top: 20px;
				// padding-top: 20px;
				// padding-bottom: 20px;
				width: 100%;
				height: -webkit-calc(100% - 100px); /* for Chrome, Safari */
				height:    -moz-calc(100% - 100px); /* for Firefox */
				height:         calc(100% - 100px); /* for IE */
				border: 0px;
				border-radius: 5px;
				background-color: #edebeb;
				.scrolling-wrapper {
					height: 520px;		
					padding-right: 10px;
					padding-bottom: 20px;
					-webkit-overflow-scrolling: touch;
					.chat-log {
						margin-left: 0px;
						margin-right: 0px;
						margin-top: 20px;
						.profile {
							text-align: center;
							.profile-img {
								min-width: 60px;
								max-width: 60px;
								min-height: 60px;
								max-height: 60px;
								border: 0px;
							}
						}
						.msg {
							padding-left: 0px;
							.nickname {
								margin-bottom: 0px;
								font-weight: 800;
								font-size: 20px;
							}
							pre {
								color: rgba(0,0,0,0.5);
								margin-bottom: 0px;
								white-space: pre-line;
								font-size: 16px;
								font-weight: 600;
								font-family: 'Noto Sans KR', sans-serif;
							}
						}
					}
				}
			}
		}
		&.profile-page {
			color: white;
			font-size: 14px;
			h3 {
				margin-top: 30px;
				font-size: 20px;
				font-weight: 700;
				span {
					font-size: 14px;
					font-weight: 400;
				}
			}
			.games {
				font-weight: 400;
				.game-card {
					object-fit: cover;
					object-position: center;
					width: 100px;
					height: 120px;
					margin-bottom: 1rem;
				}
			}
		}
	}
	.right-content {
		padding: 25px;
		// border-radius: 50px 0px 0px 50px;
		border-radius: 30px 30px 30px 30px;
		background-color: $themeColor;
		&.idle-page {
			.state-nav {
				height: 40px;
				display: block;
				.profile-img {
					display: block;
				}
			}
			.menu-nav {
				height: -webkit-calc(100% - 40px); /* for Chrome, Safari */
				height:    -moz-calc(100% - 40px); /* for Firefox */
				height:         calc(100% - 40px); /* for IE */
				border-color: white;
				display: flex;
				flex-direction: column; justify-content: center;
				align-items: center;
				button {
					display: block;
					background-color: $pointColor;
					padding: 0px;
					.card {
						background-color: $pointColor;
						font-size: 20px;
						font-family: 'Noto Sans KR', sans-serif;
						font-weight: 900;
						i {
							padding-top: 10px;
						}
						.card-body {
							padding-top: 10px;
							padding-bottom: 10px;
						}
					}
				}
			}
		}		
		&.search-page {
			.search-title {
				color: white;
				margin-top: 8rem;
				font-family: 'Lilita One', cursive;
			}
			.teams {
				margin-top: 10px;
				border: 0px;
				background-color: $themeColor;
				color: white;
				.member {
					background-color: $themeColor;
					border-radius: 10px;
					margin: 2px 0px 2px 0px;
					.member-profile {
						padding: 8px 0px 8px 0px;
						text-align: center;
					}
					.member-name {
						padding: 0px;
						text-align: left;
						display: flex;
						align-items: center;
					}
					&:hover {
						cursor: pointer;
						background-color: #1f1d1d;
					}
				}
				.empty-member {
					color: #575757;
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
}
</style>
