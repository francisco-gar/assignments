import React from 'react'

import {Link} from 'react-router-dom'

import './AppleProductList.css'

function AppleProductList({ appleProducts }) {
    const appleComponents = appleProducts.map((apple, i) => (

        <div key={i}>
        <div>
            <Link to={{
                pathname: `/Apple/${i}`,
                state: { apple }
            }} >{<img className="applelistimage" src={apple.image} alt="sd"/>}{apple.name}</Link>
        </div>
            <p>{apple.regularPrice}</p>
        </div>

    ))
    return (
        <div className='applelistgrid'>
            {appleComponents}
        </div>
    )
}

export default AppleProductList