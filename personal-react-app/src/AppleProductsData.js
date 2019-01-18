import { Component } from 'react'
import axios from 'axios'

export default class AppleProductsData extends Component {
    constructor() {
        super();
        this.state = {
            appleProducts: [],
            loading: true,
            errMsg: null
        }
        this.getAppleProducts = this.getAppleProducts.bind(this);
    }

    getAppleProducts() {
        axios.get('https://api.bestbuy.com/v1/products((regularPrice>2000)&(search=apple&search=macbook&search=pro))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,thumbnailImage,longDescription,name,regularPrice,salePrice,shortDescription,sku&pageSize=20&format=json')
            .then(response => this.setState({
                appleProducts: response.data.products,
                loading: false,
                errMsg: null
            }))
            
    }
    componentDidMount() {
        setTimeout(this.getAppleProducts, 5000);
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}

