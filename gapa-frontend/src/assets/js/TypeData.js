class LEFT_TYPE {
	constructor() {
		this.Explore = 0;
		this.Games = 1;			// 게임 목록들 보여주는 페이지
		this.Chat = 2;
		this.UserList = 3;
		this.Search = 4;
		this.GameRooms = 5;		// 어느 게임의 방 들
		this.GameUsers = 6;		// 어느 게임의 유저 들
		this.Profile = 7;			// Profile - Recent
		this.ProfileGames = 8;		// Profile - Games
		this.ProfileFollwers = 9;	// Profile - Followers
		this.ProfileFollowing = 10;	// Profile - Following
		this.Write = 11;
	}
	isProfileComponent(leftType) {
		return (this.Profile <= leftType && leftType <= this.ProfileFollowing)
	}
}
class RIGHT_TYPE {
	constructor() {
		this.Idle = 0;
		this.Notice = 1;
		this.GameInfo = 2;
		this.UserList = 3;
		this.Search = 4;
		this.Profile = 5;
		this.Write = 6;
	}
}

export { LEFT_TYPE, RIGHT_TYPE };