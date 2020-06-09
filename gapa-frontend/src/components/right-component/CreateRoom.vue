<template>
	<div class="create-room-page">
		<button class="btn btn-light" v-on:click="PagePopAndMove"><i class="fas fa-sign-out-alt"></i></button>
		<div class="game-profile">
			<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="ChangeRightType(RIGHT_TYPE.GameInfo)"/>
			<h1 class="game-title">BATTLEGROUND</h1>
			<div class="game-info">
				<p>13 <span> 명의 대기자</span></p>
				<p>2 <span> 개의 방</span></p>
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
	
	
.create-room-page {
	.game-profile {
		margin-top: 30px;
		text-align: center;
		.game-img {
			min-width: 138px;
			min-height: 183px;
			max-width: 138px;
			max-height: 183px;
			border-radius: 10px;
			margin-bottom: 8px;
		}
		.game-title {
			color: white;
			font-size: 24px;
			font-weight: 700;
		}
		.game-info {
			p {
				display: inline;
				margin-left: 5px;
				margin-right: 5px;
				margin-bottom: 8px;
				color: white;
				font-weight: 500;
				text-decoration: none;
				span {
					color: $whiteColorOpa;
					font-size: 12px;
					font-weight: 400;
				}
			}
		}
	}
}
</style>
