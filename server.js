var http = require("http");
var url = require("url");
var port = 8888;

function start(route){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Wolrd");
    response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started listening on port " + port);
}

exports.start = start;