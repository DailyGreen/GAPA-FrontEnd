class LEFT_TYPE {
	constructor() {
		// 평상시 Idle 화면
		this.Explore = 0;
		this.Games = 1;			// 게임 목록들 보여주는 페이지
		this.GameRooms = 2;		// 어느 게임의 방 들
		this.GameUsers = 3;		// 어느 게임의 유저 들
		this.UserList = 4;
		// 채팅 화면
		this.Chat = 5;
		this.SearchUser = 6;	// 채팅 페이지에서 유저 찾는 페이지
		// 프로필 화면
		this.Profile = 7;			// Profile - Recent
		this.ProfileGames = 8;		// Profile - Games
		this.ProfileFollwers = 9;	// Profile - Followers
		this.ProfileFollowing = 10;	// Profile - Following
		this.Write = 11;
		// 방 생성 화면
		this.CreateRoom = 12;
		// 검색 기능 (아직 페이지 없음)
		this.Search = 4;
	}
	isIdleComponent(leftType) {
		return (this.Explore <= leftType && leftType <= this.UserList)
	}
	isProfileComponent(leftType) {
		return (this.Profile <= leftType && leftType <= this.ProfileFollowing)
	}
	isChatComponent(leftType) {
		return (this.Chat <= leftType && leftType <= this.SearchUser)
	}
}
class RIGHT_TYPE {
	constructor() {
		// 평상시 Idle 화면
		this.Idle = 0;
		this.GameInfo = 1;
		// Idle 화면에 있는 알림 화면
		this.Notice = 2;
		// 채팅 화면에 보여주는 유저 목록
		this.UserList = 3;
		// 프로필 화면
		this.Profile = 5;
		// 프로필 내 게시글 작성 화면
		this.Write = 6;
		// 방 생성 화면
		this.CreateRoom = 7;
		// 검색 기능 (아직 페이지 없음)
		this.Search = 4;
	}
	isIdleComponent(rightType) {
		return (this.Idle <= rightType && rightType <= this.GameInfo)
	}
}

export { LEFT_TYPE, RIGHT_TYPE };