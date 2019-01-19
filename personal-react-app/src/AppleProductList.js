import React from 'react'

import {Link} from 'react-router-dom'

function AppleProductList({ appleProducts }) {
    const appleComponents = appleProducts.map((apple, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/Apple/${i}`,
                state: { apple }
            }} >{apple.name}{<img src={apple.thumbnailImage} alt="sd"/>}</Link>
        </li>

    ))
    return (
        <div>
            {appleComponents}
        </div>
    )
}

export default AppleProductList