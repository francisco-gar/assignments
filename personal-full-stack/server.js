const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/lessons', require('./routes/lessonRouter'))

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
})

app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})