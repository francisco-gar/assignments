import React from 'react';

import Pet from './Pet';

const Friend = (props) => {
    const petss = props.pets.map((pet, i) => {
        return <Pet key={i}
            name={pet.name}
            breed={pet.breed}
        />
    })
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <p><strong>Age: </strong>{props.age}</p>
            <h3>Pets:</h3>
            {petss}
            <br></br>
        </div>
    )
    
    
};

export default Friend;