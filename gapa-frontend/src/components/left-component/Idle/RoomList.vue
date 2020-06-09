<template>
    <simplebar class="room-list scrolling-wrapper sm-size" data-simplebar-auto-hide="true">
        <div class="list-content">
            <div class="card almost-full" v-on:click="JoinRoom(0)">
                <div class="card-head">
                    <h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
                </div>
                <blockquote class="blockquote mb-0 card-body float-right">
                    <p class="">( 3 / 4 )</p>
                </blockquote>
            </div>
            <div class="card half">
                <div class="card-head">
                    <h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
                </div>
                <blockquote class="blockquote mb-0 card-body float-right">
                    <p class="">( 2 / 4 )</p>
                </blockquote>
            </div>
            <div class="card room" v-for="i in 10" :key="i">
                <div class="card-head">
                    <h5 class="card-title">여기에는 방 이름이 들어갑니다.</h5>
                </div>
                <blockquote class="blockquote mb-0 card-body float-right">
                    <p class="">( 1 / 4 )</p>
                </blockquote>
            </div>
        </div>
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
		JoinRoom : function(roomIdx) {	// eslint-disable-line no-unused-vars
			this.$emit('JoinRoom');
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

@import "@/assets/css/scrolling.scss";

.room-list {
    .list-content {
        display: flex;
        flex-wrap: wrap;
        .card {
            width: 100%;
            margin-bottom: 8px;
            border-radius: 8px;
            cursor: pointer;
            display: block;
            position: relative;
            border: 0px;
            &:hover {
                background-color: $whiteColor;
                border-color: $whiteColor;
            }
            &.almost-full {
                background-color: $almostFullColor;
                border-color:  $almostFullColor;
                &:hover {
                    background-color: $almostFullColorHover;
                    border-color: $almostFullColorHover;
                }
            }
            &.half {
                background-color: $halfColor;
                border-color: $halfColor;
                &:hover {
                    background-color: $halfColorHover;
                    border-color: $halfColorHover;
                }
            }
            .card-head {
                padding: 10px;
                h5 {
                    margin-bottom: 0px;
                }
            }
            .card-body {
                padding: 0px 10px 10px 10px;
                p {
                    font-size: 12px;
                    margin-bottom: 0px;
                }
            }
        }
    }
}

</style>
