import React from 'react'

function Node({value, children}) {
    return (
        <div>
            <li>{value}</li>
            {children}
        </div>
    )
}

export default Node
