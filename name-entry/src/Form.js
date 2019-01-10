import React, { Component } from "react";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: ''
        } 
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { name, value } }){
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.submit(this.state)
        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    render(){
        const { firstName, lastName } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="firstName" value={firstName} type="text" placeholder='Enter First Name'/>
                <input onChange={this.handleChange} name="lastName" value={lastName} type="text" placeholder='Enter Last Name'/>
                <button>Submit</button>
                <h1> {firstName} {lastName} </h1>
            </form>
        )
    }
}

export default Form;