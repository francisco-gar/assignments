import React from 'react'

import Home from './Home';
import About from './About';
import ServicesContainer from './ServicesContainer';
import { Switch, Route } from 'react-router-dom';


function MainView() {
    return (
        <div className='main'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/About' component={About}/>
                <Route exact path='/ServicesContainer' component={ServicesContainer} />
            </Switch>
        </div>
    )
}

export default MainView
