<template>
	<div>
		<div class="chat-page">
			<!-- <img class="title-img" :src="require(`@/assets/gapa_icon.png`)"/> -->
			<h1 class="search-title">Waiting TEAM..</h1>
			<div class="teams card">
				<div class="member row" v-for="member in teams" v-bind:key="member.id" v-on:click="SearchUser">
					<div class="col-sm-3 member-profile">
						<img class="profile-img float-center" :src="require(`@/assets/img/profile/profileImg.png`)"/>
					</div>
					<div class="col-sm-9 member-name">
						<span class="align-middle">{{ member.name }}</span>
					</div>
				</div>
				<div class="member empty-member row" v-for="i in (maxMember - teams.length)" v-bind:key="i">
					<div class="col-sm-3 member-profile-empty">
						<!-- <img class="profile-img float-center" :src="require(`@/assets/noone.png`)"/> -->
						<div class="lds-ripple"><div></div><div></div></div>
					</div>
					<div class="col-sm-9 member-name" v-on:click="pages.leftType = LEFT_TYPE.SearchUser">
						<span class="align-middle">Waiting..</span>
						<!-- <div class="lds-ripple"><div></div><div></div></div> -->
					</div>
				</div>
			</div>
			<div class="leave-teams">
				<button class="btn btn-light" v-on:click="OutRoom"><i class="fas fa-sign-out-alt"></i></button>
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
			teams: [
				{
					name: '닉네임',
					id: 'asdf'
				},
				{
					name: '닉네임22',
					id: 'fdsa'
				}
			],
			maxMember: 4,
			LEFT_TYPE : new LEFT_TYPE(),
			RIGHT_TYPE : new RIGHT_TYPE()
		}
	},
	methods:{
		SearchUser : function() {
			this.$emit('SearchUser');
		},
		OutRoom : function() {
			this.$emit('OutRoom');
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";
	
@keyframes lds-ripple {
  0% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 36px;
    height: 36px;
    opacity: 0;
  }
}

.chat-page {
	.search-title {
		color: white;
		margin-top: 8rem;
		font-family: 'Lilita One', cursive;
	}
	.teams {
		margin-top: 10px;
		border: 0px;
		background-color: $themeColor;
		color: white;
		.member {
			background-color: $themeColor;
			border-radius: 10px;
			margin: 2px 0px 2px 0px;
			.member-profile {
				padding: 8px 0px 8px 0px;
				text-align: center;
			}
			.member-profile-empty {
				margin-top: 8px;
				margin-bottom: 8px;
				width: 40px;
				height: 40px;
				text-align: center;
				.lds-ripple {
					display: inline-block;
					position: relative;
					width: 40px;
					height: 40px;
					text-align: center;
					div {
						position: absolute;
						border: 2px solid #fff;
						opacity: 1;
						border-radius: 50%;
						animation: lds-ripple 1s cubic-bezier(0, 0.1, 0.4, 1) infinite;
						display: inline-block;
						&:nth-child(2) {
							animation-delay: -0.5s;
						}
					}
				}
			}
			.member-name {
				padding: 0px;
				text-align: left;
				display: flex;
				align-items: center;
			}
			&:hover {
				cursor: pointer;
				background-color: #1f1d1d;
			}
		}
		.empty-member {
			color: #575757;
		}
	}
	.leave-teams {
		position: absolute;
		bottom: 5%; 
		left: 50%; 
		transform: translateX(-50%) translateY(-50%); 
		i {
			font-size: 40px;
			// color: #ABABAB;
		}
	}
}
</style>
