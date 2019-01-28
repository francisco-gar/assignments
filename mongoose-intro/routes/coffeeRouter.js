const express = require('express');
const coffeeRouter = express.Router();
const Coffee = require('../models/coffee')

//Handle Endpoints Here

coffeeRouter.route('/')
    .get((req, res, next) => {
        // ask the database for the entire collection
        Coffee.find()
            .then(coffeeCollection => res.status(200).send(coffeeCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        // get fields from req.body
        const coffeeData = req.body;
        // turn it into a DOCUMENT
        const coffeeDoc = new Coffee(coffeeData)
        // SAVE to the database
        coffeeDoc.save()
            .then(savedCoffeeDoc => res.status(201).send(savedCoffeeDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
        // send back the saved coffee document
    })


coffeeRouter.route('/:id')
    .get((req, res, next) => {
        // get ID from req.params
        const id = req.params.id;
        // find by id
        Coffee.findById(id)
            .then(foundCoffee => res.status(200).send(foundCoffee))
            .catch(err => {
                res.status(500);
                next(err);
            })
        // send it back
    })
    .delete((req, res, next) => {
        const id = req.params.id;
        Coffee.findByIdAndDelete(id)
            .then(delCoffee => res.status(204).send(delCoffee))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .put((req, res, next) => {
        const id = req.params.id;
        const updatedCoffee = req.body;
    Coffee.findByIdAndUpdate(id, updatedCoffee, {new: true})
            .then(updatedCoffee => res.status(200).send(updatedCoffee))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

    coffeeRouter.route('/:id/additives/:additiveId')

    module.exports = coffeeRouter;