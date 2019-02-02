const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
     lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lessonPlan: {
        type: String,
        required: false
    },
    time: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Lesson', lessonSchema)