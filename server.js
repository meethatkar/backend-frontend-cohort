// ISKA KAAM KYA HAI ?
// 1. TO START A SERVER
// 2. TO CONNECT WITH DATABASE.
require("dotenv").config();     //This is imp, without this we can't access env code

const app = require("./src/app");
const connectToDB = require("./src/config/database")

connectToDB();

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})