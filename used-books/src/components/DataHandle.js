import React from 'react'

function DataHandle({ view: { link, img, title, author, isbn, priceText, price } }) {
    //let handleIsbn = isbn;

    return (
        <div>

            <a href={link} target='_blank'> <img src={img} width='92' height='92' /></a>

            <div>
                <h1>{title}</h1>
                <h3>{author}</h3>

                <div>{isbn}</div>
                <p>{priceText}</p>
                <div>{price}</div>
            </div>
        </div>
    )
}


export default DataHandle;