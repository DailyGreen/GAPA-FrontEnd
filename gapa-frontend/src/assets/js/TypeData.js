class LEFT_TYPE {
	constructor() {
		this.Explore = 0;
		this.Games = 1;			// 게임 목록들 보여주는 페이지
		this.Chat = 2;
		this.SearchUser = 3;	// 채팅 페이지에서 유저 찾는 페이지
		this.UserList = 4;
		this.GameRooms = 5;		// 어느 게임의 방 들
		this.GameUsers = 6;		// 어느 게임의 유저 들
		this.Profile = 7;			// Profile - Recent
		this.ProfileGames = 8;		// Profile - Games
		this.ProfileFollwers = 9;	// Profile - Followers
		this.ProfileFollowing = 10;	// Profile - Following
		this.Write = 11;
		this.CreateRoom = 12;
		this.Search = 4;
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
		this.Idle = 0;
		this.Notice = 1;
		this.GameInfo = 2;
		this.UserList = 3;
		this.Search = 4;
		this.Profile = 5;
		this.Write = 6;
		this.CreateRoom = 7;
	}
}

export { LEFT_TYPE, RIGHT_TYPE };