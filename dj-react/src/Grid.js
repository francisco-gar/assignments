import React from 'react';

import Square from './Square';

const Grid = ({ colors }) => {
    const squareComponents = colors.map((color, i) => <Square key={i} color={color} />);
    return (
        <div className='grid'>
            {squareComponents}
        </div>
    )
}

export default Grid;