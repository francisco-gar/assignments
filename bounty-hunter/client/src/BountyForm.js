import React from 'react'
import FormContainer from './FormContainer'
import { withBountyContext } from './DataProvider';

function BountyForm({ addBounty }) {
    return (
        <FormContainer submit={addBounty}
            inputs={{
                firstName: '',
                lastName: '',
                living: '',
                bountyAmount: '',
                type: ''
            }}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input value={inputs.firstName} onChange={handleChange} type='text' name='firstName' placeholder='Add First Name' />
                    <input value={inputs.lastName} onChange={handleChange} type='text' name='lastName' placeholder='Add Last Name' />
                    <input value={inputs.bountyAmount} onChange={handleChange} type='number' name='bountyAmount' placeholder='Bounty Amount' />
                    <input value={inputs.type} onChange={handleChange} type='text' name='type' placeholder='Type' />
                    <input value={inputs.living} onChange={handleChange} type='checkbox' name='living' placeholder='Living?' />
                    <button>Submit Bounty</button>
                </form>


            )}
        </FormContainer>
    )
}


export default withBountyContext(BountyForm)