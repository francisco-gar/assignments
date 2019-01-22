import React from 'react'

import './AppleProductPage.css'

function AppleProductPage({name, image, regularPrice, salePrice, sku, longDescription, shortDescription, thumbnailImage}) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div className='apimageflex'><img className='appleproductimage'src={image} alt={thumbnailImage}/></div>
            <div>
                <p>Retail Price: {regularPrice}</p>
                <p>Sale Price: {salePrice}</p>
                
            </div>
            <div>
            <p>{shortDescription}</p>
                <p>Sku: {sku}</p>
            </div>
            <div>
                <p>{longDescription}</p>
            </div>
        </div>
    )
}

export default AppleProductPage
