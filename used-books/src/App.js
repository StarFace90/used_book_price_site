import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataHandle from './components/DataHandle';
import AladinData from './components/AladinData';
import './App.css';


// 테스트용 json
import JsonFile from './Doc/testYesData.json';
import JsonAlFile from './Doc/testAlandin.json';
import SearchBar from './components/SearchBar';


const App = () => {


  // yes24 데이터
  const [view, setView] = useState(JsonFile);

  // 알라딘데이터 
  const [book, setBook] = useState(JsonAlFile[0]);
  console.log("view", view);
  console.log(book);


  const liftStateQueryApi = query => {
    console.log('lift!!!');

    // 서치바 컴포넌트로 부터 온 서버에서 제공받은 데이터
    console.log("SearchBar에서 올라온 서버데이터", query);

    // 쿼리에 데이터가 들어오면 
    if (query !== null) {
      return dueApi(query);
    }
  }


  const dueApi = function (query) {
    console.log("ㅇㅁㄴㅇ", query);
    setBook(query[0]);
    setView(query[1]);
  }


  return (
    <div className='bg-red-100 py-4'>
      <SearchBar onLiftState={liftStateQueryApi} />

      {/* tailwind grid 스타일 적용 */}
      <div className='grid grid-cols-2'>
        {/* left */}


        {/* book에 데이터가 없으면 더미데이터가 나오고 그렇지 않으면 서버에서 받은 데이터가 나옴 */}
        {
          (book !== null)
            ?
            (
              <>
                <div className="md-full mx-auto px-4 m-3">
                  {book && book.map(item => (
                    <AladinData book={item} key={item.id} />
                  ))}
                </div>
                <div className="md-full mx-auto px-4 m-3">
                  {view && view.map(item => (

                    <DataHandle view={item} key={item.id} />
                  ))}
                </div >
              </>
            )
            :
            (
              <>
                <div className="md-full mx-auto px-4 m-3">
                  {book && book.map(item => (
                    <AladinData book={item} key={item.id} />
                  ))}
                </div>
                <div className="md-full mx-auto px-4 m-3">
                  {view && view.map(item => (

                    <DataHandle view={item} key={item.id} />
                  ))}
                </div >
              </>)
        }



        {/* 로딩 애니메이션 */}
        {/* <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div> */}
      </div>
    </div >
  )
}


export default App;