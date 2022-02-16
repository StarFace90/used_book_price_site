import React from 'react';

function DataHandle({ view: { link, img, title, author, isbn, priceText, price } }) {


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
                <div style={{ backgroundImage: `url(${img})` }}
                    className="bg-contain bg-no-repeat bg-center bg-indigo-200 h-60 w-55 mt-3"
                    // onClick={(e) => {
                    //     e.preventDefault()
                    //     window.location.href = link;\
                    onClick={() => openInNewTab(link)}
                ></div>
                {/* </a> */}
            </div>

            <div className='w-7/12 p-4'>
                <h1 className='md:text-2xl font-bold mt-3'>{title}</h1>
                <h3 className='md:text-lg font-semimedium mt-2'>{author}</h3>
                <div className='text-blue-400 mt-1'>{isbn}</div>
                <div className="mt-6">
                    <p className='font-medium'>{priceText}</p>
                    <div className='text-red-500 mt-2 font-medium md:text-2xl'>{price}</div>
                </div>
            </div>
        </div >
    )
}


export default DataHandle;