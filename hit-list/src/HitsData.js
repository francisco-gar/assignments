import { Component } from 'react'
import axios from 'axios';

export default class HitsData extends Component {
    constructor() {
        super();
        this.state = {
            hits: [],
            loading: true,
            errMsg: null
        }
    }

    getHits(url) {
        return axios.get(url)
            .then(response => this.setState({
                hits: response.data,
                loading: false,
                errMsg: null
            }))
            .catch(err => this.setState({
                errMsg: 'Your Data is unavailable',
                loading: false
            }))
    }

    componentDidMount() {
        this.getHits('https://s3.amazonaws.com/v-school/data/hitlist.json')
    }

    render() {
        return (
            
                this.props.children(this.state)
            
        )
    }
}
