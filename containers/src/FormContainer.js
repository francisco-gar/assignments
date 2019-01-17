import React, { Component } from 'react'

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { value, name } = e.target;
        this.setState(ps => ({
            inputs: {
                ...ps.inputs,
                [name]: value
            }
        }))
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.submit(this.state.inputs)
    // }

    render() {
        const { inputs } = this.state;
        return (
            this.props.children({
                inputs,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
            })
        )
    }
}

export const withFormContainer = (Form, inputs) => formProps => (
    <FormContainer inputs={inputs}>
        {containerProps => <Form {...formProps}{...containerProps} />}
    </FormContainer>
)
