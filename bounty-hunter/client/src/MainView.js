import React from 'react'
import SideBar from './SideBar';
import Detail from './Detail'
import { Route } from 'react-router-dom'

import {withBountyContext} from './DataProvider'

// import array of bounties using withBountyContext


function MainView({bounties}) {
    return (
        <div>
            <SideBar />
            <Route path='/bounties/:id' component={(routeProps) => {
                const {id} = routeProps.match.params;
                //use .find() to grab the specific bounty
                const bty = bounties.find(bounty => {
                    return bounty._id === id;
                })
                //spread it into <Detail />
                return (
                <Detail {...bty}/>
                )}} />
        </div>
    )
}

export default withBountyContext(MainView)
