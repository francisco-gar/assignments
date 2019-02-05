import React from 'react'

import MonthView from './MonthView'
import Day from './Day'
import { Route } from 'react-router-dom';
import LessonForm from './LessonForm';
import Header from './Header'

import { withLessonContext } from './LessonProvider'

function MainView({ lessons }) {
    return (
        <div>
            {/* <Header /> */}
            <Route exact path="/" component={MonthView} />
            <Route path="/day/:date" component={Day} />
            <Route path="/hour/:date" component={LessonForm} />
        </div>
    )
}

export default withLessonContext(MainView)
