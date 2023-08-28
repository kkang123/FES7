// dom에서 path 찾기
const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();

// dash 의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
// 현재 스크롤의 위치
const scrollTop = document.documentElement.scrollTop;

// 전체 스크롤의 길이
const scrollHeight = document.documentElement.scrollHeight;

// 뷰포트의 높이
const clientHeight = document.documentElement.clientHeight;

// 스크롤의 위치 => % 0 - 1 의 값을 가짐
// 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼줌.
const scrollPercentage = scrollTop / (scrollHeight - clientHeight)

const drawLength = pathLength * scrollPercentage;

// pathLength -> 0
path.style.strokeDashoffset = pathLength - drawLength;


// button opacity 조절 0 - 1
openBtn.style.opacity = scrollPercentage;

if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
} else {
    openBtn.disabled = true;
}
}
window.addEventListener('scroll', scrollHandler)




/*
// dom에서 path 찾기
const path = document.querySelector('#path');

// console.log(path);

//path의 전체 길이 구하기
const pathLength = path.getTotalLength();



// dash 의 길이와 공백
// 공백은 빈칸 의미(2507하면 꽉참)
// path.style.strokeDasharray = 1500 + " " +1500;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
console.log(pathLength); //2507.61328125

// dash를 어디서부터 그릴지
path.style.strokeDAshoffset = pathLength;

console.log('전체 path 길이:', pathLength)

// console.log(innerHeight, outerHeight)
// console.log('clientHeight', document.documentElement.clientHeight)
// console.log('scrollHeight', document.documentElement.scrollHeight)

function scrollHandler(){
    // 현재 스크롤의 위치
    // console.log(document.documentElement.scrollTop);
    const scrollTop = document.documentElement.scrollTop;

    // 전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;

    // 뷰포트의 높이
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤의 위치 => % 0 - 1 의 값을 가짐
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight)

    const drawLength = pathLength * scrollPercentage;

    console.log(drawLength)
}

window.addEventListener('scroll', scrollHandler)

*/

