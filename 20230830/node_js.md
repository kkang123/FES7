# node.js

## node.js 정상 설치 확인

터미널 -> node --version, npm --version

추가적인 extension
- ejs snippets(html 자동완성해주는 프로그램)
- material icon

`console찍기`
node (파일명)

## var, let ,const

var - function scope 
scope란 변수에 접근할 수 있는 범위

### 터미널에서 폴더만들기
1. mkdir js_test
2. cd js_test(이동)



### ES6 이후에 변수 선언 방식 추가
1. let 값을 재정의 할 수 있는 변수 선언 방식
2. const 값을 재정의 할 수 없는 변수 선언 방식


## Arrow funciont(화살표 함수)
function 키워드보다 간단히 함수 표현 가능


## 비구조화 할당
객체, 배열 안의 값을 추출해서 변수, 상수에 바로 선언하는 문법

## promise, anync, await

`자바스크립트의 큰 특징 - 비동기`
코드의 흐름을 기다리지않고 각자 수행해서 결과값을 끝나는대로 알려줌

동기는 task가 1, 2, 3 순서대로 실행되지만 비동기는 1, 2, 3이 동시에 작동하고 먼저 끝나는대로 출력해준다.



# Server

## Server란?
네트워크를 통해 클라이언트에 정보나 서비스를 제공  
컴퓨터 혹은 프로그램


웹사이트를 예로 들면

클라이언트는 서버에 요청
서버는 응답하여 클라이언트에 반환

`클라이언트의 요청에 대한 응답을 하는 역할`


## localhost
컴퓨터 내부 주소

localhost = 127.0.0.1 같은 의미
127.0.0.1 -> IP


## 포트(port)
서버내의 프로세스를 구분하는 번호

서버에서는 다양한 일을 처리한다.
(http, db등)


- localhost -> port -> server

### localhost
내부 컴퓨터 테스트용도 

### port
서버에 다양한 기능들을 처리할 수 있게 분리



# postman

- 서버 개발 시 이를 테스트할 수 있는 툴
- 브라우저가 한정적이고 서버 개발용도가 아니기 때문에 포스트맨을 사용해서 유용한 서버 개발 가능

### HTTP 메소드
1. GET 요청 (단순 페이지 열람)
2. POST (업로드)
3. PUT (업데이트)
4. DELETE (삭제)

그리고 url 통해 서버 접속
파라미터, 헤더, 바디 자주 사용


포스트맨에 가서
http://localhost:3000 작성하면
요청을 보낸다.


# API 서버

클라이언트가 서버에 요청을 보내면 서버가 클라이언트에 응답을 보낸다.



# npm

서버 구축할 때

처음부터 모든 것을 개발하면 비효율적

http 패키지를 사용 (다른 개발자가 만들어 놓은 패키지를 사용) -> 개발 시 효율적으로 개발 가능 및 도움을 준다.

방대한 패키지를 모아서 설치 / 관리 해줘야하지 않을까?
node package manger

node.js로 만들어진 패키지를 설치하고 관리해주는 툴

그것이 바로 npm

하지만 패키지를 설치하다 보면 100개 이상 패키지를 사용할 때 있는데 이를 서로 의존되는 패키지들 존재

패키지의 버전마다 기능이 다를 수 있는 문제가 발생 가능

설치한 패키지 버전을 관리해주는 것이 package.json이다.


`npm init`

## npm 사용 준비

Press ^C at any time to quit.
package name: (fes7) npm_test
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: kim
license: (ISC)
About to write to C:\Users\USER\FES7\package.json:

{
  "name": "npm_test",
  "version": "1.0.0",
  "description": "프론트엔드 스쿨 7기",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "kim",
  "license": "ISC"
}


Is this OK? (yes)

빈칸은 생략 가능


### `packge.json`

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    **"hello" : "echo hello"**
  },


- 터미널에서 npm run hello 입력하면 echo hello 출력
- json파일에서 주석 사용 불가능


### 서버 구축할 때 사용할 npm인 express 다운
`npm install express`
- node_modules 의존성 파일들이 존재

- -D 개발환경에서만 사용할 수 있는 패키지 다운 시 사용
- -g 글로벌 


# express, nodemon

## express

빠르고 간편한 웹 `프레임워크`
프레임 워크란 프로그램 만들기 위한 기본 툴
쳬계적인 코드관리
유지보수 용이


기존
1. req.url파싱
2. req.method 확인
3. 쿼리문 파싱

express
1. req.get('경로')
2. req.query로 확인


express-generator은 express를 간편하게 해줌
 
파일
- www
서버 실행할 때 사용하는 파일 포트번호 설정가능
- public
리소스 폴더 있고
- routes
페이지 라우팅과 관련된 파일 저장, 실제 서버 로직 작성
- views
템플릿 파일 - jade, ejs
- app.js
핵심적인 서버역할, 라우팅의 시작점
- package.json
의존성 관리 및 버전 관리

