<template>
	<div>
		<span class="before-btn" v-on:click="pages.leftType = LEFT_TYPE.Chat"> <i class="fas fa-chevron-left"></i> 채팅으로 되돌아가기</span>
		<simplebar class="search-scrolling-wrapper" data-simplebar-auto-hide="true">
			<div class="">
				<p class="wrapper-title">팔로우한 유저</p>
				<div class="row card-wrapper">
					<div class="col-sm-6" v-for="i in 5" :key="i">
						<div class="card card-rounded card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
								<p class="user-state">리그오브레전드 대기중</p>
							</blockquote>
						</div>
					</div>
				</div>
				<p class="wrapper-title">이 게임 대기중인 유저</p>
				<div class="row card-wrapper">
					<div class="col-sm-6" v-for="i in 9" :key="i">
						<div class="card card-rounded card-user">
							<blockquote class="blockquote mb-0 card-body text-center">
								<img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
								<p class="user-state">리그오브레전드 대기중</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</simplebar>
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
			RIGHT_TYPE : new RIGHT_TYPE()
		}
	},
	methods:{
		// ChangeLeftType: function(leftType) {
		// 	this.pages.leftType = leftType
		// 	this.$emit('PagePush', this.pages);
		// },
		SearchUser : function() {
			this.$emit('SearchUser');
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
	
@import "@/assets/css/card.scss";
@import "@/assets/css/scrolling.scss";

.before-btn {
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
}
.wrapper-title {
	color: $grayColor;
	margin-left: 15px;
	margin-bottom: 15px;
	display: flex; 
	flex-direction: row;
	&:after { 
		content: ""; 
		flex: 1 1; 
		border-bottom: 1px solid $grayColor;
		margin: auto 15px auto 15px;
	} 
}
.card-wrapper {
	margin-left: 0px;
	margin-right: 0px;
}
</style>
