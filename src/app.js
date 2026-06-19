// ISKA KAAM KYA ?
// 1. TO INITIALIZE A SERVER.
// 2. TO CONFIG SERVER (API CALLS, USING JSON AND CORS).

const express = require("express");
const cors = require("cors");
const path = require("path");

const accModel = require("./models/account_info.model");

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static("./public"))

app.get("/profile", async (req, res)=>{
    const profiles = await accModel.find();

    res.status(200).json({
        "Message": "Success",
        "Profiles":  profiles
    })
})

app.post("/profile",async (req, res)=>{
    const {name, gender, age, email, mobile_num} = req.body;
    await accModel.create({
        "name": name,
        "email": email,
        "age": age,
        "mobile_num": mobile_num,
        "gender": gender,
    });

    res.status(201).json({
        "Messaage": "account created"
    })
})

app.put("/profile/:id", async (req,res)=>{
    const {id} = req.params;
    const updatedData = await accModel.findByIdAndUpdate(
        id,
        req.body,
        {new: true}
    )
    res.status(200).json({
        "message": "data updated successfully",
        "data": updatedData
    })
})

app.use("*name", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "./public/index.html"))
})

module.exports = app;