## `express --ejs first-project`
템플릿 타입 ejs 사용하겠다 명시
ejs가 html와 유사한 부분이 많아서 사용한다.
폴더 이름 [ first-project ]

이렇게 해서 폴더 생성




## `npm start`

<span style="color:red">

npm 환경 시작할 때 꼭 쓰기!!!!

</span>

작업은 views/index.ejs에서 이루어진다.

<span style="color:red">

`npm start` : **서버 실행**

</span>


http://localhost:3000/

Express  
Welcome to Express  
브라우저 상에 출력

<span style="color:red">

**서버 종료는 ctrl + c를 누른다.**

</span>



<span style="color:blue">

`nodemon ./bin/www` : 실시간으로 변경되는 것들 적용 시켜준다.

</span>


# routing

요청에 따라 처리해주는 것  
`app.js`

`index.js` 에서 코드 작성



# express에서 HTTP method

## GET
요청 받은 정보를 검색(read)하여 응답

## POST
요청된 자원을 생성

## PUT
요청된 자원을 수정

## DELETE
요청된 자원을 삭제






# 미들웨어

`req(요청) <-> res(응답)`
미들웨어란?, 이 사이에 위치해서 목적에 맞게 처리하는 함수들

ex) 로그인 체크 상황

- 3개의 요청 발생  

`"/create"`  
req -> res (loginCheck-1)

`"/delete"`  
req -> res (loginCheck-2)

`"/update"`  
req -> res (loginCheck-3)

이렇게 따로 따로 요청이 들어올 때마다 함수를 새로 작성하는 것은 비효율적이기 때문에

모든 요청이 들어왔을 때 한 번에 묶어서 수행하는 것을 <span style="color:red"> 미들웨어 </span>이라고한다.

- 미들웨어함수는 `app.js`에 작성함.
```js
// 미들웨어
app.use((req, res, next) => {
  console.log("middleware!!");
  next();
})

// 어떤 요청이 들어와도 해당 미들웨어 함수를 한 번씩은 실행하는 것
// 요청이 들어왔을 때 middleware!!라고 로그가 찍히고 next() 실행 뒤 다음 줄 코드로 넘어간다.




// 3
// 미들웨어

const loginCheck = (req, res, next) =>{
  const userLogin = true; //로그인 성공
  // const userLogin = false; //로그인 실패
  if(userLogin) {
    next();
  }else {
    res.status(400).json({
      message : "login fall!!",
    });
  }
};

router.get('/', loginCheck, (req, res) =>{
    res.status(200).json({
      message : "login success!!",
    });
});

// req가 들어오면 loginCheck 함수가 실행된다.
```

index.js에는 서버 로직만 작성해야해서 미들웨어 모듈을 만들어준다.


# multer

파일을 업로드할 때 유용한 패키지

upload.single("image"); 

`upload`  
파일 업로드 방식을 upload에 저장

`single("image")`  
파일1개 업로드 image라는 FormData 전송

FormData는 포스트맨에서 바디값에 form-data라고 있다.

업로드 된 파일은 req.file  
나머지 요청 데이터는 req.body 담긴다.

`npm install multer` install

post로 사진을 보내면 uploads라는 폴더 안에 암호화 된 사진이 생긴다.

한 눈에 알아보기 쉬운 파일 네임으로 바꿔야한다.

그래서 uploads 폴더를 삭제하고 모듈화한 `ImageUpload` 파일을 수정해주면 `public > images` 폴더 안에 암호화했던 사진이 들어 간 걸 확인 할 수 있다.




# EJS
자바스크립트가 들어간 템플릿

템플릿 엔진

js 안에 있는 코드를 html 즉 view파일 안에 사용하게 해주는 템플릿

동적 웹 페이지

javascript 변수를 view 파일 내에서도 사용가능

```ejs
<!-- js 코드 작성   -->

<% ... %>






<!-- 변수 출력 -->

<%= ... %>



template.js
<!-- 작성 코드 -->
res.render("template", { data : "test data" }); 


template.ejs
<!-- 작성 코드 -->
<%= data %>





ejs 분할

<!-- 반복코드들 -->
<!-- <% include 파일명 %> -->
```




# Express-session

로그인 기능 구현 가정

사용자 <-> 서버

통신 특성상 상태 저장은 안한다.

그래서 서버가 사용자가 로그인했는지 모르기 때문에 요청들을 거절한다.


- session
저장이 필요한 정보들은 서버에서 저장해서 연결상태를 계속 유지하게 해준다.


서버는 세션 안에 유저 정보를 가지고 있어서 기억한다.

`npm install express-session`


`app.js`  

---

`resave`  
// resave 세션을 변경하지 않아도 저장할지 말지 정해주는것
  // false 변경되지 않았을 때 저장하지 않는다.

`saveUninitalized`
saveUninitalized 세션을 저장하기 전에 이를 초기화할지 말지 정해주는 것


# DataBase

NoSQL

SQL

스키마