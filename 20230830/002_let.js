// 1

// let hello = "first hello";
// hello = "second hello";

// console.log(hello);

// 재정의 가능

// 변수명에 let let을 중복 선언은 불가능
// let hello = "first hello";
// let hello = "second hello";


// 2

let hello = "first hello";

if(true){
    let hello = "second hello";
    console.log(hello);
}

console.log(hello);

// var 다른 점 중괄호 스코프를 가지고 있고 값을 재정의 할 수 있다.