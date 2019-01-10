import React from 'react';

const Item = (props) => {
    // const style = { backgroundColor: color}
    return (
        <li>
            {props.firstName} {props.lastName}
        </li>
    )
}

export default Item;