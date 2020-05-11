<template>
	<div>
		<div class="profile-page">
			<button class="btn btn-light" v-on:click="OutRoom"><i class="fas fa-sign-out-alt"></i></button>

			<div class="profile-curt">
				<img class="profile-img float-center" :src="require(`@/assets/profileImg.png`)" v-on:click="SearchUser"/>
			</div>
			<div class="row profile-info">
				<div class="col-md-4 text-center">
					<h4>183</h4>
					<p>Followers</p>
				</div>
				<div class="col-md-4 text-center">
					<h4>4</h4>
					<p>Games</p>
				</div>
				<div class="col-md-4 text-center">
					<h4>1.2K</h4>
					<p>Following</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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

.profile-page {
	.profile-curt {
		margin-top: 50px;
		text-align: center;
		.profile-img {
			min-width: 150px;
			max-width: 150px;
			min-height: 150px;
			max-height: 150px;
			border-radius: 20%;
			object-fit: cover;
			cursor: pointer;
		}
	}
	.profile-info {
		margin-top: 50px;
		color: white;
		text-align: center;
	}
}
</style>
