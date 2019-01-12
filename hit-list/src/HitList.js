import React from 'react'
import HitDetail from './HitDetail';

function HitList({ hits }) {
    const hitComponents = hits.map((hit, i) => (
        <HitDetail key={i}{...hit} />
    ))
    return (
        <div>
            {hitComponents}
        </div>
    )
}

export default HitList
