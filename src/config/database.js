// ISKA KAAM KYA HOGA ?
// 1. TO WRITE CODE THAT CONNECTS TO DATABASE AND HELPS TO CREATE IT TOO.

const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
        console.log("Database connected");
    })
}

module.exports = connectToDB;