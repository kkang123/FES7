// 1

var hello = "hello";


console.log(hello) //hello라는 로그가 찍힘

// 실행 방법 터미널에서 해당 파일 이름을 적어주면 된다.
// node ./20230830/001_var.js


// 2

function sayHello(){
    var hello = 'hello hello';
    console.log(hello);
}

sayHello();


// 3

if(true) {
    var hello = "hello hello hello"
}

console.log(hello) //1에 있는 hello가 변경됨

// 코드 순서에 따라 적용됨




// 4

var hello = "hello"
var hello = "hello hello"

console.log(hello); //hello hello