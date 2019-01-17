import React from 'react'

import {withDataContext} from './DataContext'

function LoginButton({authenticate, loggedIn}) {
    return (
        <div>
        <button onClick={authenticate}>{loggedIn ? }</button>
        </div>
    )
}

export default withDataContext(LoginButton)
