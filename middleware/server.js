const express = require('express');

require('dotenv').config();

const middleware = require('./lib/index');

const app = express();

app.use(express.json(), middleware.logger);

app.get('./endpoint', (req, res) => {

})

app.listen(process.env.PORT, () => console.log(`Server Listening on Port ${process.env.PORT}`))