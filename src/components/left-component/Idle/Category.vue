<template>
    <div class="games lg-wrapper-condition">
        <!-- <h2>게임 카테고리</h2> -->
        <simplebar class="scrolling-wrapper lg-size" data-simplebar-auto-hide="true">
            <div class="game-category">
                <div class="card game-card" v-for="game in gameCategory" :key="game.game_code">
                    <img class="game-img" :src="require(`@/assets/img/games/${game.game_img}`)" v-on:click="GameInfo(`${game.game_code}`)"/>
                    <div class="card-body">
                        <p class="game-name">{{game.game_name}}</p>
                        <p class="game-follower">{{game.game_follower.length}}명의 팔로워</p>
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
  created () {
      this.GetCategory();
  },
  data () {
    return {
        gameCategory: [
        ]
    }
  },
  methods: {
    GameInfo : function(gameNum) {
        this.$emit('GameInfo', gameNum);
    },
    GetCategory: function() {        
        this.$http.get('http://localhost:3000/games', {})
            .then(response => {
                for (const r in response.data) {
                    this.gameCategory.push(response.data[r]);
                }
            })
            .catch(error => {
                console.log(error);
            });
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
