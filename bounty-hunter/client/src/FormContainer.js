import { Component } from 'react'

export default class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name, value, type, checked} = e.target;
        this.setState(ps => ({
            inputs: {
                ...ps.inputs,
                [name]: value,
                [name]: type === 'checkbox' ? checked : value
            }
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.inputs)
    }

    



    render() {
        const props = {
            ...this.state,
            // inputs: this.state.inputs,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        }
        return (
            this.props.children(props)
        )
    }
}

