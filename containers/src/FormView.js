import React from 'react'
import {withFormContainer} from './FormContainer'

function FormView({handleChange, inputs, handleSubmit}) {
    return (
        <form >
            <input value={inputs.name} onChange={handleChange} name='name'type='text' />
            <input value={inputs.email} onChange={handleChange}name='email'type='text' />
            <button>Submit</button>
        </form>
    )
}

export default withFormContainer(FormView, {name: '', email: ''})
