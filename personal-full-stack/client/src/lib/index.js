import dateFns from 'date-fns';

export const matchLessonTime = hour => lesson => {
    return dateFns.isEqual(hour, lesson.time)
}

export const matchLessonDay = day => lesson => {
    return dateFns.isEqual(day, lesson.time.day)
}

