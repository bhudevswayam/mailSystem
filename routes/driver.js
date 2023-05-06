const browserEnv = require('browser-env');
const express = require('express');
const router = new express.Router();
const DriverData = require('../models/driverModel');
browserEnv(['navigator']);

router.use(express.json()); //json converter method

router.use(express.urlencoded()); //to get html data 

router.use(express.static('public')); //static site route

// ==================LOCATION=====================================

router.post('/form', async (req, res) => {
  
    console.log(req.body);
    try {        
        const driverList = new DriverData({
            name: req.body.name,
            phoneNumber : req.body.phoneNumber,
            currentLocation : {
                longitude : 21.1702,
                latitude : 72.8311
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


module.exports = router;