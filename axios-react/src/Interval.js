import React, { Component } from 'react'

export default class Interval extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this);
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }
    start(){
        clearInterval(this.interval);
        this.interval = setInterval(this.add, 100)
    }
    reset(){
        this.setState(ps =>({counter: 0}))
    }
    stop(){
        clearInterval(this.interval)
    }
    add(){
        this.setState(ps =>({counter: ps.counter + 1}))
    }
    componentDidMount(){
        this.start()
    }
    componentWillUnmount(){
        clearInterval(this.invterval);
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.start}>START</button>
                <button onClick={this.stop}>STOP</button>
                <button onClick={this.reset}>RESET</button>
            </div>
        )
    }
}
