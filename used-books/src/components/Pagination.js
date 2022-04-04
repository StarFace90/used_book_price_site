import React, { useState } from 'react';
import './pageNation.css';

// 필요한 것 [이전버튼][페이지들 버튼][다음버튼]



// 페이지네이션 기능을 하는 컴포넌트
const Pagination = (props) => {
    //console.log(props.apiData.length);

    console.log("dasd", props);

    const aladinBook = props.aladin;
    const yes24Book = props.yes24;

    const [BooksPageData, setBooksPageData] = useState(null);




    props.pageStatus(BooksPageData);





    // 페이지네이션 길이를 정할 api데이터
    //const apiData = props.apiData;


    // 첫번재 페이지를 나타낼 컴포넌트 첫 페이지는 무조건 1페이지
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지 이동 가능한 보여질 페이지 수 = 5개로 정함  [1][2][3][4][5] 이런 식으로
    const [viewPage, setVewPate] = useState(5);

    // 20/5 => 4  19/5 => 3.xx 3페이지? 4페이지?  5,5,5,4 (4페이지) or 6,6,6 (3페이지)

    const page = [];

    for (let i = 0; i < Math.ceil(aladinBook.length / viewPage); i++) {
        page.push(i + 1);  //[1,2,3,4..,10]
        console.log(page);
    }


    const lastPage = currentPage * viewPage;  // 1 * 5 = 5

    const firstPage = lastPage - viewPage;  // 5 - 5 = 0 

    const aladinPageN = aladinBook.slice(firstPage, lastPage);
    const yes24PageN = yes24Book.slice(firstPage, lastPage);

    const booksData = [aladinPageN, yes24PageN];

    setBooksPageData(booksData);

    //console.log(currentItems); // id : 0,1,2,3,4 5개의 페이지만 보여기게 끔

    //이 currentItem을 다시 app으로 끌어올려서 => SearchBar로..?




    const viewPageNum = page.map(
        (num) =>
            <li key={num} id={num}>
                {num}
            </li>

    );









    return (
        <>
            <ul className='pageNum'>{viewPageNum}
                <li>
                    <button>
                        다음
                    </button>
                </li>


            </ul>
        </>
    )
}

export default Pagination;