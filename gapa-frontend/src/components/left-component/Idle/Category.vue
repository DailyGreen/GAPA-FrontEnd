<template>
    <div class="games lg-wrapper-condition">
        <!-- <h2>게임 카테고리</h2> -->
        <simplebar class="scrolling-wrapper lg-size" data-simplebar-auto-hide="true">
            <div class="game-category">
                <div class="card game-card" v-for="game in gameCategory" :key="game.code">
                    <img class="game-img" :src="require(`@/assets/img/games/${game.imgUrl}`)" v-on:click="GameInfo(`${game.code}`)"/>
                    <div class="card-body">
                        <p class="game-name">{{game.name}}</p>
                        <p class="game-follower">{{game.follwerCount}}명의 팔로워</p>
                    </div>
                </div>
            </div>
        </simplebar>
    </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  data () {
    return {
        gameCategory: [
            {
                name: '배틀그라운드',
                follwerCount: 145,
                imgUrl: 'BATTLEGROUNDS.png',
                code: 0
            },
            {
                name: 'DeadByDaylight',
                follwerCount: 32,
                imgUrl: 'DeadByDaylight.png',
                code: 1
            },
            {
                name: 'League of Legend',
                follwerCount: 1394,
                imgUrl: 'LeagueOfLegend.png',
                code: 2
            },
            {
                name: 'TTF',
                follwerCount: 203,
                imgUrl: 'TTF.png',
                code: 3
            },
            {
                name: 'Overwatch',
                follwerCount: 131,
                imgUrl: 'overwatch.png',
                code: 4
            },
            {
                name: 'DeadByDaylight',
                follwerCount: 32,
                imgUrl: 'DeadByDaylight.png',
                code: 1
            },
            {
                name: 'League of Legend',
                follwerCount: 1394,
                imgUrl: 'LeagueOfLegend.png',
                code: 2
            },
            {
                name: 'TTF',
                follwerCount: 203,
                imgUrl: 'TTF.png',
                code: 3
            },
            {
                name: 'Overwatch',
                follwerCount: 131,
                imgUrl: 'overwatch.png',
                code: 4
            },
            {
                name: 'DeadByDaylight',
                follwerCount: 32,
                imgUrl: 'DeadByDaylight.png',
                code: 1
            },
            {
                name: 'League of Legend',
                follwerCount: 1394,
                imgUrl: 'LeagueOfLegend.png',
                code: 2
            },
            {
                name: 'TTF',
                follwerCount: 203,
                imgUrl: 'TTF.png',
                code: 3
            },
            {
                name: 'Overwatch',
                follwerCount: 131,
                imgUrl: 'overwatch.png',
                code: 4
            }
        ]
    }
  },
  methods: {
    GameInfo : function(gameNum) {
        this.$emit('GameInfo', gameNum);
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

@import "@/assets/css/game.scss";
@import "@/assets/css/scrolling.scss";

.games {
    margin-top: 30px;
}
</style>
