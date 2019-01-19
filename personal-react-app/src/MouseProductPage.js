import React from 'react'

function MouseProductPage({name, image, regularPrice, salePrice, sku, longDescription, shortDescription, thumbnailImage}) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div><img src={image} alt={thumbnailImage}/></div>
            <ul>
                <p>Retail Price: {regularPrice}</p>
                <p>Sale Price: {salePrice}</p>
                
            </ul>
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

export default MouseProductPage