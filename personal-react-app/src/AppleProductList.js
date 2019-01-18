import React from 'react'
import AppleProductDetail from './AppleProductDetail'

import {Link} from 'react-router-dom'

function AppleProductList({ appleProducts }) {
    const appleComponents = appleProducts.map((ap, i) => (
        <AppleProductDetail key={i}{...ap} />
    ))
    return (
        <div>
            <Link to='/Apple/:sku'>{appleComponents}</Link>
        </div>
    )
}

export default AppleProductList