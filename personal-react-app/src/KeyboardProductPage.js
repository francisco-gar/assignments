import React from 'react'

import './KeyboardProductPage.css'

function KeyboardProductPage({name, image, regularPrice, salePrice, sku, longDescription, shortDescription, thumbnailImage}) {
    return (
        <div>
            <div>
                <h3 className='kbh3'>{name}</h3>
            </div>
            <div className='kbpageflex'><img className='kbpageimage'src={image} alt={thumbnailImage}/></div>
            <div>
                <p><strong>Retail Price: </strong>{regularPrice}</p>
                <p><strong>Sale Price: </strong>{salePrice}</p>
                
            </div>
            <div>
            <p>{shortDescription}</p>
                <p><strong>Sku: </strong>{sku}</p>
            </div>
            <div>
                <p>{longDescription}</p>
            </div>
        </div>
    )
}

export default KeyboardProductPage
