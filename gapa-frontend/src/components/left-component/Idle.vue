<template>
	<div>
		<div class="idle-page">
			<img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)" v-on:click="goMainPage()"/>
			<div class="menu">
				<Button class="btn" v-on:click="goMainPage()">홈</Button>
				<Button class="btn" v-on:click="ChangeLeftType(LEFT_TYPE.Games)">게임 목록</Button>
			</div>
			<!-- 	검색어창 비활성화	 -->
			<!-- <div class="search">
				<input class="search-input" type="text" placeholder="리그오브레전드">
			</div> -->
			<div class="explore" v-show="pages.leftType === LEFT_TYPE.Explore">
				<div class="row columns">
					<div class="col-md-4">
						<div class="card card-room">
							<div class="card-head">
								<img :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" class="card-img-top">
							</div>
							<div class="card-body" style="background-color:#edbe53">
								<h5 class="card-title">배그 랭 돌릴 4인팟 구합니다</h5>
								<p class="card-text">(1 / 4)</p>
							</div>
						</div>
						<div class="card card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
								<p class="user-state">리그오브레전드 대기중</p>
							</blockquote>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
								<p class="user-state">리그오브레전드 대기중</p>
							</blockquote>
						</div>
						<div class="card card-room">
							<div class="card-head">
								<img :src="require(`@/assets/img/games/TTF.png`)" class="card-img-top">
							</div>
							<div class="card-body" style="background-color:#fb7c3a">
								<h5 class="card-title">TFT 랭 돌릴 4인팟 구합니다</h5>
								<p class="card-text">(1 / 4)</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card card-room">
							<div class="card-head">
								<img :src="require(`@/assets/img/games/TTF.png`)" class="card-img-top">
							</div>
							<div class="card-body" style="background-color:#fb7c3a">
								<h5 class="card-title">TFT 랭 돌릴 4인팟 구합니다</h5>
								<p class="card-text">(1 / 4)</p>
							</div>
						</div>
						<div class="card card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/profileImg.png`)" class="user-profile">
								<p class="user-state">배틀그라운드 대기중</p>
							</blockquote>
						</div>
					</div>
				</div>
				<button class="btn btn-primary refresh-btn mx-auto d-block"><i class="fas fa-sync-alt"></i> 새로고침</button>
			</div>
			<div class="games" v-show="pages.leftType === LEFT_TYPE.Games">
				<!-- <h2>게임 카테고리</h2> -->
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="game-category">
						<div class="card" v-for="game in gameCategory" :key="game.code">
							<img class="game-img" :src="require(`@/assets/img/games/${game.imgUrl}`)" v-on:click="GameInfo(`${game.code}`)"/>
							<div class="card-body">
								<p class="game-name">{{game.name}}</p>
								<p class="game-follower">{{game.follwerCount}}명의 팔로워</p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<div class="list" v-show="pages.leftType === LEFT_TYPE.GameRooms || pages.leftType === LEFT_TYPE.GameUsers">
				<button class="btn" v-on:click="pages.leftType = LEFT_TYPE.GameRooms">게임 방</button>
				<button class="btn" v-on:click="pages.leftType = LEFT_TYPE.GameUsers">대기 유저</button>
				<simplebar class="scrolling-wrapper list-rooms" data-simplebar-auto-hide="true" v-show="pages.leftType === LEFT_TYPE.GameRooms">
					<div class="list-content">
						<div class="card almost-full" v-on:click="JoinRoom(0)">
							<div class="card-head">
								<h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
							</div>
							<blockquote class="blockquote mb-0 card-body float-right">
								<p class="">( 3 / 4 )</p>
							</blockquote>
						</div>
						<div class="card half">
							<div class="card-head">
								<h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
							</div>
							<blockquote class="blockquote mb-0 card-body float-right">
								<p class="">( 2 / 4 )</p>
							</blockquote>
						</div>
						<div class="card room" v-for="i in 10" :key="i">
							<div class="card-head">
								<h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
							</div>
							<blockquote class="blockquote mb-0 card-body float-right">
								<p class="">( 1 / 4 )</p>
							</blockquote>
						</div>
					</div>
				</simplebar>
				<simplebar class="scrolling-wrapper list-users" data-simplebar-auto-hide="true" v-show="pages.leftType === LEFT_TYPE.GameUsers">
					<div class="list-content">
						<div class="card" v-for="i in 40" :key="i">
							<img :src="require(`@/assets/img/profile/profileImg.png`)" alt="profile-image" class="profile"/>
							<div class="card-content">
								<h2>닉네임</h2>
								<p>14 Followers</p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
		</div>
	</div>
</template>

