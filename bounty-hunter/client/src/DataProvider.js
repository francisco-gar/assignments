import React, { Component, createContext } from 'react'

import axios from 'axios';

// const bountyUrl = '/bounties'

const { Consumer, Provider } = createContext()

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
            .then(response =>
                this.setState({
                    bounties: response.data,
                    loading: false
                }))
    }

    addBounty(bounty) {
        return axios.post('/bounties/', bounty)
            .then(response => this.setState(ps => ({
                bounties: [...ps.bounties, response.data]
            })))
    }

    editBounty(id, updatedBounty) {
        axios.put(`/bounties/${id}`, updatedBounty)
            .then(response =>
                this.setState(ps => ({
                    bounties: ps.bounties.map(bounty => bounty._id === id ? response.data : bounty)
                })
            ))
        //res.send(response) 
    }

    delBounty(id, bounty) {
        return axios.delete(id, bounty)
            .then(() => {
                this.setState(ps => ({
                    bounties: ps.bounties.filter((x) => x._id !== id)
                }))
            })

    }

    componentDidMount() {
        this.getBounties('/bounties/')
    }

    render() {
        const value = {
            ...this.state,
            addBounty: this.addBounty,
            editBounty: this.editBounty,
            delBounty: this.delBounty
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
        {value => <C {...value} {...props} />}
    </Consumer>
)
