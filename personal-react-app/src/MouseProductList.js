import React from 'react'

import {Link} from 'react-router-dom'

function MouseProductList({ mouseProducts }) {
    const mouseComponents = mouseProducts.map((mouse, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/Mice/${i}`,
                state: { mouse }
            }} >{mouse.name}{<img src={mouse.thumbnailImage} alt="sd"/>}</Link>
        </li>

    ))
    return (
        <div>
            {mouseComponents}
        </div>
    )
}

export default MouseProductList