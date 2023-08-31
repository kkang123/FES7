// 1

// const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : " text/html"});
//     res.end("<p>Hello World~!!!</p>");
// }).listen(3000, () => {
//     // 3000번 포트
//     console.log("3000번 포트 서버 접속 완료")
// });

// http 패키지를 사용하겠다는 코드
// require는 해당 패키지를 사용할 수 있게 불러온다.
// req 요청
// res 응답
// 정상 응답은 200
// 404는 응답이 잘 안됐을 때


// 2


const http = require("http");

http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200); // 응답을 보냈을 때 정상적으로 작동한다면 200을 반환
        res.end("main url");
    }else if (req.url === "/upload") { 
        res.writeHead(200);
        res.end("upload url");
    } else if (req.url === "/delete") {
        res.writeHead(200);
        res.end("delete url");
    } else {
        res.writeHead(404);
        res.end("Not found!!!");
    }
})
.listen(3000, () => {
    // 3000번 포트
    console.log("3000번 포트 서버 접속 완료")
});

// http 서버를 쉽게 구축할 수 있게
// createSever는 서버를 생성하고 콜백함수로 요청과 응답을 받게해주고
// listen은 서버를 다 만들고 3000번 포트에서 대기하는 코드


// 포스트맨에 실행시
// if(req.url === "/")
// http://localhost:3000

// else if (req.url === "/upload") 
// http://localhost:3000/upload
// upload url 응답 반환