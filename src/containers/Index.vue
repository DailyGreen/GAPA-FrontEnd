<template>
  <div>
	<!-- <p>{{ pageStack.data }}</p>
	<p>{{ pages }}</p> -->
	<div class="container">
		<div class="content row">
			<!---------------------------------- start of left-content ---------------------------------->
			<div class="left-content col-md-8">
				<!-- 평상시 화면 (왼쪽) -->
				<leftIdle v-if="LEFT_TYPE.isIdleComponent(pages.leftType)" :pages="pages" 
						  @goMainPage="goMainPage" @GameInfo="GameInfo" @JoinRoom="JoinRoom" @PagePush="PagePush" @PagePop="PagePop"></leftIdle>
				<!-- 채팅 화면 (왼쪽) -->
				<leftChat v-else-if="pages.leftType === LEFT_TYPE.Chat" :pages="pages" 
						  @SearchUser="SearchUser" @PagePush="PagePush" @PagePop="PagePop"></leftChat>
				<!-- 채팅 화면에서 유저 찾기 -->
				<leftSearchUser v-else-if="pages.leftType === LEFT_TYPE.SearchUser" :pages="pages"
								@SearchUser="SearchUser" @PagePush="PagePush" @PagePop="PagePop"></leftSearchUser>
				<!-- 프로필 화면 (왼쪽) -->
				<leftProfile v-else-if="LEFT_TYPE.isProfileComponent(pages.leftType)" :pages="pages" 
							 @PagePush="PagePush" @PagePop="PagePop"></leftProfile>
				<!-- 프로필 업데이트 화면 (왼쪽) -->
				<leftProfileUpdate v-else-if="pages.leftType === LEFT_TYPE.ProfileUpdate" :pages="pages" 
							 @PagePush="PagePush" @PagePop="PagePop"></leftProfileUpdate>
				<!-- 게시글 작성 화면 (왼쪽) -->
				<leftWrite v-else-if="pages.leftType === LEFT_TYPE.Write" :pages="pages" 
						   @PagePush="PagePush" @PagePop="PagePop"></leftWrite>
				<!-- 방 생성 화면 (왼쪽) -->
				<leftCreateRoom v-else-if="pages.leftType === LEFT_TYPE.CreateRoom" :pages="pages" 
						   @PagePush="PagePush" @PagePop="PagePop"></leftCreateRoom>
			</div>
			<!----------------------------------- end of left-content ----------------------------------->
			
			
			<!---------------------------------- start of right-content ---------------------------------->
			<div class="right-content col-md-4" :class="{notice : pages.rightType === RIGHT_TYPE.Notice}">
				<!-- 평상시 화면 (오른쪽) -->
				<rightIdle v-if="RIGHT_TYPE.isIdleComponent(pages.rightType)" :pages="pages" :gameTag="gameTag"
						   @SearchUser="SearchUser" @CreateRoom="CreateRoom" @PagePush="PagePush" @PagePop="PagePop"></rightIdle>
				<!-- 알림 화면 (오른쪽) -->
				<rightNotice v-else-if="pages.rightType === RIGHT_TYPE.Notice" :pages="pages" 
							 @OutRoom="OutRoom" @PagePush="PagePush" @PagePopAndMove="PagePopAndMove"></rightNotice>
				<!-- 팀원 검색 화면 (오른쪽) -->
				<!-- <div class="right-content search-page col-md-4" v-show="pages.rightType === RIGHT_TYPE.SearchUser">
				</div> -->
				<!-- 팀원 꾸리기 화면 : 채팅 (오른쪽) -->
				<rightChat v-else-if="pages.rightType === RIGHT_TYPE.UserList" :pages="pages" 
						   @SearchUser="SearchUser" @OutRoom="OutRoom" @PagePush="PagePush" @PagePop="PagePop"></rightChat>
				<!-- 프로필 화면 (오른쪽) -->
				<rightProfile v-else-if="pages.rightType === RIGHT_TYPE.Profile" :pages="pages" :user_email="whoProfileEmail"
							  @SearchUser="SearchUser" @OutRoom="OutRoom" @PagePush="PagePush" @PagePop="PagePop"></rightProfile>
				<!-- 게시글 작성 화면 (오른쪽) -->
				<rightWrite v-else-if="pages.rightType === RIGHT_TYPE.Write" :pages="pages" 
							@PagePush="PagePush" @PagePop="PagePop" @PagePopAndMove="PagePopAndMove"></rightWrite>
				<!-- 방 생성 화면 (오른쪽) -->
				<rightCreateRoom v-else-if="pages.rightType === RIGHT_TYPE.CreateRoom" :pages="pages" 
						   @PagePush="PagePush" @PagePopAndMove="PagePopAndMove"></rightCreateRoom>
			</div>
			<!----------------------------------- end of right-content ----------------------------------->
		</div>
	</div>
  </div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'

