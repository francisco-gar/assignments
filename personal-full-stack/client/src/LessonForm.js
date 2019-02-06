import React from 'react'
import FormContainer from './FormContainer';
import { withLessonContext } from './LessonProvider';
import LessonDetail from './LessonDetail';

import './LessonForm.css'


function LessonForm({ addLesson, match, location, history }) {
    return (
        <div>
            {location.state.scheduledLesson ?
                <LessonDetail {...location.state.scheduledLesson} /> :
                <FormContainer
                    submit={inputs => addLesson(inputs).then(()=> history.push(`/`))}
                    inputs={{
                        fName: '',
                        lName: '',
                        lessonPlan: '',
                        email: '',
                        time: match.params.date
                    }}>
                    {({ handleSubmit, handleChange, inputs }) => (
                        <form className="forminputs" onSubmit={handleSubmit}>
                            <input value={inputs.fName} onChange={handleChange} type='text' name='fName' placeholder='First Name' />
                            <input value={inputs.lName} onChange={handleChange} type='text' name='lName' placeholder='Last Name' /><br></br>
                            <input className="largeinput" value={inputs.lessonPlan} onChange={handleChange} type='text' name='lessonPlan' placeholder='Lesson Plan' /><br></br>
                            <input value={inputs.email} onChange={handleChange} type='text' name='email' placeholder='Email' /><br></br>
                            <button>Add Lesson</button>
                        </form>
                    )}
                </FormContainer>
            }
        </div>
    )
}
export default withLessonContext(LessonForm)
