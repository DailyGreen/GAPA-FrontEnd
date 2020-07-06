<template>
	<div>
		<div class="profile-page">
			<button class="btn btn-light" v-on:click="OutRoom"><i class="fas fa-sign-out-alt"></i></button>
			<button class="btn setting-btn float-right" v-on:click="ProfileUpdate"><i class="fas fa-cog"></i></button>

			<div class="profile-curt">
				<img class="profile-img lg-size float-center" :src="require(`@/assets/img/profile/profileImg.png`)"/>
			</div>
			<div class="row profile-info">
				<div class="col-md-4 text-center info-btn" v-on:click="pages.leftType = LEFT_TYPE.ProfileFollwers">
					<h4>183</h4>
					<p>팔로워</p>
				</div>
				<div class="col-md-4 text-center info-btn" v-on:click="pages.leftType = LEFT_TYPE.ProfileGames">
					<h4>4</h4>
					<p>게임</p>
				</div>
				<div class="col-md-4 text-center info-btn" v-on:click="pages.leftType = LEFT_TYPE.ProfileFollowing">
					<h4>1.2K</h4>
					<p>팔로윙</p>
				</div>
			</div>
			<!-- 	TODO : 글자 제한할 것		 -->
			<pre class="profile-introduce">
게임 좋아합니다.
팔로우 환영 ^^
			</pre>
			<button class="btn btn-primary write-btn" v-on:click="MoveWrite()"><i class="fas fa-3x fa-pen-square"></i></button>
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
		MoveWrite: function() {
			this.$emit('PagePush', this.pages);
			this.pages.leftType = this.LEFT_TYPE.Write;
			this.pages.rightType = this.RIGHT_TYPE.Write;
		},
		SearchUser : function() {
			this.$emit('SearchUser');
		},
		OutRoom : function() {
			this.$emit('OutRoom');
		},
		ProfileUpdate : function() {
			this.$emit('PagePush', this.pages);
			this.pages.leftType = this.LEFT_TYPE.ProfileUpdate;
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
	
.profile-page {
	height: 590px;
    position: relative;
	.setting-btn {
		color: white;
	}
	.profile-curt {
		margin-top: 50px;
		text-align: center;
	}
	.profile-info {
		margin-top: 50px;
		color: white;
		text-align: center;
		.info-btn {
			cursor: pointer;
			&:active {
				opacity: 0.5;
			}
		}
	}
	.profile-introduce {
		color: white;
		text-align: center;
		display: block;
		font-weight: 500;
	}
	.write-btn {
		border: none;
		background-color: $themeColor;
		position: absolute;
		bottom: 30px;
		left: 50%;
		-webkit-transform: translate(-50%, 0%);
		-moz-transform: translate(-50%, 0%);
		-ms-transform: translate(-50%, 0%);
		-o-transform: translate(-50%, 0%);
		transform: translate(-50%, 0%);
		&:active {
			background-color: $themeColor;
			opacity: 0.4;
		}
	}
}
</style>
