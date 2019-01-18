import React, { Component } from 'react'
import Axios from 'axios';

export default class ProductsData extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            loading: true,
            errMsg: null
        }
    }

    getProducts(){
        Axios.get('url')
        .then(response => this.setState({
            products: response.data.products,
            loading: false,
            errMsg: null
        }))
    }

    componentDidMount() {
        this.products
    }

    render() {
        
        return (
            this.props.children(this.state)
        )
    }
}
