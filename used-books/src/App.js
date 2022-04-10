import React, { useEffect, useState } from 'react';
import Yes24Data from './components/Yes24Data';
import AladinData from './components/AladinData';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

// 테스트용 json
import JsonFile from './Doc/testYesData.json';
import JsonAlFile from './Doc/testAlandin.json';
import BookDataView from './components/BookDataView';



const App = (props) => {

  // yes24 데이터
  const [bookYes24, setBookYes24] = useState(JsonFile);

  // 알라딘데이터 
  const [bookAladin, setBookAladin] = useState(JsonAlFile[0]);


  const liftStateQueryApi = query => {
    console.log('lift!!!');

    // 서치바 컴포넌트로 부터 온 서버에서 제공받은 데이터
    console.log("SearchBar에서 올라온 서버데이터", query);

    // 쿼리에 데이터가 들어오면 
    // if (query !== null) {
    //   return pageNation(query);
    // }
  }


  // const dueApi = query => {
  //   setBook(query[0]);
  //   setView(query[1]);
  //   console.log("setBook", setBook);
  // }








  return (
    <div className='bg-red-100 py-4'>
      <SearchBar onLiftState={liftStateQueryApi} />

      {(((bookYes24 && bookAladin)) !== null)
        ? (
          <BookDataView
            yes24={bookYes24}
            aladin={bookAladin}
          />)
        : (
          <BookDataView
            yes24={bookYes24}
            aladin={bookAladin}
          />)}

      {/* 임시적으로 알라딘 데이터 넣어준다(길이는 같으므로) */}
      {/* <Pagination
          aladin={book}
          yes24={view}
          pageStatus={pageNation}
        ></Pagination> */}

      {/* 로딩 애니메이션 */}
      {/* <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div> */}
      {/* </div> */}
    </div >
  )
}


export default App;