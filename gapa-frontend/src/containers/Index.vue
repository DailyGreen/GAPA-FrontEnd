<template>
  <div>
	<div class="container">
		<div class="content row">
			<!--
					idle-page : 0 | 4(우측 notice-page 상태)
					search-page : 1
					chat-page : 2
					profile-page : 3
			-->
			<!-- 평상시 화면 (왼쪽)-->
			<div class="left-content idle-page col-md-8" v-show="pages.type === 'Main'">
				<img class="title-img" :src="require(`@/assets/gapa_icon.png`)" v-on:click="type=0"/>
				<div class="menu">
					<Button class="btn" v-on:click="pages.leftType = leftType.Explore">Explore</Button>
					<Button class="btn" v-on:click="pages.leftType = leftType.Games">Games</Button>
					<Button class="btn" v-on:click="pages.leftType = leftType.Explore">Rooms</Button>
					<Button class="btn">Users</Button>
				</div>
				<!-- 	검색어창 비활성화	 -->
				<!-- <div class="search">
					<input class="search-input" type="text" placeholder="리그오브레전드">
				</div> -->
				<div class="explore" v-show="pages.leftType === leftType.Explore">
					<h2>Recommend For You</h2>
					<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
						<div class="card-columns">
							<div class="card">
								<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">맞춤 라인에는 관련 게임을 분석해서</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div class="card p-3">
								<blockquote class="blockquote mb-0 card-body">
									<p>만들어진 방이나</p>
									<footer class="blockquote-footer">
										<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
									</footer>
								</blockquote>
							</div>
							<div class="card">
								<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">비슷한 유저들을 추천해줍니다.</h5>
									<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
									<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
							<div class="card">
								<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title" style="z-index:10;">맞춤 라인에는 관련 게임을 분석해서</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
							<div class="card text-center">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">This 비슷한 유저들을 추천해hort paragraphy of text below it.</p>
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
				<div class="games" v-show="pages.leftType === leftType.Games">
					<h2>Game Category</h2>
					<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
						<div class="game-category">
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="pages.rightType=rightType.GameInfo"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/DeadByDaylight.png`)" v-on:click="pages.rightType=rightType.GameInfo"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/LeagueOfLegend.png`)" v-on:click="pages.rightType=rightType.GameInfo"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/TTF.png`)" v-on:click="pages.rightType=rightType.GameInfo"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/overwatch.png`)" v-on:click="pages.rightType==rightType.GameInfo"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						</div>
					</simplebar>
				</div>
				<div class="rooms" v-show="pages.leftType === 1000">
					<h2>Rooms</h2>
					<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<h4 class="game-name">리그오브레전드 ></h4>
					<div class="room-list">
						<div class="card bg-primary text-white text-center p-3">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
								<footer class="blockquote-footer text-white">
									<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card bg-primary text-white text-center p-3">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
								<footer class="blockquote-footer text-white">
									<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
					</div>
					<h4 class="game-name">배틀그라운드 ></h4>
					</simplebar>
				</div>
			</div>
			<!-- 팀원 찾기 화면 (왼쪽)-->
			<div class="left-content search-page col-md-8" v-show="pages.leftType === leftType.Search">
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
			<div class="left-content chat-page col-md-8" v-show="pages.leftType === leftType.Chat">
				<div class="chat-content">
					<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
						<div class="chat-log row">
							<div class="profile col-md-2">
								<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
							</div>
							<div class="msg col-md-10">
								<p class="nickname">닉네임</p>
								<pre>안녕하세요오옹.</pre>
							</div>
						</div>
						<div class="chat-log row">
							<div class="profile col-md-2">
								<img class="profile-img float-center" :src="require(`@/assets/blackspirit.jpg`)" v-on:click="SearchUser"/>
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
								<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
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
			<div class="left-content profile-page col-md-8" v-show="pages.leftType === leftType.Timeline">
				<h3>Games<span> ></span></h3>
				<div class="games">
					<img class="game-card" :src="require(`@/assets/lol_card.png`)"/>
					<img class="game-card" :src="require(`@/assets/pubg_card.jpg`)"/>
				</div>
				<h3>Recent<span> ></span></h3>
				<div class="recents">
					<p> 리그오브레전드를(을) 5인파티로 생성해서 게임함 (3hours)</p>
					<p> 배틀그라운드(을) 4인 스쿼드 파티로 생성해서 게임함 (2days)</p>
				</div>
			</div><!-- left-content -->
			
			<!--
					idle-page : 0
					search-page : 1
					chat-page : 2
					notice-page : 4 (우측만 바뀜)
					search-page : 5 (좌측만 바뀔지 아직 미정)
			-->
			<!-- 평상시 화면 (오른쪽)-->
			<div class="right-content idle-page col-md-4" v-show="pages.type === 'Main'">
				<div class="state-nav">
					<!-- 상태 네비 공간으로 프로필이나 알린 등등이 들어갈 것임 -->
					<img class="profile-img float-right" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
					<button class="float-right" v-on:click="pages.rightType = rightType.Notice"><i class="far fa-bell"></i></button>
					<button class="float-right" v-on:click="pages.rightType = rightType.Notice"><i class="fas fa-search"></i></button>
				</div>
				<div class="game-profile" v-show="pages.rightType === rightType.GameInfo">
					<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="rightType=1"/>
					<br/>
					<a href="">13 <span>Followers</span></a>
					<a href="">2 <span>Rooms</span></a>
					<br/>
					<button class="btn btn-primary follow">Follow</button>
				</div>
				<div class="menu-nav" v-show="pages.rightType === rightType.Idle">>
					<!-- 버튼 나중에 꾸미기! -->
					<button type="button" class="btn btn-success btn-lg btn-block">
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
					<button type="button" class="btn btn-success btn-lg btn-block" v-on:click="CreateRoom">
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
			<div class="right-content search-page col-md-4" v-show="pages.rightType === rightType.SearchUser">
			</div>
			<!-- 팀원 꾸리기 화면 : 채팅 (오른쪽)-->
			<div class="right-content chat-page col-md-4" v-show="pages.rightType === rightType.UserList">
				<!-- <img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/> -->
				<h1 class="search-title">Waiting TEAM..</h1>
				<div class="teams card">
					<div class="member row" v-for="member in teams" v-bind:key="member.id" v-on:click="SearchUser">
						<div class="col-sm-3 member-profile">
							<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)"  v-on:click="SearchUser"/>
						</div>
						<div class="col-sm-9 member-name">
							<span class="align-middle">{{ member.name }}</span>
						</div>
					</div>
					<div class="member empty-member row" v-for="i in (maxMember - teams.length)" v-bind:key="i">
						<div class="col-sm-3 member-profile-empty">
							<!-- <img class="profile-img float-center" :src="require(`@/assets/noone.png`)"/> -->
							<div class="lds-ripple"><div></div><div></div></div>
						</div>
						<div class="col-sm-9 member-name">
							<span class="align-middle">Waiting..</span>
							<!-- <div class="lds-ripple"><div></div><div></div></div> -->
						</div>
					</div>
				</div>
				<div class="leave-teams">
					<button class="btn btn-light" v-on:click="OutRoom"><i class="fas fa-sign-out-alt"></i></button>
				</div>
			</div>
			<!-- 프로필 화면 (오른쪽)-->
			<div class="right-content profile-page col-md-4" v-show="pages.rightType === rightType.Profile">
				<button class="btn btn-light" v-on:click="OutRoom"><i class="fas fa-sign-out-alt"></i></button>
				
				<div class="profile-curt">
					<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
				</div>
				<div class="row profile-info">
					<div class="col-md-4 text-center">
						<h4>183</h4>
						<p>Followers</p>
					</div>
					<div class="col-md-4 text-center">
						<h4>4</h4>
						<p>Games</p>
					</div>
					<div class="col-md-4 text-center">
						<h4>1.2K</h4>
						<p>Following</p>
					</div>
				</div>
			</div>
			<!-- 알림 화면 (오른쪽) -->
			<div class="right-content notice-page col-md-4" v-show="pages.rightType === rightType.Notice">
				<button class="btn btn-light" v-on:click="pages.rightType = rightType.Idle"><i class="fas fa-sign-out-alt"></i></button>
				<img class="profile-img float-right" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
				<h4>Notifications</h4>
				<div class="notice-content">
					<div class="notice-msg row">
						<div class="col-md-2">
							<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
						</div>
						<div class="col-md-10">
							<h5>닉네임2</h5>
							<h6>Would You Join Us? <span>(3min)</span></h6>
							<button type="button" class="btn btn-primary">Join</button>
							<button type="button" class="btn btn-outline-primary">Refused</button>
						</div>
					</div>
					<div class="notice-msg row">
						<div class="col-md-2">
							<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
						</div>
						<div class="col-md-10">
							<h5>NickName3232</h5>
							<h6>Would You Join Us? <span>(1day)</span></h6>
							<p>Refused..</p>
						</div>
					</div>
					
				</div>
			</div>
			<!-- left-content -->
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
			leftType: {
				Explore: 0,
				Games: 1,
				Chat: 2,
				UserList: 3,
				Timeline: 4,
				Search: 5
			},
			rightType: {
				Idle: 0,
				Notice: 1,
				Profile: 2,
				GameInfo: 3,
				UserList: 4,
				Search: 5
			},
			// pages: [
			// 	{ type: 'Main', leftType: leftType.Explore, rightType: rightType.Idle },
			// 	{ type: 'Chat', leftType: leftType.Chat, rightType: rightType.UserList },
			// 	{ type: 'Profile', leftType: leftType.Chat, rightType: rightType.UserList }
			// ],
			pages: {
				type: 'Main',
				leftType: 0,
				rightType: 0
			},
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
		init: function() {
			this.pages.leftType = this.leftType.Explore;
			this.pages.rightType = this.rightType.Idle;
		},
		SearchUser : function() {
			this.pages.type = 'Profile';
			this.pages.leftType = this.leftType.Timeline;
			this.pages.rightType = this.rightType.Profile;
		},
		OutRoom: function() {
			this.pages.type = 'Main';
			this.init();
		},
		JoinRoom: function() {
			this.pages.type = 'Chat';
			this.pages.leftType = this.leftType.Chat;
			this.pages.rightType = this.rightType.UserList;
		},
		CreateRoom: function() {
			this.JoinRoom();
		}
	},
	mounted() {
		this.init();
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

@keyframes lds-ripple {
  0% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 36px;
    height: 36px;
    opacity: 0;
  }
}
.lds-ripple {
	display: inline-block;
	position: relative;
	width: 40px;
	height: 40px;
	text-align: center;
	div {
		position: absolute;
		border: 2px solid #fff;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.1, 0.4, 1) infinite;
		display: inline-block;
		&:nth-child(2) {
			animation-delay: -0.5s;
		}
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
		padding: 40px 40px 0px 40px;
		border-radius: 50px;
		// border-radius: 40px 50px 50px 40px;
		// border-radius: 0px 50px 50px 0px;
		// background-color: $idleColor;
		overflow: hidden;		
		.title-img {
			width: 40px;
			position: relative;
		}		
		&.idle-page {
			.menu {
				margin-left: 10px;
				display: inline;
				.btn {
					margin-left: 10px;
					&:hover {
						color: $pointColor;
					}
					&:active,
					&:focus {
						outline: none !important;
						box-shadow: none !important;
					}
				}
			}
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
			.explore {
				margin-top: 30px;
				.scrolling-wrapper {
					height: 443px;
					padding-right: 10px;
					-webkit-overflow-scrolling: touch;
					.card {
						border-radius: 25px;
						// overflow: hidden;
						cursor: pointer;
					}
				}
			}
			.games {
				margin-top: 30px;
				.scrolling-wrapper {
					height: 443px;
					padding-right: 10px;
					-webkit-overflow-scrolling: touch;
					.game-category {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						.card {
							width: 138px;
							margin-bottom: 15px;
							display: inline-block;
							position: relative;
							border: 0px;
							.game-img {
								min-width: 138px;
								min-height: 183px;
								max-width: 138px;
								max-height: 183px;
								display: inline-block;
								position: relative;
								border-radius: 10px;
								box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
								cursor: pointer;
							}
							.card-body {
								margin-top: 5px;
								padding: 0px;
								.game-name {
									font-size: 14px;
									font-weight: 500;
									margin-bottom: 0px;
								}
								.game-follower {
									font-size: 12px;
									color: #656565;
									font-weight: 400;
									margin-bottom: 0px;
								}
							}
						}
					}
				}	
			}
			.rooms {
				margin-top: 30px;
				.scrolling-wrapper {
					height: 443px;
					padding-right: 10px;
					-webkit-overflow-scrolling: touch;
					.game-name {
						
					}
					.room-list {
						.card {
							width: 120px;
						}
					}
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
				// margin-top: 20px;
				// padding-top: 20px;
				// padding-bottom: 20px;
				width: 100%;
				height: -webkit-calc(100% - 80px); /* for Chrome, Safari */
				height:    -moz-calc(100% - 80px); /* for Firefox */
				height:         calc(100% - 80px); /* for IE */
				border: 0px;
				border-radius: 5px;
				background-color: #edebeb;
				.scrolling-wrapper {
					height: 520px;		
					padding-right: 10px;
					-webkit-overflow-scrolling: touch;
					.chat-log {
						margin: 20px 0px 20px 0px;
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
			color: black;
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
				button {
					height: 40px;
					line-height: 40px;
					margin-right: 20px;
					border: 0px;
					background-color: $themeColor;
					color: white;
					cursor: pointer;
					i {
						font-size: 24px;
					}
				}
				.profile-img {
					display: block;
				}
			}
			.game-profile {
				margin-top: 30px;
				text-align: center;
				.game-img {
					min-width: 138px;
					min-height: 183px;
					max-width: 138px;
					max-height: 183px;
					border-radius: 10px;
				}
				a {
					margin-left: 5px;
					margin-right: 5px;
					color: white;
					font-weight: 500;
					text-decoration: none;
					span {
						color: $idleColorOpa;
						font-size: 12px;
						font-weight: 400;
					}
				}
				.btn {
					border: 0px;
					&.follow {
						background-color: $positiveColor;
					}
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
		}
		&.chat-page {
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
					.member-profile-empty {
						margin-top: 8px;
						margin-bottom: 8px;
						width: 40px;
						height: 40px;
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
		&.profile-page {
			.profile-curt {
				margin-top: 50px;
				text-align: center;
				.profile-img {
					min-width: 150px;
					max-width: 150px;
					min-height: 150px;
					max-height: 150px;
					border-radius: 20%;
					object-fit: cover;
					cursor: pointer;
				}
			}
			.profile-info {
				margin-top: 50px;
				color: white;
				text-align: center;
			}
		}
		&.notice-page {
			background-color: $pointColor;
			color: $idleColor;
			h4 {
				margin-bottom: 25px;
				margin-top: 40px;
				font-weight: 800;
			}
			.notice-content {
				// font-weight: 500;
				.notice-msg {
					margin-bottom: 25px;
					h5 {
						margin-bottom: 0px;
						font-weight: 600;
					}
					h6 {
						margin-bottom: 0px;
						font-weight: 400;
						span {
							font-size: 12px;
							font-weight: 400;
						}
					}
					p {
						font-size: 14px;
						color: $idleColorOpa;
					}
					.btn {
						margin-top: 10px;
						// width: calc(50%-6px);
						width: -webkit-calc(50% - 6px); /* for Chrome, Safari */
						width:    -moz-calc(50% - 6px); /* for Firefox */
						width:         calc(50% - 6px); /* for IE */
						// border-width: 1px;
						&.btn-primary {
							color: $idleColor;
							border-color: $positiveColor;
							background-color: $positiveColor;
							margin-right: 3px;
						}
						&.btn-outline-primary {
							color: $idleColor;
							border-color: $idleColor;
							background-color: $pointColor;
							margin-left: 3px;
						}
					}
				}
			}
		}
	}
}
</style>
