// ejs 추가 코드
const express = require("express");
const router = express.Router();

router.get("/ejs", (req, res) =>{
    // res.render("template");
    res.render("template", { data : "test data" });
    // 변수 출력 <%= data %>
});


// 외부 파일 사용을 위해
module.exports = router;