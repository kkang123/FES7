import Hello from "./components/Hello";
import HelloProps from "./components/HelloProps";
import Time from "./components/Time";
import Resume from "./components/Resume";
import ColorText from "./components/ColorText";

/*
컴포넌트 폴더로 모듈화


function HelloProps(props) {
  console.log(props);
  return (
    <>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong> you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </>
  )
}



// function Licat(props) {
function Hello(props) {
  console.log(props);
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  return(
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {name} 라이캣 2호!</h1>
      <div className="newClass"/> 
    </div>
  )
}


function Time(props) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return(
    <div style={{backgroundColor:"black", color:"white"}}>
      <h1 style={{color:'red'}}>년 : {year}</h1>
      <h1>월/일 : {month}/{date}</h1>
      <h1>시간 : {hour}시 {min}분 {sec}초</h1>
    </div>
  ) 
}

*/


function App() {
  // 위 함수로 옮김(분리)
	// const name = '라이캣!';
  // const someStyle = {backgroundColor:"black", color:"white"};
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth()+1;
  // const date = today.getDate();
  // const hour = today.getHours();
  // const min = today.getMinutes();
  // const sec = today.getSeconds();

  return (
    <div>
      {/* <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div> */}
      <Hello name = "gary"/>
      {/* 오브젝트 값이 gary로 뜬다. */}

      {/* <Licat name = {1}/> */}
      <Time />
      <HelloProps name="jaehyun" age={15} someFunc={() => 'aswesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>

          <ColorText color="red"/>
          <ColorText color="green"/>
          <ColorText color="blue"/>
    </div>
  );
}

export default App;