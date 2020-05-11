<template>
  <div>
	<div class="container">
		<div class="content row">
			<div class="left-content col-md-8">
				<!----------------------- start of left-content ----------------------->
				<!-- 평상시 화면 (왼쪽) -->
				<!-- components / left-component / Idle.vue -->
				<leftIdle v-show="pages.name === 'Main'" :pages="pages" :leftType="leftType" :rightType="rightType" @GameInfo="GameInfo"></leftIdle>
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
				<!-- 채팅 화면 (왼쪽) -->
				<!-- components / left-component / Chat.vue -->
				<leftChat v-show="pages.leftType === leftType.Chat" :pages="pages" :leftType="leftType" :rightType="rightType" @SearchUser="SearchUser"></leftChat>
				<!-- 프로필 화면 (왼쪽) -->
				<!-- components / left-component / Profile.vue -->
				<leftProfile v-show="pages.leftType === leftType.Timeline" :pages="pages" :leftType="leftType" :rightType="rightType"></leftProfile>
				<!------------------------ end of left-content ------------------------>
			</div>
			
			
			<div class="right-content col-md-4">
				<!----------------------- start of right-content ----------------------->
				<!-- 평상시 화면 (오른쪽)-->
				<!-- components / right-component / Idle.vue -->
				<rightIdle v-show="pages.name === 'Main' && pages.rightType !== rightType.Notice" :pages="pages" :leftType="leftType" :rightType="rightType" @SearchUser="SearchUser" @CreateRoom="CreateRoom"></rightIdle>
				<!-- 팀원 검색 화면 (오른쪽)-->
				<div class="right-content search-page col-md-4" v-show="pages.rightType === rightType.SearchUser">
				</div>
				<!-- 팀원 꾸리기 화면 : 채팅 (오른쪽)-->
				<!-- components / right-component / Chat.vue -->
				<rightChat v-show="pages.rightType === rightType.UserList" :pages="pages" :leftType="leftType" :rightType="rightType" @SearchUser="SearchUser" @OutRoom="OutRoom"></rightChat>
				<!-- 프로필 화면 (오른쪽)-->
				<!-- components / right-component / Profile.vue -->
				<rightProfile v-show="pages.rightType === rightType.Profile" :pages="pages" :leftType="leftType" :rightType="rightType" @SearchUser="SearchUser" @OutRoom="OutRoom"></rightProfile>
				<!-- 알림 화면 (오른쪽) -->
				<!-- components / right-component / Notice.vue -->
				<rightNotice v-show="pages.rightType === rightType.Notice" :pages="pages" :leftType="leftType" :rightType="rightType" @OutRoom="OutRoom"></rightNotice>
				<!------------------------ end of right-content ------------------------>
			</div>
		</div>
	</div>
  </div>
</template>

<script>	
import leftIdle from '@/components/left-component/Idle'
import leftProfile from '@/components/left-component/Profile'
import leftChat from '@/components/left-component/Chat'

import rightIdle from '@/components/right-component/Idle'
import rightProfile from '@/components/right-component/Profile'
import rightNotice from '@/components/right-component/Notice'
import rightChat from '@/components/right-component/Chat'

export default {
	data () {
		return {
			leftType: {
				Explore: 0,
				Games: 1,
				Chat: 2,
				UserList: 3,
				Timeline: 4,
				Search: 5,
				GameInfo: 6
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
			// 	{ name: 'Main', leftType: leftType.Explore, rightType: rightType.Idle },
			// 	{ name: 'Chat', leftType: leftType.Chat, rightType: rightType.UserList },
			// 	{ name: 'Profile', leftType: leftType.Chat, rightType: rightType.UserList }
			// ],
			pages: {
				name: 'Main',
				leftType: 0,
				rightType: 0
			}
		}
    },
	methods:{
		// http://www.devkuma.com/books/pages/1175
		init: function() {
			this.pages.leftType = this.leftType.Explore;
			this.pages.rightType = this.rightType.Idle;
		},
		SearchUser : function() {
			this.pages.name = 'Profile';
			this.pages.leftType = this.leftType.Timeline;
			this.pages.rightType = this.rightType.Profile;
		},
		OutRoom: function() {
			this.pages.name = 'Main';
			this.init();
		},
		JoinRoom: function() {
			this.pages.name = 'Chat';
			this.pages.leftType = this.leftType.Chat;
			this.pages.rightType = this.rightType.UserList;
		},
		CreateRoom: function() {
			this.JoinRoom();
		},
		GameInfo: function(gameTag) {
			this.maxMember = gameTag;  // 지워도 되는거, 만들어 놨는데 안쓰면 버그 나서 아무렇게나 쓴거
			this.maxMember = 4;
			this.pages.leftType = this.leftType.GameInfo;
			this.pages.rightType = this.rightType.GameInfo;
		}
	},
	mounted() {
		this.init();
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

<style lang="scss" scoped>
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
	font-family: 'Noto Sans KR', sans-serif;
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
