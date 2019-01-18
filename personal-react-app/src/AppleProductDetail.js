import React from 'react'

function AppleProductDetail({name, image, regularPrice, salePrice, thumbnailImage}) {
    return (
        <div>
            <div>
                <h5>{name}</h5>
            </div>
            <div><img src={thumbnailImage} alt={image}/></div>
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

export default AppleProductDetail
