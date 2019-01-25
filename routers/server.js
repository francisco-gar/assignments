const express = require('express');
require('dotenv').config();

const app = express();

// app.use('/users', require('./routes.users.js'))
app.use('/bots', require('./routes.bots.js'))
// app.use('/cosmicBeverages', require('./routes.cosmicBeverages.js'))

app.listen(process.env.PORT, console.log('Listening on PORT ${process.env.PORT'))