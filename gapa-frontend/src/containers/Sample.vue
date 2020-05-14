<!-- 준혁 이를 위한 설명용 ** index 가 메인입니다 ** -->
<template>	<!-- 부트 스트랩에서 반응형을 하려면 col-md-숫자가 들어가는데 최대 값이 12임 -->
  <div>		<!-- 만약 내가 html 테그 안에 클래스를 여러게 쓰고싶다 이러면 그냥 띄어쓰기하면 됨  5번째 줄 이어짐-->
	<div class="container">		<!-- 컨테이너는 부트 스트랩에서 가장 기본적인 레이아웃 요소이며 기본 그리드 시스템을 사용할 때 필요합니다. -->
		<div class="content row">		<!-- 고로 이친구는 클래스가 2개라는 뜻 -->
			
			<!-- 로그인 화면 (왼쪽) -->
			<div class="left-content login-page col-md-4" v-if="type===0">
				<img id="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/> <!-- v-if="type===0" 아래 까지 웹사이트 화면을 보여준다는뜻 -->
				<h1 class="login-title">SIGN IN</h1>
				
				<div class="login card"> <!-- 아 그리고 div 라는 태그는 그냥 묶음 이라생각하면됨 -->
					<input type="id" class="col-md-12" style="margin-bottom: 10px;" placeholder="아이디">
					<input type="id" class="col-md-12" placeholder="비밀번호">
					<button type="button" class="btn btn-success" v-on:click="LoginSuccess">Login</button>	
					<!-- 이 버튼을 누르면 LoginSuccess 라는 함수가 호출이되는데 이 함수의 내용이 type를 1로 바꿔줌 그래서 아래 평상시 화면이 나타남-->
					
					
					<a href="#" style="margin-top: 50px;">계정 생성</a>
					<a href="#">로그인이 안되시나요?</a>
				</div>
			</div>			<!-- 여기까지 v-if="type===0" 이아래 다 동일-->
			
			<!-- 로그인 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-if="type===0">
				<h1 class="text-center">**공지사항**</h1>
				<p class="text-center">끄적끄적(심심해서 해놓음)</p>
				<h1 class="text-center">**GAPA 소식**</h1>
				<p class="text-center">끄적끄적(심심해서 해놓음)</p>
			</div>
			
			
			
			
			<!-- 평상시 화면 (왼쪽)-->
			<div class="left-content common-page col-md-4" v-else-if="type===1">
				<img id="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/>
				
				<div class="common-profile card">
					<img class="profileimg" :src="require(`@/assets/img/profile/blackspirit.jpg`)"/>
					<h4 class="text-center" style="margin-top: 30px;">닉 넣을까말까?#3322</h4>
					<!-- 버튼 나중에 꾸미기! -->
					<button type="button" class="btn btn-success" id="top">호출 대기</button>	<!-- btn btn-success 는 부트 스트랩이 지원하는 클래스임 https://getbootstrap.com/docs/4.0/components/buttons/ -->
					<button type="button" class="btn btn-success" v-on:click="SearchingTeams" id="bottom">팀 생성하기</button>
				</div>
			</div>
			
			<!-- 팀원 검색 화면 (왼쪽)-->
			<div class="left-content search-teams col-md-4" v-else-if="type===2">
				<img id="title-img" :src="require(`@/assets/img/usefull/gapa_icon.png`)"/>
				<h1 class="search-title">Waiting TEAM..</h1>

				<div class="teams card">
					<div class="member row" v-for="member in teams" v-bind:key="member.id">
						<div class="col-md-4 member-profile">
							<i class="fas fa-male"></i>
						</div>
						<div class="col-md-8 member-name">
							<p>{{ member.name }}</p>	<!-- 이건 알꺼라 믿고 -->
						</div>
					</div>
					<div class="empty-member" v-for="i in (maxMember - teams.length)" v-bind:key="i">
						<p>Empty</p>
					</div>
				</div>
				<div class="leave-teams">
					<button class="btn btn-light"><i class="fas fa-sign-out-alt"></i></button>
				</div>
			</div>
			
			
			
			
			
			<!-- 평상시 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-if="type===1">
				<p>asdfasdf</p>
			</div>
			
			
			
			<!-- 팀원 찾기 화면 (오른쪽)-->
			<div class="right-content col-md-8" v-else-if="type===2">
				<p>fdsa</p>
			</div>
		</div>
	</div>
  </div>
</template> <!-- html 태그를 모르겠으면 검색... -->

