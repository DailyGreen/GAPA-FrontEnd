<template>
	<div>
		<div class="idle-page">
			<img class="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)" v-on:click="goMainPage()"/>

			<div class="menu">
				<Button class="btn" v-on:click="goMainPage()">홈</Button>
				<Button class="btn" v-on:click="toCategoryPage()">게임 목록</Button>
			</div>
			<!-- 	검색어창 비활성화	 -->
			<!-- <div class="search">
				<input class="search-input" type="text" placeholder="리그오브레전드">
			</div> -->

			<explore v-show="pages.leftType === LEFT_TYPE.Explore"></explore>

			<category v-show="pages.leftType === LEFT_TYPE.Games" ref="category" @GameInfo="GameInfo"></category>

			<div class="list" v-show="pages.leftType === LEFT_TYPE.GameRooms || pages.leftType === LEFT_TYPE.GameUsers">
				<button class="btn" style="padding-left:0px; padding-right:0px; margin-right: 20px;" v-on:click="pages.leftType = LEFT_TYPE.GameRooms">게임 방</button>
				<button class="btn" style="padding-left:0px; padding-right:0px;" v-on:click="pages.leftType = LEFT_TYPE.GameUsers">대기 유저</button>

				<!-- 게임 방 목록 컴포넌트 -->
				<roomList v-show="pages.leftType === LEFT_TYPE.GameRooms"
							@JoinRoom="JoinRoom"></roomList>

				<!-- 대기 유저 목록 컴포넌트 -->
				<userList  v-show="pages.leftType === LEFT_TYPE.GameUsers"></userList>

			</div>
		</div>
	</div>
</template>

<script>
	
import { LEFT_TYPE, RIGHT_TYPE } from '@/assets/js/TypeData.js'

import explore from '@/components/left-component/Idle/Explore'
import category from '@/components/left-component/Idle/Category'
import roomList from '@/components/left-component/Idle/RoomList'
import userList from '@/components/left-component/Idle/UserList'
	
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
			blocks: [ 'a','a','a','a']
		}
	},
	methods:{
		goMainPage : function() {
			this.$emit('goMainPage');
		},
		toCategoryPage : function() {
			this.$refs.category.GetCategory();
			this.ChangeLeftType(this.LEFT_TYPE.Games);
		},
		JoinRoom : function(roomIdx) {	// eslint-disable-line no-unused-vars
			this.$emit('JoinRoom');
		},
		ChangeLeftType: function(leftType) {
			this.$emit('PagePush', this.pages);
			this.pages.leftType = leftType
		},
		GameInfo : function(gameNum) {
			this.$emit('GameInfo', gameNum);
		}
	},
	components: {
		explore,
		category,
		roomList,
		userList
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/button.scss";

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
				color: $themeColor;
			}
		}
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
	.list {
		margin-top: 30px;
	}
}
</style>
