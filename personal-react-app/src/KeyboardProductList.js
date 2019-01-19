import React from 'react'

import {Link} from 'react-router-dom'

function KeyboardProductList({ keyboardProducts }) {
    const keyboardComponents = keyboardProducts.map((keyboard, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/Keyboard/${i}`,
                state: { keyboard }
            }} >{keyboard.name}{<img src={keyboard.thumbnailImage} alt="sd"/>}</Link>
        </li>

    ))
    return (
        <div>
            {keyboardComponents}
        </div>
    )
}

export default KeyboardProductList