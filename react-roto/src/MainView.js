import React from 'react'

import Home from './Home'
import Services from './Services'
import Shoes from './Shoes'
import Racquets from './Racquets'
import { Switch, Route } from 'react-router-dom'

function MainView() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path='/Services' component={Services}/>
                <Route  path='/Shoes' component={Shoes} />
                <Route  path='/Racquets' component={Racquets} />
            </Switch>
        </div>
    )
}

export default MainView
