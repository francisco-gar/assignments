import React from 'react'

import {Link} from 'react-router-dom'

function TvProductList({ tvProducts }) {
    const tvComponents = tvProducts.map((tv, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/Televisions/${i}`,
                state: { tv }
            }} >{tv.name}{<img src={tv.thumbnailImage} alt="sd"/>}</Link>
        </li>

    ))
    return (
        <div>
            {tvComponents}
        </div>
    )
}

export default TvProductList