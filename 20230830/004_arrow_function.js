// 1

// const foo = () => {
//     console.log("arrow function");
// };

// 변수를 만들고 괄호(매개변수) 받고 => 한 후에 중괄호 해준 뒤 안에 코드를 작성하면 됨


/*
function foo() {
    console.log("arrow function")
}

foo();
*/

// 위의 화살표함수와 동일한 코드



// 2


// const foo = (x) => {
//         return x
//     };


// console.log(foo("arrow"));


// 매개변수가 하나 일 때는 소괄호 생략 가능
// 함수가 바로 리턴하게 된다면 줄괄호를 생략 가능



// 3 매개변수가 2개

// const foo = (x, y) => x + y;
// console.log(foo(1, 5));


// 4

const foo = (x , y) => {
    console.log("2줄 이상");
    return x + y
};

console.log(foo(1, 5));