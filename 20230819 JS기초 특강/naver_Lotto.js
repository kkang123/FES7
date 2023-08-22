// 1-1 네이버 홈페이지에 있는 로또 번호 바꾸기
// 네이버 로또 검색
// 자바스크립트로 첫번째 로또 공의 숫자 바꾸기


// (콘솔창에 입력)


// 첫번째 로또 공 dom 요소 가져오기
const ball1 = document.querySelector('#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)');

console.dir(ball1); // 첫번째 로또 공(ball1)의 개체의 속성
ball1.innerHTML // 첫번째 로또 공의 속성 중 text 가져오기 (HTML 요소)
ball1.innerHTML = 10; // ball1의 text 바꾸기


// ----------------------------
// 함수로 만들기
function 첫번째공바꾸기(numStr){
    const ball1 = document.querySelector('#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)');
    ball1.innerHTML = numStr;
}

첫번째공바꾸기(3); // 첫번째 로또 공의 글자를 3으로 바꾸기


// 1-2 첫번째 로또 공을 클릭해서 숫자 바꾸기
// - 순서

//  (1) 로또 공을 클릭하는걸 인식해야함

//  (2) 그리고 인식이 되면 만들어둔 함수에 값을 입력할수도 있어야함

//  (3) 값을 입력하면 화면의 공 숫자가 바뀜

// - 마우스로 클릭하고 프롬프트로 입력을 받아 로또 공의 숫자 바꾸기

// 로또 공을 클릭하는 걸 인식해야함
// 그리고 인식이 되면 만들어둔 함수에 값을 입력할수도 있어야함
// 값을 입력하면 화면의 공 숫자가 바뀜

const ball1 = document.querySelector('#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)');

function 클릭했을때() {
    const numStr = prompt("로또번호를 입력하세요");
    ball1.innerHTML = numStr;
}

ball1.addEventListener("click",클릭했을때); // 첫번째 공 클릭하고 숫자넣으면 바꾸기

// 로또의 첫번째 공을 클릭하면 프롬프트가 뜬다.



// 2. 조건문
// 아보카도 조건문
let 아보카도 = true;

if(아보카도) {
    console.log("아보카도 있었어(우유 6개 구매)");
} else {
    console.log("아보카도 없었어(우유 1개 구매)")
} //아보카도 있었어 (우유 6개 구매)

function 여보우유사와() {
    아보카도개수 = prompt("아보카도 몇개?");
    if(Number(아보카도개수)>0){
        console.log("아보카도 있었어 (우유 6개 구매");
    } else {
        console.log("아보카도 없었어 (우유 1개 구매)");
    }
}

여보우유사와();



// 3. 반복문

// 3-1 for문
// 구구단 구현
let str = '';

for (let i=1; i<10; i++) {
    for(let j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

console.log(str);


// 3-2. while 문

// - 조건식은 코드블럭({})이 실행되기 전에 평가된다.

// - while 문으로 구구단 구현히기

// 1부터 9까지 수에 9를 곱합니다.
// 9에 어떤 수를 곱할 것입니다.
// 어떤 수는 1부터 시작하고, 1씩 증가하여 10보다 작을때 증가가 멈춥니다.
// 이렇게 어떤수와 9를 곱한 값을 출력합니다.

let i = 1;

while (i<10) {
    console.log(9*(i++));
    // i++
}





// 3-3. 배열의 반복 메소드 : arr.map()

// - map 메소드의 원리 (**************)

// - 배열요소 각각에 대해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

const arr = [1,2,3,4,5,6,7,8,9];
for (let index = 0; index < 9; index++) { // 구구단 (9단)
    console.log(arr[index]*9);
}

for (let index = 0; index < 9; index++) {  // mapping 해서 새로운 배열 변환
    arr[index] = arr[index]*9;
}
const arr = [1,2,3,4,5,6,7,8,9];

function 곱하기구해주는함수(num) { // 9를 곱해주는 함수
    return num*9;
}

arr.map(곱하기구해주는함수) // 콜백함수로 mapping 해주는 함수
const arr = [1,2,3,4,5,6,7,8,9];

arr.map(function(num){
    return num*2;
})

// [2, 4, 6, 8, 10, 12, 14, 16, 18]
// 배열의 map 메소드는 값을 하나씩 던저주는 애다.
const arr = [1,2,3,4,5,6,7,8,9];

arr.map(function (num,index,arr) {
	console.log(num,"현재값입니다.");
    console.log(index,"인덱스입니다.");
	console.log(arr,"배열입니다.");
})

arr.map(console.log);
// num index arr가 들어간다.
// 1 0 (5) [1, 2, 3, 4, 5]
// 2 1 (5) [1, 2, 3, 4, 5]
// 3 2 (5) [1, 2, 3, 4, 5]
// 4 3 (5) [1, 2, 3, 4, 5]
// 5 4 (5) [1, 2, 3, 4, 5]