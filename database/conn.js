const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/driverDB')
.then(()=>console.log(`Connected Sucessfully with DB`))
.catch((err)=>console.log(err));
