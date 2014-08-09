var http = require("http");
var port = 8888;

function start(){
  function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Wolrd");
    response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started listening on port " + port);
}

exports.start = start;