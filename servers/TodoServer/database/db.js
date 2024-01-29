const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/TodoApp")
        console.log(`MongoDB database connected successfully`)
    }
    catch(error){
        console.error(`mongodb database failed to connect : ${error.message}`)
    }
}

module.exports = connectDB;