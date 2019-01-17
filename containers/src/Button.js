import React from 'react';

import {withToggler} from './Toggler'

const Button = props => (
   <button onClick={props.toggle}>{props.on ? 'Off' : 'On'}</button>
)

export default withToggler(Button);