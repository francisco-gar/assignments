import React from 'react'

function HitDetail({ name, image }) {
    return (
        <div>
            <div><img src={image} /><span> {name}</span></div>
        </div>
    )
}

export default HitDetail
