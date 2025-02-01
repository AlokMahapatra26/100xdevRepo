const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./database/db");
const todoRoutes = require("./routes/todoRoutes");


app.use(cors());
connectDB();

app.get("/" , (req,res)=>{
    res.status(200).json({
        "message" : "Its an home page"
    })
})


//Middlewares

app.use(express.json());
app.use("/api" , todoRoutes)


//Starting Server

const PORT  = 4000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port number ${PORT}`)
})