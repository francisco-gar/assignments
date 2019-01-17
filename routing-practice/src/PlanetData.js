import React, { Component } from 'react'

import axios from 'axios'

export default class PlanetData extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            loading: true,
            errMsg: null
        }
        
    }
    //methods GET data upon component mounting
    getPlanets() {
        axios.get('https://swapi.co/api/planets')
            .then(response => this.setState({
                planets: response.data.results,
                loading: false,
                errMsg: null
            }))
            
    }
    componentDidMount() {
        this.getPlanets();
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}
