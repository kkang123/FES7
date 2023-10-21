function solution(array, height) {
  let answer = 0;

  array.forEach((item) => {
    if (item > height) {
      answer += 1;
    }
  });

  return answer;
}
