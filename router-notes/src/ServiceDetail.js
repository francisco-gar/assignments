import React from 'react'

function ServiceDetail({name, _id, description, provider, price}) {
    return (
        <div>
            <h4>{name} </h4>
            <p>{description} </p>
            <p>{price} </p>
            <p>{provider} </p>
            
        </div>
    )
}

export default ServiceDetail
