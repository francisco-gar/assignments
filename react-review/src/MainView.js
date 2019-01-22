import React from 'react'

import SideBar from './SideBar'
import Detail from './Detail'
import {Route} from 'react-router-dom'

import style from './assets/styles/MainView.module.css'

function MainView() {
    return (
        <div>
            <SideBar />
            <Route path='/todos/:id' component={Detail} />
            {/* sidebar here */}
            {/* ?routhre to detailpage */}
        </div>
    )
}

export default MainView
