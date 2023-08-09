const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()

//routes
app.get( "/", (req,res)=>{
    res.send("Home page")

} )

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})


//mongodb+srv://benjamindeveloper:<password>@cluster0.lmj4vxf.mongodb.net/