import React from 'react'
//import "../App"


// api 요청테스트를 위한 검색창
function SearchBar({ value, onChange, onKeyPress }) {

    console.log("입력값", value);


    return (

        <input type="text"
            className='search'
            value={value.query}
            onChange={onChange}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {

                    onKeyPress();
                    // e.preventDefault();
                }
            }}
        />

    );
}

export default SearchBar;