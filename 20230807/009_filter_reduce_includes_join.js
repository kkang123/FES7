// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((item) => item % 2 === 0);


// filtersms return 값이 true인 것만 모아서 새로운 배열을 만든다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return true
})
result


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return false
})
result


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v > 5
})
result



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v % 2 !== 0
})
result

// filter는 메서드 체이닝으로 많이 사용된다.

// reduce 누산(앞의 값과 현재 값을 누적)
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0) // 암기코드(error 방지)
[10, 20, 30, 40, 50].reduce((a, c) => a + c)
[10, 20, 30, 40, 50].reduce((a, c) => {
    console.log(a, c)
    return a + c
})
// 10 20
// 30 30
// 60 40
// 100 50
// 150

// 파라미터 이름은 자유롭게 지정할 수 있습니다.
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지 입니다.
[10, 20, 30, 40, 50].reduce((ho, jun) => {
    console.log(ho, jun)
    return ho + jun
})


// includes
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('jun')

// join(***)
let arr = ['hello', 'world', 'hojun']
arr.join('!')

let arr = ['hello', 'world', 'hojun']
arr.join(' ')

let arr = ['010', '5044', '2903']
arr.join('-')

let arr = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr.join('\n')
console.log(arr.join('\n'))

let arr = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr.join('<br>')
console.log(arr.join('<br>')) // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr.join('<br>'))

// reverse
[10, 20, 30].reverse() // [30, 20, 10]