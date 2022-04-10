import React from 'react';
import AladinData from './AladinData';
import Pagination from './Pagination';
import Yes24Data from './Yes24Data';

// 알라딘, yes24의 뷰 정리해서 최종적으로 app.js에 보여줄 컴포넌트
// 또는 알라딘 yes24 책의 데이터를 정리해서 가격만 비교해주는 컴포넌트로도 사용가능 

// <DataHandle bookYes24={item} key={item.id} />
const BookDataView = (props) => {
    console.log("알라딘", props.aladin); //[]
    /**
     * 알라딘 : author : '', cover, id:0, isbn, isbn13, link, price:[], priceText, pubDate:'', title
     */

    console.log("yes24", props.yes24); //[]
    /**
     * yes24: author : [], id:0, img, isbn:[isbn13, isbn10], link, price:[], priceText: [], title
     */

    // 비교하기 위한 코드가 더 길어지므로 서버에서 한번에 통일성 있게 해주는 게 용이


    const pageNation = (pageBookData) => {
        console.log("끌어올려짐?", pageBookData);
        // setBook(pageBookData[0]);
        // setView(pageBookData[1]);
    }


    const pageDivide = {
        length: props.aladin.length,
        yes24: props.yes24,
        aladin: props.aladin
    }

    return (
        <>
            <div className='grid grid-cols-2'>
                <div className="md-full mx-auto px-4 m-3">
                    {props.aladin.map(data => (
                        <AladinData
                            key={data.id}
                            aladin={data} />
                    ))}
                </div>
                <div className="md-full mx-auto px-4 m-3">
                    {props.yes24.map(data => (
                        <Yes24Data
                            key={data.id}
                            yes24={data} />
                    ))}
                </div>
            </div>
            {/* <Pagination
                divide={pageDivide}
                pageStatus={pageNation}
            /> */}
        </>
    )
}

export default BookDataView