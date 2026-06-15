// ISKA KAAM KYA HOGA ?
// 1. TO CREATE SCHEMA.
// 2. TO CREATE MODEL.

const mongoose = require("mongoose");

const accSchema = new mongoose.Schema({
    "name": String,
    "mobile_num": Number,
    "email": String,
    "gender": String,
    "age": Number,
})

const accModel = mongoose.model("Account", accSchema);

module.exports = accModel;