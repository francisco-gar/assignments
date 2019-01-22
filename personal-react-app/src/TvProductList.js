import React from 'react'

import {Link} from 'react-router-dom'

import './TvProductList.css'

function TvProductList({ tvProducts }) {
    const tvComponents = tvProducts.map((tv, i) => (
        <div key={i}>
            <Link to={{
                pathname: `/Televisions/${i}`,
                state: { tv }
            }} >{<img className='tvlistimage' src={tv.image} alt="sd"/>}{tv.name}</Link>
            <p>Price: {tv.regularPrice}</p>
        </div>

    ))
    return (
        <div className='tvlistgrid'>
            
            {tvComponents}
            
        </div>
    )
}

export default TvProductList