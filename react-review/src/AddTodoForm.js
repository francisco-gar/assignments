import React from 'react'
import FormContainer from './FormContainer'
import {withTodoContext} from './TodoProvider'

function AddTodoForm({addTodo}) {
    return (
        
        <FormContainer submit={addTodo}
        inputs={{
            title: '',
            description: '',
            price: ''
        }}>
        {({ handleSubmit, handleChange, inputs}) => (
            <form onSubmit={handleSubmit}>
            <input value={inputs.title}onChange={handleChange}type='text'name='title'placeholder='Add Title' />
            <input value={inputs.description}onChange={handleChange}type='text'name='description'placeholder='Add Description' />
            <input value={inputs.price}onChange={handleChange}type='number'name='price'placeholder='Add Price' />
            
            <button>+</button>
            </form>
        )}
        </FormContainer>
    )
}

export default withTodoContext(AddTodoForm)
