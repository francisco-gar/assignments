import React from 'react'
import './MouseProductPage.css'

function MouseProductPage({ name, image, regularPrice, salePrice, sku, longDescription, shortDescription, thumbnailImage }) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div className='imageflex'><img className='mouseproductimage' src={image} alt={thumbnailImage} /></div>
                <ul>
                    <p><strong>Retail Price: </strong>{regularPrice}</p>
                    <p><strong>Sale Price: </strong>{salePrice}</p>
                </ul>
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

export default MouseProductPage
