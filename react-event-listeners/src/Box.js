import React, { Component } from 'react';

class Box extends Component {
    constructor() {
        super();
        this.state = {
            currentRoll: 'Click to Roll',
            prevRolls: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    genRandomNumber(min, max) {
        return Math.floor(Math.random() * 6) + 1;
    }
    handleClick(event) {
        const x = this.genRandomNumber();
        this.setState(prevState => ({
            currentRoll: x,
            prevRolls: [x, ...prevState.prevRolls]
        }))
    }
    render() {
        const displayRolls = this.state.prevRolls.map((roll, i) => <li key={i}>{roll}</li>)
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <h4>{this.state.currentRoll}</h4>
                <ul>
                    Previous Rolls:
                    {displayRolls}
                </ul>
            </div>
        )
    }
}

export default Box;