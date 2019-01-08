import React from 'react';

const Button = ({ on, ...props}) => (
    <div>
        <button {...props}>{on ? 'Off' : 'On'}</button>
    </div>
)

export default Button;