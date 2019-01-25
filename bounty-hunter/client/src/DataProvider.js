import React, { Component, createContext } from 'react'

import axios from 'axios';

const bountyUrl = '/bounties'

const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            bounties: [],
            loading: true
        }
        this.addBounty = this.addBounty.bind(this)
        this.delBounty = this.delBounty.bind(this)
        this.editBounty = this.editBounty.bind(this)
    }
    // componentDidMount() {
    //     axios.get('/bounties')
    //         .then(response => this.setState({ bounties: JSON.stringify(response.data) }))
    // }

    getBounties(url) {
        return axios.get(url)
        .then(response => this.setState({
            bounties: response.data,
            loading: false
        }))
    }

    addBounty(bounty) {
        return axios.post(bountyUrl, bounty)
        .then(response => this.setState(ps => ({
            bounties:[...ps.bounties, response.data]
        })))
    }

    editBounty( bountyUrl, bounty) {
        return axios.get(bountyUrl, bounty)
        .then(response => this.setState(ps => ({
            // bounties: ps.bounties.map(bounty => bounty._id === id ? {...bounty, updatedBounty} : bounty)
            bounties:[...ps.bounties, response.data]
        })))
    }

    delBounty(bountyUrl, bounty) {
        return axios.delete(bountyUrl, bounty)
        .then(response => this.setState(ps => ({
            bounties:[...ps.bounties, response.data]
        })))

    }

    componentDidMount(){
        this.getBounties(bountyUrl)
    }

    render() {
        const value = {
            ...this.state,
            addBounty: this.addBounty,
            editBounty: this.editBounty
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withBountyContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)
