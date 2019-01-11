import { Component } from 'react'
import axios from 'axios';

export default class CharactersData extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            loading: true,
            errMsg: null
        }

    }

    getCharacters(url) {
        return axios.get(url)
            .then(response => this.setState({
                characters: response.data.results,
                loading: false,
                errMsg: null

            }))
            .catch(err => this.setState({
                errMsg: 'Youre data is unavailable',
                loading: false
            }))
    }

    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people')

    }
    render() {
        return (
            this.props.children(this.state)
        )
    }
}