var Authentication = new Vue({
    el: '#authentication',
    data: {
        // state === 0 : 회원가입 창
        // state === 1 : 로그인 창
        // state === 2 : 게임 선택 창
        state: 1,
        // game === 0 : null
        // game === 1 : 옵치
        // game === 2 : 롤
        // game === 3 : 배그
        game: 0,
        disableButton: true
    },
    methods: {
        // 페이지 전환
        wantRegister : function() {
            this.state = 0;
        },
        wantLogin : function() {
            this.state = 1;
        },
        gameSelect : function() {
            this.state = 2;
        },

        // 게임 선택(s = select)
        soverwatch : function() {
            this.game = 1;
            this.disableButton = false;
        },
        slol : function() {
            this.game = 2;
            this.disableButton = false;
        },
        spubg : function() {
            this.game = 3;
            this.disableButton = false;
        }
    }
})