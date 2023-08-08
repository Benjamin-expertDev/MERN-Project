const express = require("express");

const app = express();

//routes
app.get("/", (req, res) => {
    res.send("<h2>Welcome to my home page</h2>");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
