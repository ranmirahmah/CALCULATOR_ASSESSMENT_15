// var express = require("express");
// var app = express();


// app.set("view engine", "ejs")

// app.get("/", (req, res)=>{
//     console.log("I am here");
//     res.render("index", {text: "world"});
// })

// app.listen(300, ()=>{
//     console.log("Server is running");
// });


var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    console.log("i am rahmah");
    res.render("index", {text: 'Rahmah Ranmie'});
})

app.listen(3001, ()=>{
    console.log("rahmah rahmah");
});