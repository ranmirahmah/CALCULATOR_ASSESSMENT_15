// const http = require("http")

// const port = 3000
// const fs = "fs"
// fs.read("index.html")
// fs.write("index.html")

var http = require("http");
var module1 = require("./module.js")

function onRequest(request, response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write(module1.string1);
    // module.patek();
    response.end();
}

http.createServer(onRequest).listen(1805)