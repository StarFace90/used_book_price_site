import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


// 각각 알라딘과 yes24의 더미 json 파일
import JsonYes24File from '../Doc/testYesData.json';
import JsonAlFile from '../Doc/testAlandin.json';
import ApiHandle from './ApiHandle';



// api 요청테스트를 위한 검색창 & api 요청 같이(이후에 컴포넌트로 분리)
const SearchBar = (props) => {
    // 검색창에 입력될 쿼리문 => 서버로 보내진다 => 서버에서 쿼리를 받고 원하는 데이터 검색
    // 검색창에는 처음에 빈 칸이므로 useState에는 빈 문자열
    const [query, setQuery] = useState('');
    const [apiData, setApiData] = useState(null);

    //  const [sendQueryData, setsendQueryData] = useState('');

    console.log("app으로 가져온 props", props);




    // 서버에서 받아온 데이터를 App.js로 끌어올리기 
    const getApiData = apiData
    props.onLiftState(getApiData);



    const setsendQueryData = async (data) => {
        const inputQuery = data;
        console.log("요청할 데이터", inputQuery);
        await axios.post('http://localhost:5000/api', {
            searchData: inputQuery
        }).then(async (res) => await res.data)
            .then((result) => setApiData(result))
            .catch((err) => console.log(err));
    }


    // 검색창에 입력될 입력값 관리
    const queryInputHandler = (e) => {
        setQuery(e.target.value);
    };


    // enter키 함수 
    const eventFunEnterKey = (e) => {
        if (e.key === 'Enter') {
            console.log('엔터키 발동');

            // enter 후에 기존 검색창에 남아있는 검색어 삭제
            submitHandler(query);
            setQuery('');
        }
    }

    // 검색어 query제출을 위한 form Submit 함수
    const submitHandler = (e) => {
        e.preventDefault();
        // 검색어에 입력된 데이터를 searchQuery로 명명
        let searchQuery = query;
        setsendQueryData(searchQuery);
        //searchQueryToApi(searchQuery);
        setQuery('');

    }

    return (
        // searchbar부분


        <div class="container h-20 flex justify-center items-center">
            {/* <ApiHandle onSave={test}></ApiHandle> */}
            <div class="relative">
                <div class="absolute top-4 left-3">
                    <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                        value={query}
                        onKeyPress={eventFunEnterKey}
                        onChange={queryInputHandler}
                    />
                    <div class="absolute top-2 right-2">
                        <button class="h-10 w-20 text-white rounded-lg bg-blue-300 hover:bg-black"
                            type='submit'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>



    );
}

export default SearchBar;