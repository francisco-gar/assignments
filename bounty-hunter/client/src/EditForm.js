import React from 'react'

import FormContainer from './FormContainer'


function EditForm({inputs, submit }) {
    return (
        <FormContainer inputs={inputs} submit={submit}>
            {({handleChange, handleSubmit, inputs}) => (
                <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text'name='firstName'value={inputs.firstName} />
            <input onChange={handleChange} type='text'name='lastName'value={inputs.lastName} />
            <input onChange={handleChange}type='number'name='bountyAmount'value={inputs.bountyAmount} />
            <input onChange={handleChange}type='text'name='type'value={inputs.type} />
            <label htmlFor=''>Living: <input onChange={handleChange}type='checkbox'name='alive'/></label>
            <button>Save</button>
        </form>
            )}
        </FormContainer>
    )
}

export default EditForm
