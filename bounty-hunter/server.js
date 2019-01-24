const express = require('express');

require('dotenv').config();

const app = express();

const database = require('./database.js');

app.use(express.json());

app.get('/bounties', (req, res) => {
    const foundBounties = database.find();
    res.status(200).send(foundBounties)
})

app.post('/bounties', (req, res) => {
    const bountyToSave = req.body;
    const savedBounty = database.save(bountyToSave);
    res.status(201).send(savedBounty)
})

app.delete('/bounties/:id', (req, res) => {
    const id = req.params.id;
    database.findByIdAndRemove(id)
    res.status(204).send()
})

app.put('/bounties/:id', (req, res) => {
    const id = req.params.id;
    const updater = req.body;
    const updatedBounty = database.findByIdAndUpdate(id, updater);
    res.status(200).send(updatedBounty)
})




app.listen(process.env.PORT, () => console.log('Server Listening on Port 8080'))