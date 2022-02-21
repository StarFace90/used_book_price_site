import React from 'react'




function AladinData({ book: { link, cover, img, title, author, pubDate, isbn, isbn13, priceText, price, usedStatus } }) {

    const openInNewTab = (url) => {
        //var window = window.open(url, windowName, [windowFeatures]);
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className='flex bg-white w-full mb-5 shadow-sm rounded-lg'>

            <div className="w-5/12 p-2">
                {/* <a href={link} target="_blank" rel='noopener noreferrer'> */}
                {/* <div className="bg-indigo-200 h-60 w-55 mt-3"> */}


                {/* img, cover로 받아오는 이미지파일이 제각각임... */}
                {(!img) ?
                    <div style={{ backgroundImage: `url(${cover})` }}
                        className="bg-contain bg-no-repeat bg-center h-60 w-55 mt-3"
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     window.location.href = link;\
                        onClick={(e) => {
                            openInNewTab(link)
                            e.preventDefault()
                        }
                        }
                    ></div>
                    :
                    <div style={{ backgroundImage: `url(${img})` }}
                        className="bg-contain bg-no-repeat bg-center h-60 w-55 mt-3"
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     window.location.href = link;\
                        onClick={(e) => {
                            openInNewTab(link)
                            e.preventDefault()
                        }
                        }
                    ></div>
                }
            </div>

            <div className='w-7/12 p-4'>
                <h1 className='md:text-2xl font-bold mt-3'>{title}</h1>



                {/* 저자 출판사 년도 */}
                <div className='px-2'>
                    <div className="flex -mx-2">

                        {/* {author.map(author => ( */}
                        <div className="w-1/3 pl-1">
                            <div className='text-left font-medium mt-2 md:text-lg'> {author} {pubDate}</div>
                        </div>
                        {/* ))} */}
                    </div>
                </div>







                {/* isbn 분류  */}
                <div className='px-2' >
                    <div className="flex -mx-2">

                        {/* {isbn.map(isbn => ( */}
                        <div className="w-1/2 px-1">
                            <div className='text-blue-400 mt-1'>ISBN13 - {isbn13} ISBN10 - {isbn}</div>

                        </div>
                        {/* ))} */}
                    </div>
                </div>


                {(!usedStatus) ?
                    <div className="mt-6">
                        <div className='px-2'>
                            <div className="flex -mx-2">
                                {/* 중고매입 불가 이면 금액이 없다. */}

                                {/* 매입가 분류  */}
                                {priceText && priceText.map(text => (
                                    <div className="w-1/3 px-1" key={text.id}>
                                        <div className='text-center font-medium flex-1 leading-5'> {text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className='px-2'>
                            <div className="flex -mx-2">

                                {/* 매입가 금액 */}
                                {price && price.map(price => (
                                    <div className="w-1/3 px-1" key={price.id}>
                                        <div className='text-center font-medium text-red-500 mt-2 flex-1 leading-5 md:text-2xl'> {price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    // {/* <div className='text-red-500 mt-2 font-medium md:text-2xl'>{price}</div> */}
                    :
                    <div className="mt-6">
                        <div className="w-1/3 px-1">
                            <div className='text-center font-medium flex-1 leading-5'> {usedStatus}</div>
                        </div>
                    </div>
                }

            </div>

        </div >


    )
}

export default AladinData