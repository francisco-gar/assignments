import React from 'react';

const Square = ({color}) => {
    const style = { backgroundColor: color}
    return (
        <div style={style} className='square'></div>
    )
}

export default Square;