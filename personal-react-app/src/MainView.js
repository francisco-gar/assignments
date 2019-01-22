import React from 'react'
import { Route } from 'react-router-dom'

import TvProductsData from './TvProductsData'
import TvProductList from './TvProductList'
import TvProductPage from './TvProductPage'

import AppleProductList from './AppleProductList'
import AppleProductsData from './AppleProductsData'
import AppleProductPage from './AppleProductPage'

import KeyboardProductList from './KeyboardProductList'
import KeyboardProductsData from './KeyboardProductsData'
import KeyboardProductPage from './KeyboardProductPage'

import MouseProductList from './MouseProductList'
import MouseProductsData from './MouseProductsData'
import MouseProductPage from './MouseProductPage';

import Home from './Home';

function MainView({mouseProducts}) {
    
    return (
        <div>
            <TvProductsData>
                {({ tvProducts }) => (
                    <div>
                        <Route exact path='/' component={Home} />

                        <Route exact path='/Televisions' component={() => (
                            <TvProductList tvProducts={tvProducts} />
                        )} />

                        <Route exact path='/Televisions/:index' component=
                            {routeProps => (
                                <TvProductPage {...routeProps.location.state.tv} />
                            )} />
                        
                    </div>
                )}
            </TvProductsData>
            <AppleProductsData>
                {({ appleProducts }) => (
                    <div>
                        <Route exact path='/Apple' component={() => (
                            <AppleProductList appleProducts={appleProducts} />
                        )} />
                        <Route exact path='/Apple/:index' component=
                            {routeProps => (
                                <AppleProductPage {...routeProps.location.state.apple} />
                            )} />
                    </div>
                )}
            </AppleProductsData>
            <KeyboardProductsData>
                {({ keyboardProducts }) => (
                    <div>
                        <Route path='/Keyboards' component={() => (
                            <KeyboardProductList keyboardProducts={keyboardProducts} />
                        )} />
                        <Route exact path='/Keyboard/:index' component=
                            {routeProps => (
                                <KeyboardProductPage {...routeProps.location.state.keyboard} />
                            )} />

                    </div>
                )}
            </KeyboardProductsData>
            <MouseProductsData mouseProducts={mouseProducts}>
                {({ mouseProducts }) => (
                    <div>
                        <Route exact path='/Mice' component={() => (
                            <MouseProductList mouseProducts={mouseProducts} />
                        )} />
                        <Route exact path='/Mice/:index' component=
                            {routeProps => (
                                <MouseProductPage {...routeProps.location.state.mouse} />
                            )} />
                        
                    </div>
                )}
            </MouseProductsData>
        </div>
    )
}

export default MainView
