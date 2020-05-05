<p align="center">
    <img src="gapa_project.png" width=500/>
</p>
<p align="center">
    <strong>게임 파티 찾아주기</strong>
</p>

# Dev (개발 메모)
[TODO - Drive](https://docs.google.com/document/d/1ThtNlaxVdBlL2ThwG41KtXHospNcx3J7zJRBf6-axwY/edit)
## 개발환경
#### Frontend
- Vue.js (v2.6.10)

#### Backend
- Express (v4.16.1)


#### 환경설정
```
npm install
cd eon-backend
npm install
cd ..
cd eon-frontend
npm install
cd ..
npm run start
```

> concurrently 이용해서 백엔드와 프론트엔드를 동시 시작함

## goorm.ide 환경 설정
:8080 포트 - 프론트엔드

> [https://gapaclient.run-us-west2.goorm.io/](https://gapaclient.run-us-west2.goorm.io/)

:3000 포트 - 백엔드

> [https://gapaserver.run-us-west2.goorm.io](https://gapaserver.run-us-west2.goorm.io)

### 모듈 다운 

`npm install`

### 실행 

`npm start`

## git
 `git branch ***` : *** 브랜치 생성

 `git checkout ***` : *** 브랜치로 이동

 `git merge ***` : *** 브랜치 가져와서 병합

 `git branch -d ***` : *** 브랜치 삭제

 [참고:Git 브랜치 - 브랜치와 Merge의 기초](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge%EC%9D%98-%EA%B8%B0%EC%B4%88)

## branch
 `origin/master` : 최종 확인 되면 올리기

 `/develop` : 개발 할때 사용

 `/environment` : 환경 설정 | 모듈 추가 등..

 `/bug` or `/iss#123` : 버그 수정 또는 이슈 해결 
 
    ex) Issue#423 해결시 : `iss#423` 브런치 생성 -> add,commit -> push -> branch -d(브런치 삭제)

# 프로젝트
![img](https://avatars0.githubusercontent.com/u/40048911?s=200&v=4)

[DailyGreen](https://github.com/DailyGreen) 초록초록프로젝트

# LICENSE

