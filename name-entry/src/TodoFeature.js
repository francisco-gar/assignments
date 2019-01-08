import React, { Component } from "react";
import Form from './Form'


class TodoFeature extends Component {
    constructor(){
        super();
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item){
        this.setState(ps => ({
            items: [...ps.items, item]
        }))
    }
    // keep track of state here
    // create methods for updating the item list here
    
    render(){
        // const displayItems = this.state.items.map((item, i) => <li key={i}>{item}</li>)

        return (
            <div>
                <Form submit={this.addItem} />
                {/* {our list and form get reder here} */}
               
            </div>
        )
    }
}

export default TodoFeature;