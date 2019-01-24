import React from 'react'
import FormContainer from './FormContainer'
import 

function BountyForm({addBounty}) {
    return(
        <FormContainer submit={addBounty}
        inputs={{
            firstName: '',
            lastName: '',
            living: '',
            bountyAmount: '',
            type: ''
        }}>
        {({ handleSubmit, handleChange, inputs}) => (
            <form onSubmit={handleSubmit}>
            <input value={inputs.firstName}onChange={handleChange}type='text'name='firstName'placeholder='Add First Name' />
            <input value={inputs.lastName}onChange={handleChange}type='text'name='lastName'placeholder='Add Last Name' />
            <input value={inputs.living}onChange={handleChange}type='boolean'name='living'placeholder='Living?' />
            <input value={inputs.bountyAmount}onChange={handleChange}type='number'name='bountyAmount'placeholder='Bounty Amount' />
            <input value={inputs.type}onChange={handleChange}type='text'name='type'placeholder='Type' />
            <button>Submit Bounty</button>
            </form>


        )}
        </FormContainer>
    )
}

export default BountyForm