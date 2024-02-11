const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/notifications" , (req, res)=>{
    res.status(200).json({
        networks : 10,
        jobs : 23,
        messages : 33,
        notifications : 54
    })
})

const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port number ${PORT}`)
})