var http = require("http");
var port = 8888;

function onRequest(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(port);

console.log("Server has started listening on port " + port);