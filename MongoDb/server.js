const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./Views/server/database/connection")

const app = express();

dotenv.config({path: "config.env"});
let PORT = process.env.PORT || 3001

app.use(morgan("tiny"));
connectDB()


app.use(bodyParser.urlencoded({extended: true}))


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    // res.status(200).json
    res.render("index")
        // message: "Rahmah is cute"
    })


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})