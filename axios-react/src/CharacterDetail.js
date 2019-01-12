import React from 'react'

function CharacterDetail({ name, gender, starships }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{gender}</p>
            {/* <p>{starships}</p> */}
            
        </div>
    )
}

export default CharacterDetail
