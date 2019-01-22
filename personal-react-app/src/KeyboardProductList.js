import React from 'react'

import {Link} from 'react-router-dom'

import './KeyboardProductList.css'

function KeyboardProductList({ keyboardProducts }) {
    const keyboardComponents = keyboardProducts.map((keyboard, i) => (
        
        <div key={i}>
            <Link to={{
                pathname: `/Keyboard/${i}`,
                state: { keyboard }
            }} >{<img src={keyboard.image} alt="sd"/>}{keyboard.name}</Link>
        
        <p>{keyboard.regularPrice}</p>
        </div>

    ))
    return (
        <div className="keyboardlistgrid">
            {keyboardComponents}
        </div>
    )
}

export default KeyboardProductList