import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [page,setPage]=useState(true);
  const handlePage = ()=>{
    setPage((prevPage)=>{
      return !prevPage
    })
  }
  const getMyinfo = ()=>{
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(
      //빈칸
      ,{
      //빈칸
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  }
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
      {
      page?
      <LoginPage handlePage={handlePage}/>:<JoinPage handlePage={handlePage}/>
      }
    </div>
  );
}
export default App;