import React from 'react'

import MonthView from './MonthView'
import Day from './Day'
import { Route } from 'react-router-dom';
import LessonForm from './LessonForm';


import { withLessonContext } from './LessonProvider'

function MainView() {
    return (
        <div>
            <Route exact path="/" component={MonthView} />
            <Route path="/day/:date" component={Day} />
            <Route path="/hour/:date" component={LessonForm} />
        </div>
    )
}

export default withLessonContext(MainView)
