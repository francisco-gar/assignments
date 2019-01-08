import React, { Component } from 'react';

import Button from './Button'

class Toggler extends Component {
    constructor() {
        super();
        this.state = {
            on: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState(ps => ({
            on: !ps.on
        }))
    }
    render() {
        const { on } = this.state;
        const props = {
            on,
            onClick: this.toggle
        }
        return (
            <Button {...props}/>
        )
    }
}

export default Toggler;