<script>
	
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
	
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
			gameCategory: [
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
			],
			blocks: [ 'a','a','a','a']
		}
	},
	methods:{
		goMainPage : function() {
			this.$emit('goMainPage');
		},
		JoinRoom : function(roomIdx) {	// eslint-disable-line no-unused-vars
			this.$emit('JoinRoom');
		},
		ChangeLeftType: function(leftType) {
			this.$emit('PagePush', this.pages);
			this.pages.leftType = leftType
		},
		GameInfo : function(gameNum) {
			console.log("Game Info Call")
			this.$emit('GameInfo', gameNum);
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
	
	
.idle-page {
	height: 100%;
	.title-img {
		width: 40px;
		position: relative;
	}
	.menu {
		margin-left: 10px;
		display: inline;
		.btn {
			margin-left: 10px;
			&:hover {
				color: $pointColor;
			}
		}
	}
	.sprofile {
		background-color: black;
		border-radius: 50px;
		opacity: 0.5;
		float: right;
		height: 6.5%;
	}
	.search {
		font-size: 30px;
		color: black;
		.search-input {
			width: 100%;
			color: white;
			border: 0px;
			border-radius: 4px;
			padding: 0px 10px 0px 10px;
			background-color: rgba(20,20,20,0.2);
			&::placeholder {
				color: #FAFAFA;
				border: 0px;
			}
		}
	}
	.explore {
		height: 100%;
		position: relative;
		margin-top: 15px;
		.columns {
			.card {
				margin-top: 15px;
				border: none;
				border-radius: 25px;
				cursor: pointer;
				width: 100%;
				-webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
				-moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
				box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
				&:hover {
					-webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.4);
					-moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.4);
					box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.4);
					.card-img-top {
						transform:scale(1.1);
						-o-transform:scale(1.1); 
						-moz-transform:scale(1.1);
						-webkit-transform:scale(1.1);
					}
					.user-profile {
						transform:scale(1.1);
						-o-transform:scale(1.1); 
						-moz-transform:scale(1.1);
						-webkit-transform:scale(1.1);
					}
				}
				&.card-room {
					.card-head {
						max-height: 150px;
						overflow: hidden;
						border-radius: 25px 25px 0px 0px;
						position: relative;
						.card-img-top {
							object-fit: cover;
							max-height: initial;
							margin-top: -15%;
							transition: transform .2s ease-in-out;
							-o-transition: transform .2s ease-in-out;
							-moz-transition: transform .2s ease-in-out;
							-webkit-transition: transform .2s ease-in-out;
						}
					}
					.card-body {
						border-radius: 0px 0px 25px 25px;
					}
				}
				&.card-user {
					background-color: $positiveColor;
					color: white;
					.user-profile {
						width: 50px;
						height: 50px;
						border-radius: 25px;
						transition: all .2s ease-in-out;
						-o-transition: all .2s ease-in-out;
						-moz-transition: all .2s ease-in-out;
						-webkit-transition: all .2s ease-in-out;
					}
					.user-state {
						margin-top: 10px;
						font-size: 12px;
					}
				}
			}
		}
		.refresh-btn {
			border: none;
			margin-top: 20px;
			background-color: $pointColor;
			&:active {
				opacity: 0.9;
			}
			i {
				margin-right: 5px;
			}
		}
	}
	.games {
		margin-top: 30px;
		.scrolling-wrapper {
			height: 530px;
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
	.list {
		margin-top: 30px;
		.scrolling-wrapper {
			height: 443px;
			padding-right: 10px;
			-webkit-overflow-scrolling: touch;
			&.list-rooms {
				.list-content {
					display: flex;
					flex-wrap: wrap;
					.card {
						width: 100%;
						margin-bottom: 8px;
						border-radius: 8px;
						cursor: pointer;
						display: block;
						position: relative;
						border: 0px;
						&:hover {
							background-color: $idleColor;
							border-color: $idleColor;
						}
						&.almost-full {
							background-color: $almostFullColor;
							border-color:  $almostFullColor;
							&:hover {
								background-color: $almostFullColorHover;
								border-color: $almostFullColorHover;
							}
						}
						&.half {
							background-color: $halfColor;
							border-color: $halfColor;
							&:hover {
								background-color: $halfColorHover;
								border-color: $halfColorHover;
							}
						}
						.card-head {
							padding: 10px;
							h5 {
								margin-bottom: 0px;
							}
						}
						.card-body {
							padding: 0px 10px 10px 10px;
							p {
								font-size: 12px;
								margin-bottom: 0px;
							}
						}
					}
				}
			}
			&.list-users {
				.list-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					.card {
						margin-bottom: 25px;
						display: inline-block;
						position: relative;
						color: #ffffff;
						text-align: center;
						width: 138px;
						border: 0px;
						border-radius: 10px;
						box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
						background-color: $themeColor;
						padding: 30px 0px 30px 0px;
						.profile {
							border-radius: 50%;
							min-width: 50px;
							min-height: 50px;
							max-width: 50px;
							max-height: 50px;
							object-fit: cover;
						}
						.card-content {
							h2 {
								font-size: 18px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
