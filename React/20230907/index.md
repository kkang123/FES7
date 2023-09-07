## React Project 생성하기

npx create-react-app my-app

- + Node 14.0.0 이상 그리고 npm 5.6 이상의 버전을 필요로 합니다!  npx는 npm의 도구이며 npm 5.2.0 이상에서 지원합니다. 
(npx는 npm package execute의 약자이며 설치 후 실행까지 담당합니다. create-react-app은 react-app 초기세팅을 편하게 해주기 위한 node 라이브러리입니다. 일일이 하나씩 모듈이나 환경을 설치하거나 세팅하지 않아도 되는 장점이 있죠.


### cd my-app 이동 후
### npm start

를 해야 실시간으로 서버에 수정한 내용이 적용된다.



```js
function App() {
  return (
    <h1>안녕 라이캣!</h1>
    <h1>안녕 라이캣!</h1>
  );
}

export default App;
//에러가 뜬다

div로 묶어주면 해결 가능


function App() {
  return (
    <div>
    <h1>안녕 라이캣!</h1>
    <h1>안녕 라이캣!</h1>
    </div>
  );
}

export default App;


```
- 문제가 있는 부분은 이렇게 알림을 주는데요. JSX로 표현할 때에는 하나의 부모만 가질 수 있습니다. 즉, 최상위에는 한 개의 태그만 있어야 한다는 것입니다. 아래와 같이 코드를 수정하면 잘 실행되는 것을 확인할 수 있습니다.

# 주석은 중괄호로 감싸주고 {/* */}를 해야 주석처리가 된다.




# 처음 코드
```js
import './App.css';

function App() {
  // js코드 jsx에서는 쓰면 안됨
  const name = '라이켓'

    function 함수() {
      return '함수';
    }
    
    const someStyle = { backgroundColor: "yellow", color: "white" };

    let now= new Date();



  return (
    <div>
    <h1 className="h1">안녕 {name}!</h1>
    {/* <h1 className="h1">안녕 {[1, 2, 3].map(x => x ** 2)}!</h1> */}
    {/* <h1 className="h1">안녕 {함수()}!</h1> */}
    <h1 className="h1">안녕 {함수() ? '함수' :'JSX'}!</h1>
    {/* */}
    <h1 className='newClass'>안녕 라이켓! 1호</h1>
    <h1>안녕 라이켓! 2호</h1>
    {/* <input type="text" maxLength={false} /> */}
    {/* <input type="text" disabled={true} /> */}
    {/* <input type="text" disabled={false} /> */}

    {/* 자바스크립트 객체로 표현 */}
    {/* <input type="text" style={{backgroundColor:"red"}} /> */}
    <input type="text" style={{someStyle}} />

  
    <div style={{backgroundColor : "black"}}>
    <h1 style={{color: "red"}}>년 : {now.getFullYear()}</h1>
    <h1 style={{color:"white"}}>월/일 : {now.getMonth()+1}/{now.getDate()}</h1>
    <h1 style={{color:"white"}}>시간 : {now.getHours()}시{now.getMinutes()}분{now.getSeconds()}초</h1>
    </div>

    </div>
  );
}


export default App;

```


# 시간 날짜 관련

```js
import './App.css';

function App() {

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 style={{ color: 'red' }}>년 : {year}</h1>
      <h2>월/일 : {month + 1}/{date}</h2>
      <h3>시간 : {hour}시 {min}분 {sec}초</h3>
    </div>
  );
}

export default App;

```