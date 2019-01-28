const express = require('express');

require('dotenv').config();

const middleware = require('./lib/index');

const user = {
    username: 'bobby',
    password: 'you'
}

const app = express();

app.use(express.json(), middleware.logger);

app.post('/login', (req, res) => {
    // grab user credentials from body
    const credentials = req.body;
    // test against real user
    if(credentials.username !== user.username){
        res.status(401)
        throw new Error('username does not exist')
    }
    if(credentials.password !== user.password){
        res.status(401)
        throw new Error('Password is incorrect')
    }
    // throw error if passwor and or user is wrong otherwise send back auth token
    res.status(200).send({
        user,
        token: '234kh-afwe-fw-wfe-fwevfev'
    })
})
app.use((err, req, res, next) => {
    res.send({errMsg: err.message})
})






app.listen(process.env.PORT, () => console.log(`Server Listening on Port ${process.env.PORT}`))