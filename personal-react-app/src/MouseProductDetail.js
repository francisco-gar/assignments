import React from 'react'
import {Link} from 'react-router-dom'

function MouseProductDetail({name, image, regularPrice, salePrice, thumbnailImage}) {
    return (
        <div>
            <div>
            <Link to='/Mice/:id'><h5>{name}</h5></Link>
            </div>
            <Link to='/Mice/:id'><div><img src={image} alt={thumbnailImage}/></div></Link>
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

export default MouseProductDetail
