<template>
	<div>
		<div class="profile-page">
			<div class="menus">
				<button class="btn" v-on:click="pages.leftType = LEFT_TYPE.Profile">Recent</button>
				<button class="btn" v-on:click="pages.leftType = LEFT_TYPE.ProfileGames">Games</button>
			</div>
			<!-- 	Recent : 최근 활동 기록		 -->
			<div class="recents" v-show="pages.leftType === LEFT_TYPE.Profile">
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true" overflow-x="hidden">
					<div class="log" v-for="(recent, index) in recents" :key="index">
						<div class="log-menu">
							<button class="btn btn-secondary dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="log-menu fas fa-ellipsis-v"></i></button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<!-- 	TODO : 내 글이면 수정|삭제, 타인 글이면 신고	 -->
								<a class="dropdown-item" href="#">수정</a>
								<a class="dropdown-item" href="#">삭제</a>
								<a class="dropdown-item" href="#">신고</a>
							</div>
						</div>
						<div class="log-content img-content" v-if="recent.post === 'img'" >
							<img v-if="recent.post === 'img'" class="post-img" :src="require(`@/assets/img/usefull/${recent.url}`)"/>
							19킬 유후~
						</div>
						<div class="log-content play-content" v-if="recent.post === 'play'" >
							<img  v-for="(friend, index) in recent.user" :key="index" class="friend-with-play" :src="require(`@/assets/img/profile/blackspirit.jpg`)"/>
							<p v-if="recent.post === 'play'"> {{recent.game}}를(을) {{recent.user.length}}인파티로 생성해서 게임함 (3hours)</p>
						</div>
					</div>
				</simplebar>
			</div>
			<!-- 	Games : 팔로윙한 게임들		 -->
			<div class="games" v-show="pages.leftType === LEFT_TYPE.ProfileGames">
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="game-category">
						<div class="card" v-for="game in followGames" :key="game.code">
							<img class="game-img" :src="require(`@/assets/img/games/${game.imgUrl}`)" v-on:click="`GameInfo({{game.code}})`"/>
							<div class="card-body">
								<p class="game-name">{{game.name}}</p>
								<p class="game-follower">{{game.follwerCount}}명의 팔로워</p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<!-- 	follwers : 팔로워들		 -->
			<div class="follwers" v-show="pages.leftType === LEFT_TYPE.ProfileFollwers">
				팔로워
			</div>
			<!-- 	follwing : 팔로윙들		 -->
			<div class="follwing" v-show="pages.leftType === LEFT_TYPE.ProfileFollowing">
				팔로윙
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
			],
			followGames: [
				{
					name: '배틀그라운드',
					follwerCount: 145,
					imgUrl: 'BATTLEGROUNDS.png',
					code: 0
				},
				{
					name: 'DeadByDaylight',
					follwerCount: 32,
					imgUrl: 'DeadByDaylight.png',
					code: 1
				},
				{
					name: 'League of Legend',
					follwerCount: 1394,
					imgUrl: 'LeagueOfLegend.png',
					code: 2
				},
				{
					name: 'TTF',
					follwerCount: 203,
					imgUrl: 'TTF.png',
					code: 3
				},
				{
					name: 'Overwatch',
					follwerCount: 131,
					imgUrl: 'overwatch.png',
					code: 4
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
.simplebar-scrollbar::before {
	background-image: red;
}
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
		position: relative;
		margin-left: -40px;
		margin-right: -40px;
		.scrolling-wrapper {
			height: 538px;
			padding-right: 70px;
			padding-left: 60px;
			padding-bottom: 100px;
			-webkit-overflow-scrolling: touch;
			.log {
				padding: 10px;
				.log-menu {
					margin-top: -5px;
					right: 30px;
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
				.log-content {
					border-radius: 15px;
					// background-color: $halfColorHover;
					// background: url(`https://gapaclient.run-us-west2.goorm.io/img/tempRecentLog_0.742c9107.png`) no-repeat center 40px; 
					// -webkit-background-size: cover;
					// -moz-background-size: cover;
					// -o-background-size: cover;
					// background-size: cover;
					&.img-content {
						text-align: center;
						.post-img {
							width: 100%;
							margin-bottom: 10px;
							border-radius: 10px;
						}
					}
					&.play-content {
						font-size: 16px;
						font-weight: 500;
						.friend-with-play {
							width: 40px;
							margin-right: 10px;
							margin-bottom: 5px;
							border-radius: 20px;
							cursor: pointer;
							opacity: 0.9;
							&:hover {
								opacity: 1;
							}
						}
					}
				} 
			}
		}
	}
	.games {
		font-weight: 400;
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
}
</style>
