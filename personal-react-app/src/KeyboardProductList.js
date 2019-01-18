import React from 'react'
import KeyboardProductDetail from './KeyboardProductDetail'

function KeyboardProductList({ keyboardProducts }) {
    console.log(keyboardProducts)
    const keyboardComponents = keyboardProducts.map((keyb, i) => (
        <KeyboardProductDetail key={i}{...keyb} />
    ))
    return (
        <div>
            {keyboardComponents}
        </div>
    )
}

export default KeyboardProductList