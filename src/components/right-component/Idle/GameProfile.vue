<template>
	<div class="game-profile">			
		<div class="card game-card" v-if="gameProfileImg!==''">
			<img class="game-img" :src="require(`@/assets/img/games/${gameProfileImg}`)" v-on:click="ChangeRightType(RIGHT_TYPE.GameInfo)"/>
		</div>
		<h1 class="game-title">{{gameTitle}}</h1>
		<div class="game-info">
			<a href="">{{gameTag}} <span> 명의 팔로워</span></a>
			<a href="">{{gameRooms}} <span> 개의 방</span></a>
		</div>
		<button class="btn dark icon-btn follow" v-if="isFollowingGame === false" v-on:click="ChangeFollowing"><i class="far fa-heart"></i> 팔로우</button>
		<button class="btn positive icon-btn following" v-if="isFollowingGame === true" v-on:click="ChangeFollowing"><i class="fas fa-heart"></i> 팔로윙</button>
		<br/>
		<div class="game-decision-group">
			<button class="btn btn-waiting" v-on:click="PagePopAndMove()">초대 대기하기</button>
			<button class="btn btn-create-room positive" v-on:click="PagePush('CreateRoom', LEFT_TYPE.CreateRoom, RIGHT_TYPE.CreateRoom)">팀 꾸리기</button>
		</div>
	</div>
</template>

<script>
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'
	
export default {
	// created() {
	// 	this.GetGameInfo();
	// },
	props: {
		gameTag: {
			type: Number,
			default: 0
		},
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
			LEFT_TYPE: new LEFT_TYPE(),
			RIGHT_TYPE: new RIGHT_TYPE(),
			isFollowingGame: false,
			gameProfileImg: '',
			gameTitle: '',
			gameRooms: 0
		}
	},
	watch: {
		gameTag: function(newVal, oldVal) {
			console.log(newVal, oldVal);
			this.GetGameInfo();
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
		},
		GetGameInfo: function() {
			this.gameProfileImg = 'none.png';
			this.$http.get(`http://localhost:3000/games/${ this.gameTag.toString() }/bb@bb`)
				.then(response => {
					console.log("R ", response);
					this.gameProfileImg = response.data.game_img;
					this.gameTitle = response.data.game_name;
					this.isFollowingGame = response.data.following;
					// this.gameRooms = response.data.game_img;
				})
				.catch(error => {
					console.log(error);
				});
		},
		ChangeFollowing: function() {
			// const tempEmail = 'bb@bb';
			if (this.isFollowingGame) {
				this.$http.delete('http://localhost:3000/games/follow', { data: {
					email : 'bb@bb',
					code : this.gameTag
				}})
				.then(response => {
					console.log("SUC ", response);
					this.isFollowingGame = false;
				})
				.catch(error => {
					console.log(error);
				});
			} else {
				console.log()
				this.$http.post('http://localhost:3000/games/follow', {
					headers: { 'Content-type': 'application/x-www-form-urlencoded' },
						email : 'bb@bb',
						code : this.gameTag
				})
				.then(response => {
					console.log("SUC ", response);
					this.isFollowingGame = true;
				})
				.catch(error => {
					console.log(error);
				});
			}
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

.game-profile {
	margin-top: 100px;
	text-align: center;
	.game-decision-group {
		width: 100%;
		position: absolute;
		bottom: 0px;
		.btn {
			width: 50%;
			height: 50px;
			color: white;
			&.btn-waiting {
				background-color: $blackColor;
			}
			&.btn-create-room {
				border-radius: 10px;
			}
		}
	}
}
	
</style>
