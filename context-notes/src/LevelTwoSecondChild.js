import React from 'react'
import Node from './Node'

function LevelTwoSecondChild() {
    return (
        <div>
        <Node value={1}/>
                <Node value={2}>
                    <Node value={20}></Node>
                    <Node value={21}></Node>
                    <Node value={22}></Node>
                </Node>
        </div>
    )
}

export default LevelTwoSecondChild
