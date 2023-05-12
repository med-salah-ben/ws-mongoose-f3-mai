const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const Car = require("./model/Car");

const app = express();
connectDB();

// Add New Car
// const car = new Car({
//     name: "Porsche",
//     price:55000
// })

// car.save().then(()=>console.log(car)).catch((err)=>console.log(err))


//Find All Cars
const findCars = async()=>{
    try {
        const result = await Car.find({price:{$gte:45000}})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// findCars()

//Find Car By Name
const findByName =async()=>{
    try {
        let carName = "Toyota"
        const result = await Car.find({name:carName})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// findByName()


//Find By ID

const findCarByID=async()=>{
    try {
        const ID = "645e10f5de75d9e3c03380de"
        const result = await Car.findById(ID)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// findCarByID()

//update car
const updateCar =async()=>{
    try {
        const ID = "645e10f5de75d9e3c03380de"
        await Car.updateOne({_id:ID} , {name:"wallyscar"})
        console.log("car Updated...")
    } catch (error) {
        console.log(error)
    }
}
// updateCar()

const FindAndUpdateCar =async()=>{
    try {
        const ID = "645e10f5de75d9e3c03380de"
        await Car.findByIdAndUpdate(ID , {price:20000})
        console.log("car Updated...")
    } catch (error) {
        console.log(error)
    }
}

// FindAndUpdateCar()

const deleteCar =async()=>{
    try {
        const ID = "645e10f5de75d9e3c03380de"
        await Car.deleteOne({_id:ID})
        console.log("car Deleted...")
    } catch (error) {
        console.log(error)
    }
}

// deleteCar()

const FindAndDeleteCar =async()=>{
    try {
        const name = "KIA"
        await Car.findOneAndDelete({name:name})
        console.log("car deleted...")
    } catch (error) {
        console.log(error)
    }
}

// FindAndDeleteCar();

const PORT = process.env.PORT || 6001;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${PORT}`);
});
