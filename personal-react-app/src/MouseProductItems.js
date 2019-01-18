import React from 'react'
import {Link} from 'react-router-dom'




function MouseProductItems({mouseProducts}) {
    const mouse = mouseProducts.map((mouse, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/Mice/${i}`,
                state: { mouse }
            }} >{mouse.name}</Link>
        </li>

    ))
    return (
        <div>
            {mouse}
        </div>
    )
}

export default MouseProductItems
