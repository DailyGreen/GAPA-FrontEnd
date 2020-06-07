<template>
    <simplebar class="user-list scrolling-wrapper sm-size" data-simplebar-auto-hide="true">
        <div class="row card-wrapper">
            <div class="col-sm-6" v-for="i in 24" :key="i">
                <div class="card card-rounded card-user">
                    <blockquote class="blockquote mb-0 card-body text-center">
                        <img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
                        <p class="user-state">리그오브레전드 대기중</p>
                    </blockquote>
                </div>
            </div>
        </div>
        <!-- <div class="list-content">
            <div class="card" v-for="i in 40" :key="i">
                <img :src="require(`@/assets/img/profile/profileImg.png`)" alt="profile-image" class="profile"/>
                <div class="card-content">
                    <h2>닉네임</h2>
                    <p>14 Followers</p>
                </div>
            </div>
        </div> -->
    </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  data () {
    return {
    }
  },
  methods: {      
		// JoinRoom : function(roomIdx) {	// eslint-disable-line no-unused-vars
		// 	this.$emit('JoinRoom');
		// }
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

.user-list {
    .card-wrapper {
        margin-left: 0px;
        margin-right: 0px;
    }
}
</style>
