var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    console.log("i was here");
    res.status(200).json({
        message: "hi there this is my fancy error page",
    });
})

app.listen(2023, ()=>{
    console.log("server is hitting the ground running");
})