const { default: mongoose } = require("mongoose");
const DriverSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
    },
    phoneNumber : {
        type : Number,
        required: true,
        minlength : 10,
        maxlength : 10,
    },
    currentLocation : {
        longitude :{
            type : Number,
        },
        latitude : {
            type : Number,
        }
    } 
})

const DriverData = mongoose.model('DriverData', DriverSchema); //object of db schema

module.exports = DriverData;