import React, { useEffect, useState } from 'react';
import axios from 'axios';




// 1. 서버와의 통신 연결 쿼리문 보내고 응답받기 테스트(콘솔)
// 2. 컴포넌트 만들어서 분할하기
// 3. 요청 보내고 응답 부분 화면에 출력하기 


function App() {

  // 쿼리인 문자열부분 관리
  const [query, setQuery] = useState("");

  // 서버 응답 데이터 보여주는 부분 관리
  const [view, setView] = useState(null);
  const [status, setStatus] = useState('요청대기중');


  // Input창에 쿼리값 입력 후에 버튼을 누르면 
  // 쿼리값이 서버로 요청 되게 끔 한다.
  // useEffect(() => {


  // }, []);

  const queryRequest = () => {
    axios.post('http://localhost:5000/', query)
      .then(res => {
        console.log("Status", res.status);
        console.log("data", res.data);
        setView(res.data);
        setStatus(res.status);
      })
  }




  // Input창에 쿼리값(검색어 값) 입력 이벤트
  const inputQuery = (e) => {
    setQuery(e.target.value);

  }



  // input창에 쿼리로 보낼 데이터를 입력하고 
  // 버튼을 클릭하면 서버로 데이터 요청이 가고
  // 서버에서 응답한 json 데이터를 보여준다
  return (
    <div>
      <input type="search" value={query} onChange={inputQuery} />
      <button type='button' onClick={queryRequest}></button>
      <br></br>
      <br></br>
      <br></br>
      <h2>현재 요청 응답상태 :
        {status && status}


      </h2>

      {view &&
        <textarea rows={60} cols={80} value={JSON.stringify(view, null, 2)} readOnly={true} />

      }

    </div>
  )
}


export default App;