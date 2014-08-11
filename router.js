function route(handle, pathname){
  console.log("About route request for " + pathname);

  if (typeof handle[pathname] === "function"){
    return handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
    return "404 not found";
  }
}

exports.route = route;