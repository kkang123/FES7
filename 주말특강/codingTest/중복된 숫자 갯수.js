// 중복된 숫자 개수
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583

// 1
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

// 2
function solution(array, n) {
  let count = 0;
  for (num of array) {
    if (num === n) {
      count += 1;
    }
  }
  return count;
}

// 3
function solution(array, n) {
  let count = 0;
  for (num of array) if (num === n) count += 1;
  return count;
}
