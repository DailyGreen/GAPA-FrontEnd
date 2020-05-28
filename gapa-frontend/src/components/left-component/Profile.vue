<template>
	<div>
		<div class="profile-page">
			<div class="menus">
				<button class="btn" v-on:click="menuType = MENU_TYPE.RECENT">Recent</button>
				<button class="btn" v-on:click="menuType = MENU_TYPE.GAMES">Games</button>
			</div>
			<!-- 	Recent : 최근 활동 기록		 -->
			<div class="recents" v-show="menuType === MENU_TYPE.RECENT">
				<img class="post-img" :src="require(`@/assets/img/usefull/tempRecentLog_0.png`)"/>
				<p> 리그오브레전드를(을) 5인파티로 생성해서 게임함 (3hours)</p>
				<p> 배틀그라운드(을) 4인 스쿼드 파티로 생성해서 게임함 (2days)</p>
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
			menuType: 'Recent'
		}
	},
	components: {
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
		.post-img {
			width: 100%;
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
