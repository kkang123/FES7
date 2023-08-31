var express = require('express');
var router = express.Router();

// 모듈
const loginCheck = require("../module/loginCheck");
const upload = require("../module/ImageUpload");


// 기존 코드
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;



// 1
// 출력 방법
/*
router.post("/main", (req, res) => {
  // console.log(req.body);
  const data = req.body.data;
  // 1. res.send("문자열이 응답합니다!");

  // 2. json 객체 응답하는데 사용
  // res.json({
  //   message : 'json 응답',
  // });

  // 3. 사용자들이 볼 수 있는 view 파일들을 적어주면 코드를 보여준다.
  res.render('index');
});
*/

// module.exports = router;


// req.body 브라우저에서 데이터를 입력 받으면 전송 받아서 저장한다.



// 2
// method
/*

// GET method
router.get('/read', (req, res) => {
  res.status(200).json({
    message : "read success"
  });
});



// postman에서 get[http://localhost:3000/read]

// { message : "read success" }호출됨





// POST method

router.post('/create', (req, res) => {

  // 데이터를 받는 코드(req.body에 요청)
  // console.log(req.body)
  // const data = req.body.data;
  const {data} = req.body; //비구조할당
  array.push(data);
  res.status(200).json({
    message : "create success",
    result: arr,
  });
});
// 입력 받았던 "data" : "one"과 함께 message : "create success" 출력
// 추가적으로 빈 배열을 쓰고 있기 때문에 저장했다가 새로 고침하면 one은 날라간다.





// method post로 변경 [http://localhost:3000/create]

// tpye raw:json 변경 후
// { "data" : "one"}
// 추가


// PUT method

// update/0 몇 번째인지 명시
// update/2 배열 안에서 2번 째


router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  //console.log(id); //콘솔 창에 id값이 명시

  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message : "update success",
    result : arr,
  });
});


// put:
// /update/:id
// 콘솔창에 id창이 뜬다.
// post로 생성된 배열안에 값을 put으로 변경해준다.



// DELETE method

router.delete("/delete/:id", (req, res)=> {
  const { id } = req.params;
  arr.splic(id, 1);
  res.status(200).json({
    message : "update success",
    result : arr,
  });
});


// DELETE : http://localhost:3000/delete/1

// 1번 배열 안에 값을 삭제


// module.exports = router;


*/



// 3
// 미들웨어


// 모듈화
/*
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
*/

router.get('/', loginCheck, (req, res) =>{
    res.status(200).json({
      message : "login success!!",
    });
});

// req가 들어오면 loginCheck 함수가 실행된다.










// multer
router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message : "upload success!!"
  });
});

module.exports = router;