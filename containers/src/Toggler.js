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
        return (
            this.props.children({
                on,
                toggle: this.toggle
            })
        )
    }
}

export default Toggler;

export const withToggler = BigC => bigCProps => (
    <Toggler>
        {toggleProps => <BigC {...bigCProps}{...toggleProps}/>}
    </Toggler>
)