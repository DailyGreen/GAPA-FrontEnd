<template>
	<div>
		<div class="chat-page">
			<div class="chat-content">
				<simplebar class="scrolling-wrapper" data-simplebar-auto-hide="true">
					<div class="chat-log row">
						<div class="profile col-md-2">
							<img class="profile-img float-center" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
						</div>
						<div class="msg col-md-10">
							<p class="nickname">닉네임</p>
							<pre>안녕하세요오옹.</pre>
						</div>
					</div>
					<div class="chat-log row">
						<div class="profile col-md-2">
							<img class="profile-img float-center" :src="require(`@/assets/img/profile/blackspirit.jpg`)" v-on:click="SearchUser"/>
						</div>
						<div class="msg col-md-10">
							<p class="nickname">닉네임22</p>
							<pre>
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		네 반갑습니다아. ㅁㄴㅇㄻ
		ㄴㅇㄻㄴㅇㄹ
		asdf
		여러줄 테스트으 ㅁㄴㅇㄹ
							</pre>
						</div>
					</div>
					<div class="chat-log row">
						<div class="profile col-md-2">
							<img class="profile-img float-center" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
						</div>
						<div class="msg col-md-10">
							<p class="nickname">닉네임</p>
							<pre>안녕하세요오옹.</pre>
						</div>
					</div>
				</simplebar>
			</div>
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Send Your Message">
				<div class="input-group-append">
					<button class="btn btn-outline-secondary" type="button">Enter</button>
				</div>
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
	
.chat-page {
	.chat-content {
		// margin-top: 20px;
		// padding-top: 20px;
		// padding-bottom: 20px;
		width: 100%;
		height: -webkit-calc(100% - 80px); /* for Chrome, Safari */
		height:    -moz-calc(100% - 80px); /* for Firefox */
		height:         calc(100% - 80px); /* for IE */
		border: 0px;
		border-radius: 5px;
		background-color: #edebeb;
		.scrolling-wrapper {
			height: 520px;		
			padding-right: 10px;
			-webkit-overflow-scrolling: touch;
			.chat-log {
				margin: 20px 0px 20px 0px;
				.profile {
					text-align: center;
					.profile-img {
						min-width: 60px;
						max-width: 60px;
						min-height: 60px;
						max-height: 60px;
						border: 0px;
					}
				}
				.msg {
					padding-left: 0px;
					.nickname {
						margin-bottom: 0px;
						font-weight: 800;
						font-size: 20px;
					}
					pre {
						color: rgba(0,0,0,0.5);
						margin-bottom: 0px;
						white-space: pre-line;
						font-size: 16px;
						font-weight: 600;
						font-family: 'Noto Sans KR', sans-serif;
					}
				}
			}
		}
	}
}
</style>
