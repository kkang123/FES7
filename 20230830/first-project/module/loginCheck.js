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
    
    // router.get('/', loginCheck, (req, res) =>{
    //     res.status(200).json({
    //     message : "login success!!",
    //     });
    // });
    
  // req가 들어오면 loginCheck 함수가 실행된다.

//index.js 파일에서 사용할 수 해줘야하기 때문에
module.exports = loginCheck;
// 를 사용해서 외부파일에서 사용할 수 있게 해준다.