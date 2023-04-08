const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  //logic for server(API)
  if (request.url == "/") {
    response.setHeader("contentType", "text/html");
    response.end("<h1>this is the home page</h1>");
  } else if (request.url == "/about") {
    response.end("this is the about page");
  } else if (request.url == "/contacts") {
    response.end("This is contact me");
  } else if (request.url == "/contact") {
    response.end("Contact Me details");
  } else if (request.url == "/login") {
    response.write("login page\n");
    response.write("email\n");
    response.write("linkedin\n");
    response.write("phone\n");
    // client is still looking for response end hence:-
    response.end();
  } else if (request.url == "/data") {
    let dataToSend = fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        response.end(err);
      } else {
        response.end(data);
      }
    });
  } else if (request.url == "/w") {
    fs.writeFile("./data.txt", "post", (err, data) => {
      if (err) {
        response.end(err);
      } else {
        response.end("data posted");
      }
    });
  }
});
//giving location to server to run
server.listen(3001, () => {
  console.log("server running at port 3001");
});
