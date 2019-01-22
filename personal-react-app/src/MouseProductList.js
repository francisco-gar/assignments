import React from 'react'

import {Link} from 'react-router-dom'

import './MouseProductList.css'

function MouseProductList({ mouseProducts }) {
    const mouseComponents = mouseProducts.map((mouse, i) => (
        <div className='mouseflexx' key={i}>
           
                <Link className='mousecenter' to={{
                    pathname: `/Mice/${i}`,
                    state: { mouse }
                }} >{<img className='mouselistimage' src={mouse.image} alt="sd"/>}</Link>
            <p>{mouse.name}</p>
            <p className="mousep">{mouse.regularPrice}</p>
        </div>
    ))
    return (
        <div className='mouselistgrid'>
            {mouseComponents}
        </div>
    )
}

export default MouseProductList