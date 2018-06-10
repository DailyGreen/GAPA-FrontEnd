var Authentication = new Vue({
    el: '#authentication',
    data: {
        // state === 0 : 회원가입 창
        // state === 1 : 로그인 창
        // state === 2 : 게임 선택 창
        state: 1
    },
    methods: {
        wantRegister : function() {
            this.state = 0;
        },
        wantLogin : function() {
            this.state = 1;
        },
        gameSelect : function() {
            this.state = 2;
        }
    }
})