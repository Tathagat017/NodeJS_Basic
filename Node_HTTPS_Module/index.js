const http = require("http");

const server = http.createServer((request, response) => {
  //logic for server(API)
  if (request.url == "/") {
    response.end("this is the home page");
  } else if (request.url == "/about") {
    response.end("this is the about page");
  } else if (request.url == "/contacts") {
    response.end("This is contact me");
  }
});
//giving location to server to run
server.listen(3001, () => {
  console.log("server running at port 3001");
});
