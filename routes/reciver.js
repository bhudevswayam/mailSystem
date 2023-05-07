const express = require('express');
const router = new express.Router();
const DriverData = require('../models/driverModel');

router.use(express.json()); //json converter method

router.use(express.urlencoded()); //to get html data 

router.use(express.static('public')); //static site route

// ==================LOCATION=====================================




module.exports = router;