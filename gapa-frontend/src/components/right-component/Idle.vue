<template>
	<div>
		<div class="idle-page">
			<div class="state-nav">
				<!-- 상태 네비 공간으로 프로필이나 알린 등등이 들어갈 것임 -->
				<img class="profile-img sm-size float-right" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
				<button class="float-right" v-on:click="ChangeRightType(RIGHT_TYPE.Notice)"><i class="far fa-bell"></i></button>
				<button class="float-right" v-on:click="ChangeRightType(RIGHT_TYPE.Notice)"><i class="fas fa-search"></i></button>
			</div>
			<div class="game-profile" v-show="pages.rightType === RIGHT_TYPE.GameInfo">
				
				<div class="card game-card">
					<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="ChangeRightType(RIGHT_TYPE.GameInfo)"/>
				</div>
				<!-- <img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="ChangeRightType(RIGHT_TYPE.GameInfo)"/> -->
				<h1 class="game-title">BATTLEGROUND</h1>
				<div class="game-info">
					<a href="">13 <span> 명의 팔로워</span></a>
					<a href="">2 <span> 개의 방</span></a>
				</div>
				<button class="btn negative icon-btn follow" v-if="isFollowingGame === false" v-on:click="isFollowingGame = !isFollowingGame"><i class="far fa-heart"></i> 팔로우</button>
				<button class="btn positive icon-btn following" v-if="isFollowingGame === true" v-on:click="isFollowingGame = !isFollowingGame"><i class="fas fa-heart"></i> 팔로윙</button>
				<br/>
				<button class="btn primary">초대 대기하기</button>
				<button class="btn primary" v-on:click="PagePush('CreateRoom', LEFT_TYPE.CreateRoom, RIGHT_TYPE.CreateRoom)">팀 꾸리기</button>
			</div>
			<div class="menu-nav" v-show="pages.rightType === RIGHT_TYPE.Idle">
				<br/><br/><br/><br/><br/><br/>
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
	</div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
export default {
	props: {
		pages: {
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
			isFollowingGame: false
		}
	},
	methods:{
		PagePush: function(name, leftType, rightType) {
			this.$emit('PagePush', this.pages);
			this.pages.leftType = leftType;
			this.pages.rightType = rightType;
		},
		ChangeRightType: function(rightType) {
			this.$emit('PagePush', this.pages);
			this.pages.rightType = rightType;
		},
		SearchUser : function() {
			this.$emit('SearchUser');
		},
		CreateRoom : function() {
			this.$emit('CreateRoom');
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/profile.scss";
@import "@/assets/css/button.scss";
@import "@/assets/css/game.scss";

.idle-page {
	.state-nav {
		height: 40px;
		display: block;
		button {
			height: 40px;
			line-height: 40px;
			margin-right: 20px;
			border: 0px;
			background-color: $blackColor;
			color: white;
			cursor: pointer;
			i {
				font-size: 24px;
			}
		}
	}
	.game-profile {
		margin-top: 30px;
		text-align: center;
		.game-title {
			color: white;
			font-size: 24px;
			font-weight: 700;
		}
		.game-info {
			a {
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
		// .btn {
		// 	padding: 8px 15px 8px 15px;
		// 	margin-top: 8px;
		// 	border: 0px;
		// 	font-weight: 400;
		// 	i {
		// 		font-size: 12px;
		// 		margin-right: 5px;
		// 	}
		// 	// display: block;
		// 	&.follow {
		// 		background-color: $positiveColor;
		// 	}
		// 	&.following {
		// 		background-color: $pointColor;
		// 	}
		// }
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
			background-color: $themeColor;
			padding: 0px;
			.card {
				background-color: $themeColor;
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
	
</style>
