import React from 'react'
import FormContainer from './FormContainer';
import { withLessonContext } from './LessonProvider'

function LessonForm({ addLesson, fName, lName, email, lessonPlan, match, lessons }) {
        return (
            <div>
                <FormContainer submit={addLesson}
                inputs={{
                    fName: '',
                    lName: '',
                    lessonPlan: '',
                    email: '',
                    time: match.params.date
                }}>
                {({handleSubmit, handleChange, inputs}) => (
                    <form onSubmit={handleSubmit}>
                        <input value={inputs.fName} onChange={handleChange} type='text' name='fName' placeholder='First Name' />
                        <input value={inputs.lName} onChange={handleChange} type='text' name='lName' placeholder='Last Name' />
                        <input value={inputs.lessonPlan} onChange={handleChange} type='text' name='lessonPlan' placeholder='LessonPlan' />
                        <input value={inputs.email} onChange={handleChange} type='text' name='email' placeholder='Email' />
                        <button>Add Lesson</button>
                    </form>
                )}
                </FormContainer>
                <h3>{fName} {lName}</h3>
                <p>{email}</p>
                <p>{lessonPlan}</p>

            </div>
        )
}
export default withLessonContext(LessonForm)
