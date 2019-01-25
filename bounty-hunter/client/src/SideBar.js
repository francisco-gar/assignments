import React from 'react'



import { Link } from 'react-router-dom'

import { withBountyContext } from './DataProvider'

function SideBar({ bounties }) {
    const links = bounties.map(bounty => (
        <Link
            key={bounty._id}
            to={{
                pathname: `/bounties/${bounty._id}`,
                state: { bounty }
            }}>
            {bounty.firstName} {bounty.lastName}
        </Link>
    ))
    return (
        <div>
            <div className='listdirection'>
                {links}
            </div>
        </div>
    )
}

export default withBountyContext(SideBar)
