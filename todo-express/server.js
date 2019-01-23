const express = require('express');
require('dotenv').config();
const app = express();

const database = require('./database.js');

app.use(express.json());

app.get('/todos', (req, res) => {
    const foundTodos = database.find();
    res.send(foundTodos);
})

app.post('/todos', (req, res) => {
    const todoToSave = req.body;
    const savedTodo = database.save(todoToSave);
    res.send(savedTodo)
})


app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    database.findByIdAndRemove(id)
    res.status(204).send()
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updater = req.body;
    const updatedTodo = database.findByIdAndUpdate(id, updater);
    res.status(200).send(updatedTodo)
})

app.get('todos/:id', (req, res) => {
    const id = req.params.id;
    const findById = database.findByIdAndReturn(id);
    res.status(200).send(findById)

})

app.listen(process.env.PORT, () => console.log('Listening on port 8080'))