import React from 'react'
import {Link} from 'react-router-dom'


function PlanetLinks({planets}) {
    const planetLinks = planets.map((planet, i) => (
        <div key={i}>
            <Link to={{
                pathname: `/planets/${i}`,
                state: { planet }
            }} >{planet.name}</Link>
        </div>

    ))
    return (
        
            {planetLinks}
        
    )
}

export default PlanetLinks
