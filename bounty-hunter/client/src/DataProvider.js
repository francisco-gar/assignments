import React, { Component, createContext } from 'react'

import axios from 'axios';

const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            bounties: []
        }
    }
    componentDidMount() {
        axios.get('/bounties')
            .then(response => this.setState({ bounties: JSON.stringify(response.data) }))
    }
    render() {
        return (
            <div>
                {this.state.bounties}
            </div>
        )
    }
}
