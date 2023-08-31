const multer = require("multer");

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "public/images/")
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    },
});
// 암호화된 코드를 알아 볼 수 있는 이름으로 바꿔줌




// const upload = multer({dest:"uploads/"});
// dest 목적지

const upload = multer({storage : storage});

// 외부파일에서도 사용할 수 있게 만들어주기
module.exports = upload;