import React from 'react'

import Node from './Node'
import LevelTwoFirstChild from './LevelTwoFirstChild'
import LevelTwoSecondChild from './LevelTwoSecondChild'
import LevelTwoThirdChild from './LevelTwoThirdChild'


function TopLevel({data}) {
    
    return (
        <div>
            <Node value={0}>
                <LevelTwoFirstChild />
                <LevelTwoSecondChild />
                <LevelTwoThirdChild />
            </Node>
        </div>
    )
}

export default TopLevel
