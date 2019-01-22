import React from 'react'

import { Link } from 'react-router-dom'

import './Nav.css'

function Nav() {
    return (
        <div className='navflex'>
        <nav className='navlinks'>
            <Link className='navpad' to='/'>Home</Link>
            <Link className='navpad' to='/Televisions'>Televisions</Link>
            <Link className='navpad' to='/Apple'>Apple</Link>
            <Link className='navpad' to='/Keyboards'>Keyboards</Link>
            <Link className='navpad' to='/Mice'>Mice</Link>
        </nav>
        </div>
    )
}

export default Nav