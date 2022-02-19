import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataHandle from './components/DataHandle';
import AladinData from './components/AladinData';
import './App.css';


// 테스트용 json
import JsonFile from './Doc/testData.json';
import SearchBar from './components/SearchBar';








// 1. 서버와의 통신 연결 쿼리문 보내고 응답받기 테스트(콘솔)
// 2. 컴포넌트 만들어서 분할하기
// 3. 요청 보내고 응답 부분 화면에 출력하기 


function App() {


  // 쿼리인 문자열부분 관리
  const [query, setQuery] = useState("");

  // 서버 응답 데이터 보여주는 부분 관리
  const [view, setView] = useState(JsonFile);

  // 이중배열인 데이터 관리 해주기 위한..(수정가능)
  const [book, setBook] = useState(null);


  const [status, setStatus] = useState('요청대기중');
  const handleReset = () => {
    setQuery("");
  };




  // Input창에 쿼리값 입력 후에 버튼을 누르면 
  // 쿼리값이 서버로 요청 되게 끔 한다.
  // useEffect(() => {


  // }, []);

  // Input창에 쿼리값(검색어 값) 입력 이벤트
  const inputQuery = (e) => {
    setQuery(e.target.value);

  }


  const queryRequest = () => {
    axios.post('http://localhost:5000/yes24', {
      query: query
    })
      .then(res => {
        console.log("Status", res.status); //200
        let resData = res.data;
        console.log("data", resData);  //[[{}],[{}]] 형태

        // setView(resData[0]);
        // setView(resData[1]);
        setView(resData[0]);
        setBook(resData[1])
        setStatus(res.status);
        handleReset("");
      })
  };

  // function handleSubmit(e) {
  //   console.log("handle");
  //   console.log(e.target);
  //   e.preventDefault();


  // }





  // input창에 쿼리로 보낼 데이터를 입력하고 
  // 버튼을 클릭하면 서버로 데이터 요청이 가고
  // 서버에서 응답한 json 데이터를 보여준다
  return (
    <div className='bg-red-100 py-4'>
      {/* <input type="search" value={query} onChange={inputQuery} /> */}

      {/* <form className='search'
        onSubmit={handleSubmit}> */}


      <div class="container h-20 flex justify-center items-center">
        <div class="relative">
          <div class="absolute top-4 left-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
          <SearchBar
            value={query}
            onChange={inputQuery}
            onKeyPress={queryRequest
            }
          />
          {/* <input type="text"
          className='search_bar'
          value={query}
          onChange={inputQuery}
          
        /> */}

          <div class="absolute top-2 right-2">
            <button class="h-10 w-20 text-white rounded-lg bg-blue-300 hover:bg-black"
              type='button'
              onClick={queryRequest}>
              Search</button>
          </div>
        </div>
      </div>


      {/* </form> */}


      {/* <button onClick={onReset}>Reset</button> */}

      <br></br>
      <br></br>
      <br></br>
      <h2 className='text-5xl font-bold underline'>현재 요청 응답상태는?: response:
        {status && status}
      </h2>
      <br></br>
      <br></br>
      <br></br>


      <div>


        <button onClick={handleReset}>초기화</button>

      </div>

      {/* tailwind grid 스타일 적용 */}
      <div className='grid grid-cols-2'>
        {/* left */}
        {(book !== null)
          ?
          <div className="md-full mx-auto px-4 m-3">
            알라딘
            {/* {console.log("여기서1", view)} */}
            {book && book.map(item => (
              <AladinData book={item} key={item.id} />
            ))}
          </div>
          : <div className="md-full mx-auto px-4 m-3">
            yes24
            {view && view.map(item => (

              <DataHandle view={item} key={item.id} />
            ))}

          </div>
        }








        {/* right */}
        <div className="md-full mx-auto px-4 m-3">
          yes24
          {view && view.map(item => (

            <DataHandle view={item} key={item.id} />
          ))}

        </div>
      </div>
    </div >
  )
}


export default App;





// 서치바 컴포넌트 수정
// 현재 전송 뒤에 input창 정리 되지 않음
// 컴포넌트 적용안하고 그냥 input시에는
//input 창 정리됨