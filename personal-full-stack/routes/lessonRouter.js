const express = require('express');
const lessonRouter = express.Router();
const Lesson = require('../models/lesson')

lessonRouter.route('/')
    .get((req, res, next) => {
        Lesson.find()
            .then(lessonCollection => res.status(200).send(lessonCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        const lessonData = req.body;
        const lessonDoc = new Lesson(lessonData)
        lessonDoc.save()
            .then(saveLessonDoc => res.status(201).send(saveLessonDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

lessonRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Lesson.findOne({time: id})
            .then(foundLesson => console.log(foundLesson))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .delete((req, res ,next) => {
        const id = req.params.id;
        Lesson.findByIdAndDelete(id)
            .then(delLesson => res.status(204).send(delLesson))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .put((req, res, next) => {
        const id = req.params.id;
        const updatedLesson = req.body;
        Lesson.findByIdAndUpdate(id, updatedLesson, {new: true})
            .then(updatedLesson => res.status(200).send(updatedLesson))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })

module.exports = lessonRouter