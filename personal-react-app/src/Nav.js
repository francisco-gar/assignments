import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Televisions'>Televisions</Link>
            <Link to='/Apple'>Apple</Link>
            <Link to='/Keyboards'>Keyboards</Link>
            <Link to='/Mice'>Mice</Link>
        </nav>
    )
}

export default Nav