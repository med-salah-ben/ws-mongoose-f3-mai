const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name : String,
    price : {type : Number , required : true}
})

const Car = mongoose.model("Car" , carSchema);

module.exports = Car