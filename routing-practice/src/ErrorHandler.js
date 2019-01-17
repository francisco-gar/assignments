import React from 'react'

function ErrorHandler({errMsg, children}) {
    return (
        errMsg ?
        <div>{errMsg}</div> :
        children
    )
}

export default ErrorHandler
