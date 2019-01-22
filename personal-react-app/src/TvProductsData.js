import { Component } from 'react'
import axios from 'axios'

export default class TvProductsData extends Component {
    constructor() {
        super();
        this.state = {
            tvProducts: [],
            loading: true,
            errMsg: null
        }
    }

    getTVProducts() {
        axios.get('https://api.bestbuy.com/v1/products((regularPrice>900)&(search=television&search=sony|search=samsung&search=4k))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,thumbnailImage,longDescription,name,regularPrice,salePrice,shortDescription,sku&pageSize=99&format=json')
            .then(response => this.setState({
                tvProducts: response.data.products,
                loading: false,
                errMsg: null
            }))
            
    }

    

    componentDidMount() {
        this.getTVProducts();
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}

