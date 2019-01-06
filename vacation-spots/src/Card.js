import React from 'react';

// const cardColor = (cards.timeToGo) => {
//
// }

const Card = (props) => (
    <div>
        <h3>Place: {props.place}</h3>
        <p>Price: {props.price}</p>
        <p>Time to Go: {props.timeToGo}</p>
    </div>
);

export default Card