<script>
export default {
	data () {
		return {
			/*
				type: 페이지 상황
				0: 로그인
				1: 평소 Index
				2: 팀원 검색 중
			*/
			type: 0,
			teams: [
				{
					name: 'USER_0',
					id: 'asdf'
				},
				{
					name: '유저_1',
					id: 'fdsa'
				}
			],
			maxMember: 4
		}
    },
	methods:{
		LoginSuccess : function(){
			this.type = 1;
		},
		SearchingTeams : function(){
			this.type = 2;
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
// 여기 아래 3개의 import 는 폰트를 불러온다는뜻임
// 사용법은 아래 font-family 참고하고
// 추가하고싶은 폰트가있다 그러면
// https://fonts.google.com/ 여기 사이트 들어가서 마음에 드는 폰트 클릭하면 오른쪽 상단에 + select this font 있음 이거 클릭하면 오른쪽 아래에 1 family select 라고 뜨는데
// 클릭하고 보면 @import 라는 탭이 있음 이놈 클릭하면 @import 블라블라 복사해서 여기다 복사하고
// Specify in CSS 라고 css 에다 사용하는거 있음 이거 복사해서 쓰면됨
	
// 폰트 생김새 : https://fonts.google.com/specimen/Lilita+One
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
// 폰트 생김새 : https://fonts.google.com/specimen/Baloo+Bhai ** 한글은 눈갱 **
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
// 폰트 생김새 : http://bitly.kr/gXMccr3 ** 한글은 눈갱 **
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

// 간단한 css 선택자 .이름 이건 어떤걸 꾸며주냐면 <div class= "이름> 내용 </div> (html 태그는 상관없음 class 라는게 들어가는걸 꾸며줌)
// #이름 이놈은 <div id= "이름> 내용 </div> (html 태그는 상관없음 id 라는게 들어가는걸 꾸며줌)
// 한줄 요약 . = class # = id
.container {
	margin-top: 100px;
    // box-shadow: #4E67EB 0px 0px 5px 0px;
	background-color: white;
	border-radius: 50px;
	padding: 5px 20px 5px 20px;
}
.content {
	img#title-img {		// 이렇게 태그가 선택자로 직접 써있을때 .content 안에있는 모든 img 태그에 #title-img 가 있으면 다 꾸며준다는 뜻
    width:60px;
    position: relative;
	}
	
    height: 40rem;
	// 그럼 이 아랫놈은 누굴꾸며주냐면 위에 보면 .content 라는 클래스안에있는 .left-content 를 꾸며준다는거임
	// 7번 줄 참고하면됨
	.left-content {
		padding: 25px;
		border-radius: 50px 0px 0px 50px;
		background-color: white;
		&.login-page{		// 이친구는 7번줄 보면 <div class="left-content login-page 클래스가 두개가 들어가있음 이걸로도 다른 div 태그랑 구별할수있기때문에 두개만 씀
			.login-title {
					margin-top: 8rem;
					font-family: 'Lilita One', cursive;
					margin-bottom: 3rem;
				}
			.login{
				border-color: white;
				button{
					margin-top: 3rem;
				}
				input{		// 여기 아래들의 css 옵션들은 검색하면 다나옴... 나도 다 검색해서함...
					height: 50px;
					width: 325px;
					border-right: #d5ebca 1px solid;
					border-left: #d5ebca 1px solid;
					border-top: #d5ebca 1px solid;
					border-bottom: #d5ebca 1px solid;
					box-shadow: 0px 0px 15px -7px gray;
				}
			}
		}
		&.common-page{
			.common-profile{
				border-color: white;
				.profileimg{
					width: auto;
					height: auto;
					max-width: 128px;
					max-height: 128px;
					border-radius: 50%;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				
				button{
					&#top{
						margin-top: 8rem;
					}
					&#bottom{
						margin-top: 2rem;
					}
				}
			}
		}
		
		
		&.search-teams {
			.search-title {
				margin-top: 8rem;
				font-family: 'Lilita One', cursive;
			}
			.teams {
				margin-top: 10px;
				border: 0px;
				.member {
					margin: 10px 0px 10px 0px;
					.member-profile {
						text-align: center;
						padding: 10px;
					}
					.member-name {
						padding: 10px;
						p { margin-bottom: 0px; }
					}
				}
				.empty-member {
					margin: 10px 0px 10px 0px;
					// text-align: center;
					padding: 10px;
					font-family: 'Baloo Bhai', cursive;
				}
			}
			.leave-teams {
				position: absolute;
				bottom: 5%; 
				left: 50%; 
				transform: translateX(-50%) translateY(-50%); 
				i {
					font-size: 40px;
					// color: #ABABAB;
				}
			}
		}
	}
	.right-content {
		padding: 25px;
		border-radius: 50px;
		// border-radius: 40px 50px 50px 40px;
		// border-radius: 0px 50px 50px 0px;
		background-color: #4E67EB;
		.main{
			h2{
				font-family: 'Permanent Marker', cursive;
			}
		}
	}
}
</style>
