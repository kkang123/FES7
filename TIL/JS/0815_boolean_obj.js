// 원시 타입 (primitive data type)
// boolean
// null
// undefined
// number
// string
// symbol (ES6에서 추가)

// 객체 타입 (object/reference type)
// object

// -------------------------------------------------------

// Boolean

// Boolean이란, 불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.
// 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주

var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo); // boolean
console.log(typeof bar); // boolean



let value1 = 30;
let value2 = 50;

console.log(value1 > value2);  // false
console.log(value1 >= value2);   //false
console.log(value1 < value2);   // true
console.log(value1 <= value2);   // true
console.log(value1 == value2);   // false
console.log('----------');

value1 = 30;
value2 = '30';
console.log(value1 == value2);   //true(값만 비교)
console.log(value1 === value2);   // false(값 + 변수 타입까지 비교)
console.log('----------');


// NOT
console.log(value1 != value2);   // false
console.log(value1 !== value2);   // true

console.log('----------');
value1 = true;
value2 = false;
console.log(!value1);  // false  변수의 부정
console.log(!!value2); // 강조!! 정말 많이 사용합니다. 부정의 부정 // false

// 객체