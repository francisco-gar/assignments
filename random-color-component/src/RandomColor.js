import { Component } from 'react'
import axios from 'axios'

export default class RandomColor extends Component {
    constructor() {
        super();
        this.state = {
            color: []
        }
    }
    getRandomColor(url) {
        return axios.get(url)
            .then(response => this.setState({
                color: response.data.new_color,

            }))
    }

    componentDidMount() {
        this.getRandomColor('http://www.colr.org/json/color/random')
    }


    render() {
        return (
            this.props.children(this.state)
        )
    }
}