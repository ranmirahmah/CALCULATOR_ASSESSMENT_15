var http = require("http");
var fs = require("fs");

function sendError(response) {
  response.writeHead(404, { "Content-Type": "text/html" });
  response.write("no page exists with this name");
  response.end();
}

// function onRequest(request, response) {
//     if (request.method == "GET" && request.url =="/") {
//         response.writeHead(200, { "Content-Type": "text/html"});
//         fs.createReadStream("./index.html").pipe(response);
//     } else if (request.method == "GET" && request.url =="/tolu") {
//         response.writeHead(200, { "Content-Type": "text/html"});
//         fs.createReadStream("./tolu.html").pipe(response);
//     } else {
//         sendError(response);
//     }

// }

const onRequest = (request, response) => {
  switch (true) {
    case request.method == "GET" && request.url == "/":
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./index.html").pipe(response);
      break;
    case request.method == "GET" && request.url == "/tolu":
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream("./tolu.html").pipe(response);
      break;

    default:
        sendError(response);
      break;
  }
};

http.createServer(onRequest).listen(2000);
