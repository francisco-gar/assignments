import React from 'react'
import {Link} from 'react-router-dom'


function PlanetLinks({planets}) {
    const planetLinks = planets.map((planet, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/planets/${i}`,
                state: { planet }
            }} >{planet.name}</Link>
        </li>

    ))
    return (
        <ul>
            {planetLinks}
        </ul>
    )
}

export default PlanetLinks
