// 1

/*
const object = { a: 1, b : 2};

const a = object.a;
const b = object.b;

console.log(a); // 1
console.log(b); // 2
*/

//  위 코드는 비효율적 그래서 생긴게 비구조화할당


// 2 비구조화 할당
// const object = { a: 1, b : 2};

// const {a, b} = object

// console.log(a); // 1
// console.log(b); // 2


// 3 배열 적용
const array = [1, 2];

const[one, two] = array;

console.log(one); // 1
console.log(two); // 2

// 결론 : 비구조화 할당은 객체나 배열 안에 있는 값들은 변수 혹은 상수 안에 쉽게 선언할 수 있도록 해준다.