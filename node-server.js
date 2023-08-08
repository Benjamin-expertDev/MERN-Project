const http = require("http");

const server = http.createServer((req, res) => {
    //routes
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html"); 
        res.write("<h2>Karibu home...</h2>");
        res.end();
    }
        if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html"); 
        res.write("<h3>About us</h3>");
        res.end();
    }
});

server.listen(5000, "localhost", () => {
    console.log("Server is running on port 5000");
});
