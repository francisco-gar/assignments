import { Component } from 'react'
import axios from 'axios'

export default class MouseProductsData extends Component {
    constructor() {
        super();
        this.state = {
            mouseProducts: [],
            loading: true,
            errMsg: null
        }
        this.getMouseProducts = this.getMouseProducts.bind(this);
    }

    getMouseProducts() {
        axios.get('https://api.bestbuy.com/v1/products((search=mouse&search=gaming&search=wired))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,longDescription,name,regularPrice,salePrice,shortDescription,thumbnailImage,largeImage,sku&pageSize=20&format=json')
            .then(response => this.setState({
                mouseProducts: response.data.products,
                loading: false,
                errMsg: null
            }))
            
    }
    componentDidMount() {
        setTimeout(this.getMouseProducts, 3900);
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}

