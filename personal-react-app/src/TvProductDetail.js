import React from 'react'

function TvProductDetail({name, image, shortDescription, longDescription, regularPrice, salePrice, sku, thumbnailImage}) {
    return (
        <div>
            <div>
                <h5>{name}</h5>
            </div>
            <div><img src={thumbnailImage} alt='not available' /></div>
            <ul>
                <li>{regularPrice}</li>
                <li>{salePrice}</li>
                {/* <li>{shortDescription}</li> */}
                {/* <li>{sku}</li> */}
            </ul>
            <div>
                {/* <p>{longDescription}</p> */}
            </div>
        </div>
    )
}

export default TvProductDetail
