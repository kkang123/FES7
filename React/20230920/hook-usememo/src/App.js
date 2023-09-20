// import React, { useState, useEffect } from 'react';//useEffect추가

// function Counter() {
//   const [count, setCount] = useState(0)
//   const countUp =()=>{
//     setCount(count+1)
//   }
//     //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
//   useEffect(() => {
//     if(count%2){
//       alert("홀수입니다")
//     }else{
//       alert("짝수입니다")
//     }
//   }, [count])
//   return(
//     <>
//     <div>{count}</div>
//     <button onClick={countUp}>up!</button>
//     </>
//   )
// }
// function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   );
// }

// export default App;

import { useState, useMemo } from 'react'

function 부하() {
  // console.time();
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  // console.timeEnd();
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0); // 의존 배열 사용

  // useMemo를 사용하면 빠르다
  let result = useMemo(() => {
    return 부하();
  }, [countTwo]);


  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo);
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>
      <button onClick={handleCountUp}>UP!</button>
      <button onClick={handleCountUpTwo}>UP2!</button>
    </div>
  );
}
export default App;


// 실행속도가 1초씩이나 걸려서 느리다는 경고가 뜸