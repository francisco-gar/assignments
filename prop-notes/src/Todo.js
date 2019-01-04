import React from 'react';


const Todo = ({title, description, price}) => (
    <div>
        <h3>Title: {props.title}</h3>
        <p>Description {props.description}</p>
        <p>Price: {props.price}</p>
        <label htmlFor="">completed</label><input type="checkbox"/>
    </div>
);

export default Todo