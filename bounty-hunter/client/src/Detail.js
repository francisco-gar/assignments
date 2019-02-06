import React from 'react'

import EditForm from './EditForm'
import {withBountyContext} from './DataProvider'


import {withToggler} from './Toggler'

function Detail({ editBounty, toggle, on, firstName, lastName, living, type, bountyAmount, _id, delBounty }) {
    // const {firsTName, } = props.location.state.bounty;
    // console.log(_id)
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{living}</p>
            <p>{bountyAmount}</p>
            <p>{type}</p>
            <button onClick={() => delBounty(_id)}>x</button>
            <button onClick={toggle}>Edit</button>
            {on && <EditForm  inputs={{firstName, bountyAmount, living, type, lastName}} submit={inputs => editBounty(_id, inputs)} ></EditForm>}
        </div>
    )
}

export default withBountyContext(withToggler(Detail))