import React from 'react'

import './Header.css'

import mainLogo from './assets/LogoMakr_2lWL4K.png'

function Header() {
    return (
        <div className='headerdiv'>

        <h1 className='headertitle'>
            OK Buy
        </h1>

<img className='maine'src={mainLogo} />
        </div>
    )
}

export default Header
