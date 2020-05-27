<template>
  <div>
	<p>{{ pageStack.data }}</p>
	<p>{{ pages }}</p>
	<div class="container">
		<div class="content row">
			<div class="left-content col-md-8">
				<!----------------------- start of left-content ----------------------->
				<!-- 평상시 화면 (왼쪽) -->
				<!-- components / left-component / Idle.vue -->
				<leftIdle v-show="pages.name === 'Main'" :pages="pages" @goMainPage="goMainPage" @GameInfo="GameInfo" @JoinRoom="JoinRoom" @PagePush="PagePush" @PagePop="PagePop"></leftIdle>
				<!-- 팀원 찾기 화면 (왼쪽)-->
				<div class="left-content search-page col-md-8" v-show="pages.leftType === LEFT_TYPE.Search">
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
				<!-- 채팅 화면 (왼쪽) -->
				<!-- components / left-component / Chat.vue -->
				<leftChat v-show="pages.leftType === LEFT_TYPE.Chat" :pages="pages" @SearchUser="SearchUser" @PagePush="PagePush" @PagePop="PagePop"></leftChat>
				<!-- 프로필 화면 (왼쪽) -->
				<!-- components / left-component / Profile.vue -->
				<leftProfile v-show="pages.leftType === LEFT_TYPE.Timeline" :pages="pages" @PagePush="PagePush" @PagePop="PagePop"></leftProfile>
				<!------------------------ end of left-content ------------------------>
			</div>
			
			
			<div class="right-content col-md-4">
				<!----------------------- start of right-content ----------------------->
				<!-- 평상시 화면 (오른쪽)-->
				<!-- components / right-component / Idle.vue -->
				<rightIdle v-show="pages.name === 'Main' && pages.rightType !== RIGHT_TYPE.Notice" :pages="pages" @SearchUser="SearchUser" @CreateRoom="CreateRoom" @PagePush="PagePush" @PagePop="PagePop"></rightIdle>
				<!-- 팀원 검색 화면 (오른쪽)-->
				<div class="right-content search-page col-md-4" v-show="pages.rightType === RIGHT_TYPE.SearchUser">
				</div>
				<!-- 팀원 꾸리기 화면 : 채팅 (오른쪽)-->
				<!-- components / right-component / Chat.vue -->
				<rightChat v-show="pages.rightType === RIGHT_TYPE.UserList" :pages="pages" @SearchUser="SearchUser" @OutRoom="OutRoom" @PagePush="PagePush" @PagePop="PagePop"></rightChat>
				<!-- 프로필 화면 (오른쪽)-->
				<!-- components / right-component / Profile.vue -->
				<rightProfile v-show="pages.rightType === RIGHT_TYPE.Profile" :pages="pages" @SearchUser="SearchUser" @OutRoom="OutRoom" @PagePush="PagePush" @PagePop="PagePop"></rightProfile>
				<!-- 알림 화면 (오른쪽) -->
				<!-- components / right-component / Notice.vue -->
				<rightNotice v-show="pages.rightType === RIGHT_TYPE.Notice" :pages="pages" @OutRoom="OutRoom" @PagePush="PagePush" @PagePopAndMove="PagePopAndMove"></rightNotice>
				<!------------------------ end of right-content ------------------------>
			</div>
		</div>
	</div>
  </div>
</template>

<script>	
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'

import leftIdle from '@/components/left-component/Idle'
import leftProfile from '@/components/left-component/Profile'
import leftChat from '@/components/left-component/Chat'

import rightIdle from '@/components/right-component/Idle'
import rightProfile from '@/components/right-component/Profile'
import rightNotice from '@/components/right-component/Notice'
import rightChat from '@/components/right-component/Chat'

class Stack {
	constructor() {
		this.data = [];
	}
	
	push(page) {
		this.data.push(page);
	}
	
	pop() {
		return this.data.pop();
	}
	
	clear() {
		this.data = [];
	}
}

