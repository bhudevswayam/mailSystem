const express = require('express'); //addding express
const app = express(); //app configuration

const mongoose = require("mongoose"); //adding mongoose module

const DriverSchema = require('./database/conn'); //requiring db SCHEMA
const driverRouter = require('./routes/driver'); //driver routes

const port = process.env.PORT || 3001; //default port

app.use(express.json()); //json converter method

app.use(driverRouter); // using driver routes
app.use(express.urlencoded()); //to get html data 

app.use(express.static('public')); //static site route

app.get('/', (req, res) => {
    res.send('home page')
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname+"/public/index.html") //add form file 
});


app.listen(port, (req, res) => {
    console.log(`lisning on http://127.0.0.1:${port}`)
});

