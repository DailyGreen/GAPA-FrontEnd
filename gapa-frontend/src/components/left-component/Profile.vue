<template>
	<div>
		<div class="profile-page">
			<h3>Games<span> ></span></h3>
			<div class="games">
				<img class="game-card" :src="require(`@/assets/img/games/LeagueOfLegend.png`)"/>
				<img class="game-card" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)"/>
			</div>
			<h3>Recent<span> ></span></h3>
			<div class="recents">
				<p> 리그오브레전드를(을) 5인파티로 생성해서 게임함 (3hours)</p>
				<p> 배틀그라운드(을) 4인 스쿼드 파티로 생성해서 게임함 (2days)</p>
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
			RIGHT_TYPE : new RIGHT_TYPE()
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
</style>
