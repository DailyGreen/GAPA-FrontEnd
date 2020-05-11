<template>
	<div>
		<div class="idle-page">
			<img class="title-img" :src="require(`@/assets/gapa_icon.png`)" v-on:click="type=0"/>
			<div class="menu">
				<Button class="btn" v-on:click="pages.leftType = leftType.Explore">Explore</Button>
				<Button class="btn" v-on:click="pages.leftType = leftType.Games">Games</Button>
				<!-- <Button class="btn" v-on:click="pages.leftType = leftType.Explore">Rooms</Button> -->
				<Button class="btn">{{ pages }}</Button>
			</div>
			<!-- 	검색어창 비활성화	 -->
			<!-- <div class="search">
				<input class="search-input" type="text" placeholder="리그오브레전드">
			</div> -->
			<div class="explore" v-show="pages.leftType === leftType.Explore">
				<h2>Recommend For You</h2>
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="card-columns">
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">맞춤 라인에는 관련 게임을 분석해서</h5>
								<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
						</div>
						<div class="card p-3">
							<blockquote class="blockquote mb-0 card-body">
								<p>만들어진 방이나</p>
								<footer class="blockquote-footer">
									<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">비슷한 유저들을 추천해줍니다.</h5>
								<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title" style="z-index:10;">맞춤 라인에는 관련 게임을 분석해서</h5>
								<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
						</div>
						<div class="card text-center">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This 비슷한 유저들을 추천해hort paragraphy of text below it.</p>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
						<div class="card">
							<img src="http://grsmto.github.io/simplebar/static/logo-b9548eb4e7099f8133fd4d039b2dff43.svg" class="card-img-top" alt="...">
						</div>
						<div class="card p-3 text-right">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="blockquote-footer">
									<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<div class="games" v-show="pages.leftType === leftType.Games">
				<h2>Game Category</h2>
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="game-category">
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" v-on:click="GameInfo(0)"/>
							<div class="card-body">
								<p class="game-name">BATTLEGROUND</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/DeadByDaylight.png`)" v-on:click="GameInfo(1)"/>
							<div class="card-body">
								<p class="game-name">DeadByDaylight</p>
								<p class="game-follower">12명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/LeagueOfLegend.png`)" v-on:click="GameInfo(2)"/>
							<div class="card-body">
								<p class="game-name">League of Legend</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/TTF.png`)" v-on:click="GameInfo(3)"/>
							<div class="card-body">
								<p class="game-name">TTF</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
						<div class="card">
							<img class="game-img" :src="require(`@/assets/img/games/overwatch.png`)" v-on:click="GameInfo(4)"/>
							<div class="card-body">
								<p class="game-name">Overwatch</p>
								<p class="game-follower">145명의 팔로워</p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<div class="list" v-show="pages.leftType === leftType.GameInfo">
				<button class="btn">게임 방</button>
				<button class="btn">대기 유저</button>
				<simplebar class="scrolling-wrapper list-rooms" data-simplebar-auto-hide="true" v-show="false">
					<div class="list-content">
						<div class="card almost-full">
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
				<simplebar class="scrolling-wrapper list-users" data-simplebar-auto-hide="true">
					<div class="list-content">
						<div class="card" v-for="i in 40" :key="i">
							<img :src="require(`@/assets/profileImg.png`)" alt="profile-image" class="profile"/>
							<div class="card-content">
								<h2>닉네임</h2>
								<p>14 Followers</p>
							</div>
						</div>
					</div>
				</simplebar>
			</div>
			<div class="rooms" v-show="pages.leftType === 1000">
				<h2>Rooms</h2>
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
				<h4 class="game-name">리그오브레전드 ></h4>
				<div class="room-list">
					<div class="card bg-primary text-white text-center p-3">
						<blockquote class="blockquote mb-0">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
							<footer class="blockquote-footer text-white">
								<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
							</footer>
						</blockquote>
					</div>
					<div class="card bg-primary text-white text-center p-3">
						<blockquote class="blockquote mb-0">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
							<footer class="blockquote-footer text-white">
								<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
							</footer>
						</blockquote>
					</div>
				</div>
				<h4 class="game-name">배틀그라운드 ></h4>
				</simplebar>
			</div>
		</div>
	</div>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
	props: {
		leftType: {
			type: Number,
			default: -1
		},
		rightType: {
			type: Number,
			default: -1
		},
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
		}
	},
	methods:{
		GameInfo : function(gameNum) {
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
		// margin-top: 5rem;
		font-size: 30px;
		// font-weight: 700;
		color: black;
		.search-input {
			width: 100%;
			// margin-left: 15px;
			// display: block;
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
		margin-top: 30px;
		.scrolling-wrapper {
			height: 443px;
			padding-right: 10px;
			-webkit-overflow-scrolling: touch;
			.card {
				border-radius: 25px;
				// overflow: hidden;
				cursor: pointer;
			}
		}
	}
	.games {
		margin-top: 30px;
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
	.rooms {
		margin-top: 30px;
		.scrolling-wrapper {
			height: 443px;
			padding-right: 10px;
			-webkit-overflow-scrolling: touch;
			.game-name {

			}
			.room-list {
				.card {
					width: 120px;
				}
			}
		}
	}
}
</style>
