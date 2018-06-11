var Main = new Vue({
    el: '#main',
    data: {
        // state === 0 : 회원가입 창
        // state === 1 : 시작 창
        // state === 2 : 로그인 창
        // state === 3 : 게임 창
        state: 1,
        on: true
    },
    methods: {
        // 페이지 전환
        wantRegister : function() {
            this.state = 0;
        },
        wantLogin : function() {
            this.state = 2;
        },
        gameSelect : function() {
            this.state = 3;
        }
    }
})

$('#open').on('click', function(e) {
    setTimeout(function(){
        $('#col-box').hide() 
    }, 2000); // 1초는 깜빡이는 시간, 1초는 잠시 휴식(바로 버튼 못누르게)
});