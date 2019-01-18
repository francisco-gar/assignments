import React from 'react'
import TvProductDetail from './TvProductDetail'

function TvProductList({ tvProducts }) {
    const tvComponents = tvProducts.map((tv, i) => (
        <TvProductDetail key={i}{...tv} />
    ))
    return (
        <div>
            {tvComponents}
        </div>
    )
}

export default TvProductList