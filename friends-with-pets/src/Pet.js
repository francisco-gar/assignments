import React from 'react';

const Pet = (props) => {
    return (
        <div>
            <ul><strong>Name: </strong>{props.name}</ul>
            <ul><strong>Breed: </strong>{props.breed}</ul>
        </div>
    )
}

export default Pet;