import leftIdle from '@/components/left-component/Idle'
import leftProfile from '@/components/left-component/Profile'
import leftProfileUpdate from '@/components/left-component/ProfileUpdate'
import leftChat from '@/components/left-component/Chat'
import leftWrite from '@/components/left-component/Write'
import leftSearchUser from '@/components/left-component/SearchUser'
import leftCreateRoom from '@/components/left-component/CreateRoom'
	
import rightIdle from '@/components/right-component/Idle'
import rightProfile from '@/components/right-component/Profile'
import rightNotice from '@/components/right-component/Notice'
import rightChat from '@/components/right-component/Chat'
import rightWrite from '@/components/right-component/Write'
import rightCreateRoom from '@/components/right-component/CreateRoom'

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
				leftType: 0,
				rightType: 0
			},
			pageStack: new Stack(),
			LEFT_TYPE: new LEFT_TYPE(),
			RIGHT_TYPE: new RIGHT_TYPE(),
			gameTag: -1,
			whoProfileEmail: ''
		}
    },
	methods:{
		// http://www.devkuma.com/books/pages/1175
		init: function() {
			this.pages.leftType = this.LEFT_TYPE.Explore;
			this.pages.rightType = this.RIGHT_TYPE.Idle;
			this.pageStack.clear();
		},
		goMainPage: function() {
			this.init();
			// this.pageStack.push(this.pages);
		},
		SearchUser : function() {
			this.whoProfileEmail = 'bb@bb'
			// this.bus.$emit('GetProfileInfo', 'bb@bb');
			// this.$refs.profileInfo.GetProfileInfo('bb@bb');
			this.PagePush(this.pages);
			this.pages.leftType = this.LEFT_TYPE.Profile;
			this.pages.rightType = this.RIGHT_TYPE.Profile;
		},
		OutRoom: function() {
			this.PagePopAndMove();
		},
		JoinRoom: function() {
			this.PagePush(this.pages);
			this.pages.leftType = this.LEFT_TYPE.Chat;
			this.pages.rightType = this.RIGHT_TYPE.UserList;
		},
		CreateRoom: function() {
			this.JoinRoom();
		},
		GameInfo: function(gameTag) {  // eslint-disable-line no-unused-vars
			// 왼쪽이 GameRooms 와 GameUsers 상태일때 우측은 계속 GameInfo 상태임
			//	|------------------------------------------------------|
			//	|     GameRooms (게임 방 목록)      |		GameInfo	|
			//	|     Gameusers (게임 유저 목록)    |		(게임 정보)		|
			//	|_________________________________|____________________|
			this.gameTag = parseInt(gameTag);
			this.PagePush(this.pages);
			this.pages.leftType = this.LEFT_TYPE.GameRooms;
			this.pages.rightType = this.RIGHT_TYPE.GameInfo;
		},
		PagePush: function(page) {
			// ! 주의 : PagePush 를 사용할떄 주의 해야 할점
			// 		- leftType|rightType을 변경하기 전에 호출해야 합니다.
			//		- emit을 통해 PagePush를 통해 Stack에 넣고 그 이후 leftType|rightType을 변경해야 합니다.
			this.pageStack.push({ name : page.name, leftType: page.leftType, rightType: page.rightType });
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
		leftProfileUpdate,
		leftChat,
		leftWrite,
		leftSearchUser,
		leftCreateRoom,
		rightIdle,
		rightProfile,
		rightNotice,
		rightChat,
		rightWrite,
		rightCreateRoom
	}
}
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/container.scss";
	
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
	background-color: $blackColor;
	&.notice {
		background-color: $themeColor;
	}
	&.search-page {
	}
}
</style>
