<template>
	<div>
		<div class="notice-page">
			<button class="btn btn-light" v-on:click="PagePopAndMove()"><i class="fas fa-sign-out-alt"></i></button>
			<img class="profile-img sm-size float-right" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
			<h4>Notifications</h4>
			<div class="notice-content">
				<div class="notice-msg row">
					<div class="col-md-2">
						<img class="profile-img sm-size float-center" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
					</div>
					<div class="col-md-10">
						<h5>닉네임2</h5>
						<h6>Would You Join Us? <span>(3min)</span></h6>
						<button type="button" class="btn positive">Join</button>
						<button type="button" class="btn outline">Refused</button>
					</div>
				</div>
				<div class="notice-msg row">
					<div class="col-md-2">
						<img class="profile-img sm-size float-center" :src="require(`@/assets/img/profile/profileImg.png`)" v-on:click="SearchUser"/>
					</div>
					<div class="col-md-10">
						<h5>NickName3232</h5>
						<h6>Would You Join Us? <span>(1day)</span></h6>
						<p>Refused..</p>
					</div>
				</div>

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
		// ChangeRightType: function(rightType) {
		// 	this.pages.rightType = rightType
		// 	this.$emit('PagePop', this.pages);
		// },
		SearchUser : function() {
			this.$emit('SearchUser');
		},
		PagePopAndMove : function() {
			//	TODO: 더 나은 PagePop()호출 방식을 발견한다면 개선하기
			/*
				this.pages = this.$emit('PagePop'); 는
				this.pages = this.PagePop(); 처럼 PagePop()이 실행되고 바로 pages 로 값이 들어 가지 않는다.
				때문에 다른 방식으로 접근해야됨
			 */
			this.$emit('PagePopAndMove');
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

@import "@/assets/css/profile.scss";
@import "@/assets/css/button.scss";
	
.notice-page {
	color: $whiteColor;
	h4 {
		margin-bottom: 25px;
		margin-top: 40px;
		font-weight: 800;
	}
	.notice-content {
		.notice-msg {
			margin-bottom: 25px;
			h5 {
				margin-bottom: 0px;
				font-weight: 600;
			}
			h6 {
				margin-bottom: 0px;
				font-weight: 400;
				span {
					font-size: 12px;
					font-weight: 400;
				}
			}
			p {
				font-size: 14px;
				color: $whiteColorOpa;
			}
			.btn {
				margin-top: 10px;
				// width: calc(50%-6px);
				width: -webkit-calc(50% - 6px); /* for Chrome, Safari */
				width:    -moz-calc(50% - 6px); /* for Firefox */
				width:         calc(50% - 6px); /* for IE */
				&.positive {
					background-color: $blackColor;
					margin-right: 3px;
				}
				&.outline {
					margin-left: 3px;
				}
			}
		}
	}
}
</style>
