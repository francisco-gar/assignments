import React from 'react'
import { Route } from 'react-router-dom'

import TvProductsData from './TvProductsData';
import TvProductList from './TvProductList';

import AppleProductList from './AppleProductList'
import AppleProductsData from './AppleProductsData';

import KeyboardProductList from './KeyboardProductList'
import KeyboardProductsData from './KeyboardProductsData'

import MouseProductList from './MouseProductList'
import MouseProductsData from './MouseProductsData'

import Home from './Home';
import MouseProductItems from './MouseProductItems';
import MouseProductPage from './MouseProductPage';



function MainView({mouseProducts}) {
    
    return (
        <div>
            <TvProductsData>
                {({ tvProducts }) => (
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/Televisions' component={() => (
                            <TvProductList tvProducts={tvProducts} />
                        )} />

                        {/* <Route exact path='/products/:sku' component={routeProps => (
                            <TvProductDetail {...routeProps.location.state.products} />
                        )} /> */}
                    </div>
                )}
            </TvProductsData>
            <AppleProductsData>
                {({ appleProducts }) => (
                    <div>
                        <Route path='/Apple' component={() => (
                            <AppleProductList appleProducts={appleProducts} />
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

                    </div>
                )}
            </KeyboardProductsData>
            <MouseProductsData mouseProducts={mouseProducts}>
                {({ mouseProducts }) => (
                    <div>
                        <Route path='/Mice' component={() => (
                            <MouseProductList mouseProducts={mouseProducts} />
                        )} />
                        <Route path='/Mice/:index' component=
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
