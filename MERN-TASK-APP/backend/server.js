const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()

//routes
app.get( "/", (req,res)=>{
    res.send("Home page")

} )


const PORT = process.env.PORT || 5000


const startServer = async ()=> {
    try{
        await connectDB()
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        })

    }
    catch{
        console.log(error)

    }
}
startServer()
