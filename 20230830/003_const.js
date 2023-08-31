// 재정의 할 수 없는 선언 방식

// 1

// const hello = "frist hello";
// hello = "second hello";

// console.log(hello);

// 에러 발생


// 2

const hello = "frist hello";

if(true) {
    const hello = "second hello";
    console.log(hello);
}

console.log(hello)


// 중괄호 안에 있는 const hello는 밖에 있는 const hello와 다른 것이기 때문에 에러가 안난다.