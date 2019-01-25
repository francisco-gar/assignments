import React from 'react'
import SideBar from './SideBar';
import Detail from './Detail'
import {Route} from 'react-router-dom'


function MainView() {
    return (
        <div>
            <SideBar />
            <Route path='/bounties/:id' component={Detail} />
        </div>
    )
}

export default MainView
