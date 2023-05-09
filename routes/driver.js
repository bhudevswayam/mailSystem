const express = require('express');
const router = new express.Router();
const DriverData = require('../models/driverModel');

router.use(express.json()); //json converter method

router.use(express.urlencoded()); //to get html data 

router.use(express.static('public')); //static site route
var ObjectId = require('mongodb').ObjectId;
// ==================LOCATION=====================================
var headersOpt = {  
    "content-type": "application/json",
};
router.post('/form', async (req, res) => {
  
    console.log(req.body);
    try {        
        const driverList = new DriverData({
            name: req.body.name,
            phoneNumber : req.body.phoneNumber,
            currentLocation : {
                longitude : 23.0225,
                latitude : 72.5714
            }
        })
        const result = await driverList.save()

        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    res.redirect('/form');
})
router.post('/track-order', async (req, res, next) => {
    console.log('something');
    console.log(req.body);       
    const _id = req.body.orderId
        const result = await DriverData.findById(_id);
        console.log(result);
        // console.log(result.name);
        res.send(`<h1>Driver : ${result.name}</h1><br><h1>Phone : ${result.phoneNumber}</h1><br><h1>Address : ${result.currentLocation.latitude} , ${result.currentLocation.longitude}</h1><br`)
        // res.redirect('/track')  
})

module.exports = router;