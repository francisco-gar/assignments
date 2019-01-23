// RESTful api representaional state transfer
// get put post delete
// always needs a method and url. put and post need a body
// endpoint should always be a plural noun
// server has access to requet object. but also response object
// response contains header and data

const express = require('express');
require('dotenv').config();

const app = express();

// database goes here
const database = require('./database.js')
// convert everything to json and add it to the req body as req.body
app.use(express.json());

app.get('/cosmicBeverages', (req, res) => {
    const foundBeverages = database.find();
    res.send(foundBeverages)
})



app.post('./cosmicBeverages', (req, res) => {
    // we need to see what the request body contains
    const beverageToSave = req.body;
    const savedBeverage = database.save(beverageToSave);
    res.status(201).send(savedBeverage)
    // add it to the database
    // 
})

app.delete('/cosmicBeverages/:id', (req, res) => {
    // grab id from req
    const id = req.params.id;

    // find the thing by it's id
    database.findByIdAndRemove(id);
    // remove the thing
    // send back cofirmation 204 resonse
    res.status(204).send()
})

app.put('/cosmicBeverages/:id', (req, res) => {
    // grab id from req
    const id = req.params.id;
    // get updated from req body
    const updater = req.body;
    const updatedBeverage = database.findByIdAndUpdate(id, updater);
    // find thing by id and replace it
    res.status(200).send(updatedBeverage)
})



app.listen(process.env.PORT, () => console.log('Server Listening on PORT 8080'))