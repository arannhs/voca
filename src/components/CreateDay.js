import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export default function(){
  const days = useFetch(" http://localhost:3002/days");
  const history = useNavigate();

  function addDay(){
    fetch(`http://localhost:3002/days/`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        day : days.length +1 ,
      }),
    })
    .then(res => {
      if(res.ok){
        alert("생성이 완료 되었습니다.");
        history("/");
      }
    })
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  ) 
}