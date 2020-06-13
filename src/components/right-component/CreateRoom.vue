<template>
	<div class="create-room-page">
		<button class="btn btn-light" v-on:click="PagePopAndMove"><i class="fas fa-sign-out-alt"></i></button>
		<div class="game-profile">			
			<div class="card game-card">
				<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="ChangeRightType(RIGHT_TYPE.GameInfo)"/>
			</div>
			<h1 class="game-title">BATTLEGROUND</h1>
			<div class="game-info">
				<a href="">13 <span> 명의 팔로워</span></a>
				<a href="">2 <span> 개의 방</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
export default {
	props: {
		pages: {
			name: {
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
	methods:{
		PagePopAndMove : function() {
			this.$emit('PagePopAndMove');
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
	
@import "@/assets/css/game.scss";
@import "@/assets/css/card.scss";
	
.create-room-page {
	.game-profile {
		margin-top: 102px;
		text-align: center;
	}
}
</style>
