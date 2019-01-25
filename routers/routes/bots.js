const express = require('express')

const botRouter = express.Router();

botRouter.route('/')
    .get((req,res) => {
        //search the database for all bots
    })
    .post((req,res) => {
        //add bot provided by req body
    })

botRouter.route('/:id')
    .delete((req,res) => {
        //delete individual bot
    })
    .put((req,res) => {
        //edit
    })

module.exports = botRouter
