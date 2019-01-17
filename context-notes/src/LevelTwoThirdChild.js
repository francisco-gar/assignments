import React from 'react'

import Node from './Node'

function LevelTwoThirdChild() {
    return (
        <div>
        <Node value={3}>
                    
                    <Node value={30}></Node>
                    <Node value={31}></Node>
                    <Node value={32}></Node>
                    <Node value={33}></Node>
                    <Node value={330}></Node>
                   
                    </Node>
                    
        </div>
    )
}

export default LevelTwoThirdChild
