import React from 'react'
import { withLessonContext } from './LessonProvider';

import { withRouter } from 'react-router-dom'

function LessonDetail({ fName, lName, lessonPlan, email, delLesson, _id, history }) {
    return (
        <div>
            <h2>{fName} {lName}</h2>
            <p><strong>Lesson Plan: </strong>{lessonPlan}</p>
            <p>{email}</p>
            <button
                onClick={() => {
                    delLesson(_id)
                    history.push('/')
                }}
            >x</button>
        </div>
    )
}

export default withRouter(withLessonContext(LessonDetail))
