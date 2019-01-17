import React from 'react'

import LoginButton from './LoginButton'

function LevelThreeFirstChild() {
    return (
        <Node value={20}>
            <Consumer>
                {({loggedIn, authenticate}) (
                    {LoginButton}
                )}
            </Consumer>
        </Node>
    )
}

export default LevelThreeFirstChild
