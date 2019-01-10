import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className>
                <Link to='/'>Home</Link>
                <Link to='/Services'>Services</Link>
                <Link to='/Shoes'>Shoes</Link>
                <Link to='/Racquets'>Racquets</Link>
            </nav>
        </div>
    )
}

export default Nav
