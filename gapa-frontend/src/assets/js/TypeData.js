class LEFT_TYPE {
	constructor() {
		this.Explore = 0;
		this.Games = 1;			// 게임 목록들 보여주는 페이지
		this.Chat = 2;
		this.UserList = 3;
		this.Timeline = 4;
		this.Search = 5;
		this.GameRooms = 6;		// 어느 게임의 방 들
		this.GameUsers = 7;		// 어느 게임의 유저 들
	}
}
class RIGHT_TYPE {
	constructor() {
		this.Idle = 0;
		this.Notice = 1;
		this.Profile = 2;
		this.GameInfo = 3;
		this.UserList = 4;
		this.Search = 5;
	}
}

export { LEFT_TYPE, RIGHT_TYPE };