import React from 'react'

import './TvProductPage.css'

function TvProductPage({name, image, regularPrice, salePrice, sku, longDescription, shortDescription, thumbnailImage}) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div  >
            <div className="tvflex"><img className='tvpageimage'src={image} alt={thumbnailImage}/></div>
            <div>
                <p><strong>Retail Price: </strong>{regularPrice}</p>
                <p><strong>Sale Price: </strong>{salePrice}</p>
                
            </div>
            <div>
                <p>{shortDescription}</p>
                
            </div>
            <div>
                <p>{longDescription}</p>
                <p><strong>Sku: </strong>{sku}</p>
            </div>
        </div>
    )
}

export default TvProductPage
