const http = require("http")
const server = http.createServer((req,res)=>{
    console.log("ben")
})
server.listen("5000", "localhost", ()=>{
    console.log("Server is runnig on port 5000")
})