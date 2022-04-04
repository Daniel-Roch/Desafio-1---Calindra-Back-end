const express = require('express')
const dotenv = require('dotenv')
require('./config/db')

//dotenv
dotenv.config({path: './config.env'})


//App
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Address = require('./models/Address')

const rotaAddress = require('./controllers/authController')
rotaAddress(app)

module.exports = app