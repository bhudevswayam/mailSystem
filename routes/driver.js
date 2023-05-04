const browserEnv = require('browser-env');
const express = require('express');
const router = new express.Router();
const DriverData = require('../models/driverModel');
// const locationHandler = require('../public/locationScript')
browserEnv(['navigator']);

router.use(express.json()); //json converter method

router.use(express.urlencoded()); //to get html data 

router.use(express.static('public')); //static site route

// ==================LOCATION=====================================


router.post('/form', async (req, res) => {
  
    console.log(req.body);
   
            // const response = await fetch(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${longitude},${latitude}&f=json&token=AAPK07c0979f73a64b5fb7d24d08aa3734fcH1aA3ZMjZT2sejVTWX-lgQmY6jE1nxGOeB7jZUUKSvvzZr7ZYAxRn0JU70UzGm6Y`)
            // const data = await response.json();
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition( async (position) => {
                    let { latitude, longitude } = position.coords;
                    console.log({longitude, latitude}, "$$$$$$");
                })
            }
            // document.getElementById("loc").innerHTML =  data.address.City + ", " +data.address.Subregion + ", " + data.address.Region + ", " + data.address.Postal;

    try {        
        const driverList = new DriverData({
            name: req.body.name,
            phoneNumber : req.body.phoneNumber,
            currentLocation : {
                longitude : "22",
                latitude : 44
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




const createDocument = async () => {
    try {
        const driverlist = new DriverData({
            name: "req.body.name",
            phoneNumber : 9428549399,
            currentLocation : {
                longitude : 22,
                latitude : 44
            }
        })
        // const result = await reactPlaylist.save();
        const result = await DriverData.insertMany([driverlist])

        console.log(result);
    }
    catch(err){
        console.log(err);
    };
}

// createDocument();

  // try{
    //     const newDriver =  new Driver(req.body);
    //     const newDriverCreated = await newDriver.save();
    //     res.status(201).send(newDriverCreated);
    // }
    // catch(err) {
    //     res.status(400).send(err);
    // }