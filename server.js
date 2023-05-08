const express = require('express'); //addding express
const app = express(); //app configuration
const hbs = require('hbs'); //hbs configuration
const mongoose = require("mongoose"); //adding mongoose module

const DriverSchema = require('./database/conn'); //requiring db SCHEMA
const driverRouter = require('./routes/driver'); //driver routes

const port = process.env.PORT || 8000; //default port
app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})
app.use(express.json()); //json converter method

app.use(driverRouter); // using driver routes
app.use(express.urlencoded()); //to get html data 

app.use(express.static('public')); //static site route

app.set('view engine', 'hbs'); // setting view engine as hbs

app.get('/', (req, res) => {
    res.send('home page')
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname+"/public/driver.html") //add form file 
});
app.get('/track-order', (req, res) => {
    res.render('client')
})
app.get('/client', (req, res) => res.render('client' ))

app.get('/track', (req, res) => res.render('track' ))

app.listen(port, (req, res) => {
    console.log(`lisning on http://127.0.0.1:${port}`)
});

