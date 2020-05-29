<template>
	<div>
		<div class="profile-page">
			<div class="menus">
				<button class="btn" v-on:click="menuType = MENU_TYPE.RECENT">Recent</button>
				<button class="btn" v-on:click="menuType = MENU_TYPE.GAMES">Games</button>
			</div>
			<!-- 	Recent : 최근 활동 기록		 -->
			<div class="recents" v-show="menuType === MENU_TYPE.RECENT">
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="log" v-for="recent in recents" :key="recent">
						<div class="log-menu">
							<button class="btn btn-secondary dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="log-menu fas fa-ellipsis-v"></i></button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<!-- 	TODO : 내 글이면 수정|삭제, 타인 글이면 신고	 -->
								<a class="dropdown-item" href="#">수정</a>
								<a class="dropdown-item" href="#">삭제</a>
								<a class="dropdown-item" href="#">신고</a>
							</div>
						</div>
						<img v-if="recent.post === 'img'" class="post-img" :src="require(`@/assets/img/usefull/${recent.url}`)"/>
						<p v-if="recent.post === 'play'"> {{recent.game}}를(을) {{recent.user.length}}인파티로 생성해서 게임함 (3hours)</p>
					</div>
				</simplebar>
			</div>
			<!-- 	Games : 팔로윙한 게임들		 -->
			<div class="games" v-show="menuType === MENU_TYPE.GAMES">
				<img class="game-card" :src="require(`@/assets/img/games/LeagueOfLegend.png`)"/>
				<img class="game-card" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)"/>
			</div>
		</div>
	</div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
import simplebar from 'simplebar-vue'
// import 'simplebar/dist/simplebar.min.css'
	
export default {
	props: {
		pages: {
			names: {
				type: String,
				default: ''
			},
			leftType: {
				type: Number,
				default: -1
			},
			rightType: {
				type: Number,
				default: -1
			}
		}
	},
	data () {
		return {
			LEFT_TYPE : new LEFT_TYPE(),
			RIGHT_TYPE : new RIGHT_TYPE(),
			MENU_TYPE: {
				RECENT: 'Recent',
				GAMES: 'Games'
			},
			menuType: 'Recent',
			recents: [
				{
					post: 'img',
					url: 'tempRecentLog_0.png',
					date: '2020-05-29'
				},
				{
					post: 'play',
					user: ['a', 'b', 'c', 'd', 'e'],
					game: '리그오브레전드',
					date: '2020-05-29'
				},
				{
					post: 'play',
					user: ['a', 'b'],
					game: '배틀그라운드',
					date: '2020-05-28'
				},
				
			]
		}
	},
	components: {
		simplebar
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
	
.profile-page {
	color: black;
	font-size: 14px;
	.menus {
		margin-bottom: 30px;
		.btn {
			font-size: 20px;
			font-weight: 700;
			padding: 0px;
			margin-right: 24px;
		}
	}
	.recents {
		.scrolling-wrapper {
			height: 538px;
			padding-right: 30px;
			padding-left: 20px;
			padding-bottom: 100px;
			-webkit-overflow-scrolling: touch;
			.log {
				padding: 10px;
				.log-menu {
					margin-top: -5px;
					right: 5px;
					position: absolute;
					cursor: pointer;
					.dropdown-btn {
						border: 0px;
						padding: 0px;
						color: black;
						background-color: white;
					}
					.dropdown-menu {
						// 	transform: translate3d 의 이유는 dropdown을 펼치고 스크롤을 하게되면 스크롤이 따라가게 되는 bootstrap 설정때문에 important로 변경시킴
						transform: translate3d(-60px, 12px, 0px)!important;
						min-width: 60px !important;
						margin-top: 20px;
						.dropdown-item {
							padding-left: 15px;
							padding-right: 15px;
						}
					}
				}
				.post-img {
					width: 100%;
					margin-bottom: 10px;
					border-radius: 10px;
				}
			}
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
</style>
