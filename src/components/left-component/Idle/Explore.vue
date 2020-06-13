<template>
    <div class="explore">
        <div class="row columns">
            <div class="col-md-4">
                <div class="card card-rounded card-room">
                    <div class="card-head">
                        <img :src="require(`@/assets/img/games/BATTLEGROUNDS.png`)" class="room-img-top">
                    </div>
                    <div class="card-body" style="background-color:#edbe53">
                        <h5 class="card-title">배그 랭 돌릴 4인팟 구합니다</h5>
                        <p class="card-text">(1 / 4)</p>
                    </div>
                </div>
                <div class="card card-rounded card-user">
                    <blockquote class="blockquote mb-0 card-body text-center">
                        <img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
                        <p class="user-state">리그오브레전드 대기중</p>
                    </blockquote>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-rounded card-user">
                    <blockquote class="blockquote mb-0 card-body text-center">
                        <img :src="require(`@/assets/img/profile/blackspirit.jpg`)" class="user-profile">
                        <p class="user-state">리그오브레전드 대기중</p>
                    </blockquote>
                </div>
                <div class="card card-rounded card-room">
                    <div class="card-head">
                        <img :src="require(`@/assets/img/games/TTF.png`)" class="room-img-top">
                    </div>
                    <div class="card-body" style="background-color:#fb7c3a">
                        <h5 class="card-title">TFT 랭 돌릴 4인팟 구합니다</h5>
                        <p class="card-text">(1 / 4)</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-rounded card-room">
                    <div class="card-head">
                        <img :src="require(`@/assets/img/games/TTF.png`)" class="room-img-top">
                    </div>
                    <div class="card-body" style="background-color:#fb7c3a">
                        <h5 class="card-title">TFT 랭 돌릴 4인팟 구합니다</h5>
                        <p class="card-text">(1 / 4)</p>
                    </div>
                </div>
                <div class="card card-rounded card-user">
                    <blockquote class="blockquote mb-0 card-body text-center">
                        <img :src="require(`@/assets/img/profile/profileImg.png`)" class="user-profile">
                        <p class="user-state">배틀그라운드 대기중</p>
                    </blockquote>
                </div>
            </div>
        </div>
        <button class="btn primary icon-btn mx-auto d-block"><i class="fas fa-sync-alt"></i> 새로고침</button>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
@import "@/assets/css/baseStyle.scss";

@import "@/assets/css/card.scss";
@import "@/assets/css/button.scss";

.explore {
    height: 100%;
    position: relative;
    margin-top: 15px;
    .columns {
        margin-top: 60px;
        .card-rounded {
            /* card-rounded 설정은 profile.scss 에 있음 */
            &:hover {
                .room-img-top {
                    transform:scale(1.1);
                    -o-transform:scale(1.1); 
                    -moz-transform:scale(1.1);
                    -webkit-transform:scale(1.1);
                }
            }
            &.card-room {
                .card-head {
                    max-height: 150px;
                    overflow: hidden;
                    border-radius: 25px 25px 0px 0px;
                    position: relative;
                    .room-img-top {
                        object-fit: cover;
                        width: 100%;
                        margin-top: -15%;
                        transition: transform .2s ease-in-out;
                        -o-transition: transform .2s ease-in-out;
                        -moz-transition: transform .2s ease-in-out;
                        -webkit-transition: transform .2s ease-in-out;
                    }
                }
                .card-body {
                    border-radius: 0px 0px 25px 25px;
                }
            }
        }
    }
    .icon-btn {
        margin-top: 50px;
    }
}
</style>
