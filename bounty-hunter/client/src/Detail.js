import React from 'react'

import EditForm from './EditForm'
import {withBountyContext} from './DataProvider'


import {withToggler} from './Toggler'

function Detail({toggle, on, location: {state: {bounty: {firstName, lastName, living, type, bountyAmount, editBounty,}}}, _id}) {
    // const {firsTName, } = props.location.state.bounty;
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{living}</p>
            <p>{bountyAmount}</p>
            <p>{type}</p>
            <button>x</button>
            <button onClick={toggle}>Edit</button>
            {on &&<EditForm  inputs={{firstName, bountyAmount, living, type, lastName}} submit={inputs => editBounty(_id, inputs)}></EditForm>}
        </div>
    )
}

export default withBountyContext(withToggler(Detail))