export default {
	data () {
		return {
			pages: {
				name: 'Main',
				leftType: 0,
				rightType: 0
			},
			pageStack : new Stack(),
			LEFT_TYPE : new LEFT_TYPE(),
			RIGHT_TYPE : new RIGHT_TYPE()
		}
    },
	methods:{
		// http://www.devkuma.com/books/pages/1175
		init: function() {
			this.pages.name = 'Main';
			this.pages.leftType = this.LEFT_TYPE.Explore;
			this.pages.rightType = this.RIGHT_TYPE.Idle;
			this.pageStack.clear();
		},
		goMainPage: function() {
			this.init();
			// this.pageStack.push(this.pages);
		},
		SearchUser : function() {
			this.PagePush(this.pages);
			this.pages.name = 'Profile';
			this.pages.leftType = this.LEFT_TYPE.Timeline;
			this.pages.rightType = this.RIGHT_TYPE.Profile;
		},
		OutRoom: function() {
			this.PagePopAndMove();
		},
		JoinRoom: function() {
			this.PagePush(this.pages);
			this.pages.name = 'Chat';
			this.pages.leftType = this.LEFT_TYPE.Chat;
			this.pages.rightType = this.RIGHT_TYPE.UserList;
		},
		CreateRoom: function() {
			this.JoinRoom();
		},
		GameInfo: function(gameTag) {  // eslint-disable-line no-unused-vars
			// 왼쪽이 GameRooms 와 GameUsers 상태일때 우측은 계속 GameInfo 상태임
			//	|----------------------------------------------|
			//	|  GameRooms (게임 방 목록)   	|				|
			//	|  Gameusers (게임 유저 목록)		|	GameInfo	|
			//	|______________________________|_______________|
			this.PagePush(this.pages);
			this.pages.leftType = this.LEFT_TYPE.GameRooms;
			this.pages.rightType = this.RIGHT_TYPE.GameInfo;
		},
		PagePush: function(page) {
			// ! 주의 : PagePush 를 사용할떄 주의 해야 할점
			// 		- leftType|rightType을 변경하기 전에 호출해야 합니다.
			//		- emit을 통해 PagePush를 통해 Stack에 넣고 그 이후 leftType|rightType을 변경해야 합니다.
			this.pageStack.push({ name : page.name, leftType: page.leftType, rightType: page.rightType });
			console.log(this.pageStack.data);
		},
		PagePop: function() {
			return this.pageStack.pop();
		},
		PagePopAndMove: function() {
			this.pages = this.PagePop();
		}
	},
	mounted() {
		this.init();
		// this.pageStack.push(this.pages);
	},
	components: {
		leftIdle,
		leftProfile,
		leftChat,
		rightIdle,
		rightProfile,
		rightNotice,
		rightChat
	}
}
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
// 폰트 생김새 : https://fonts.google.com/specimen/Lilita+One
// @import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
// 폰트 생김새 : https://fonts.google.com/specimen/Baloo+Bhai ** 한글은 눈갱 **
// @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
// 폰트 생김새 : http://bitly.kr/gXMccr3 ** 한글은 눈갱 **
// @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

// @font-face { font-family: 'Godo'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff'); }
// @font-face { font-family: 'Godo'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff'); } .godo * { font-family: 'Godo', sans-serif; }

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
	// background-color: #8458B3;
	.left-content {
		padding: 40px 40px 0px 40px;
		border-radius: 50px;
		overflow: hidden;
		&.search-page {
			background-color: white;
			&:not(.bg) {
				z-index: 1;
			}
			.bg {
				position: absolute;
				background: url('~@/assets/img/usefull/gapa_icon.png') no-repeat right 0px; 
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
	}
	.right-content {
		padding: 25px;
		// border-radius: 50px 0px 0px 50px;
		border-radius: 30px 30px 30px 30px;
		background-color: $themeColor;
		&.search-page {
		}
	}
}
</style>
