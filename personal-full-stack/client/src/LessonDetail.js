import React from 'react'

function LessonDetail({fName, lName, lessonPlan, email}) {
    return (
        <div>
        <div>
            <h2>{fName} {lName}</h2>

            <p><strong>Lesson Plan: </strong>{lessonPlan}</p>
            <p>{email}</p>
        </div>
        <button>X</button>
        </div>
    )
}

export default LessonDetail
