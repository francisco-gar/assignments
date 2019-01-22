import { Component } from 'react'
import axios from 'axios'

export default class KeyboardProductsData extends Component {
    constructor() {
        super();
        this.state = {
            keyboardProducts: [],
            loading: true,
            errMsg: null
        }
        this.getKeyboardProducts = this.getKeyboardProducts.bind(this);
    }

    getKeyboardProducts() {
        axios.get('https://api.bestbuy.com/v1/products((search=keyboard&search=mechanical&search=black))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,thumbnailImage,longDescription,name,regularPrice,salePrice,shortDescription,sku&pageSize=60&format=json')
            .then(response => this.setState({
                keyboardProducts: response.data.products,
                loading: false,
                errMsg: null
            }))
            
    }
    componentDidMount() {
        setTimeout(this.getKeyboardProducts, 1500);
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}

