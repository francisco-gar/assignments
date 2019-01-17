import React, { Component, createContext } from 'react'

export const {Consumer, Provider} = createContext();

export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
        this.authenticate = this.authenticate.bind(this);
    }
    authenticate(){
        this.setState(ps => ({
            loggedIn: !ps.loggedIn
        }))
    }
    
    render() {
        const providerValue = {
            ...this.state,
            authenticate: this.authenticate
        }
        return (
            <Provider value={providerValue} >
                {this.props.children}
            </Provider>
                
            
        )
    }
}


export const withDataContext = C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
)