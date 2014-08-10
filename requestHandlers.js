function start(){
  console.log("Request handle 'start' was called");

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return "Hello start";
}

function upload(){
  console.log("Request handle 'upload' was called");
  return "Hello upload";
}

exports.start = start;
exports.upload = upload;