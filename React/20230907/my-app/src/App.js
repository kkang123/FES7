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
