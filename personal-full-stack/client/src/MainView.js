import React from 'react'

import MonthView from './MonthView'
import Day from './Day'
import { Route } from 'react-router-dom';

function MainView() {
    return (
        <div>
            <Route exact path="/" component={MonthView} />
            <Route path="/day/:date" component={Day}/>
        </div>
    )
}

export default MainView
