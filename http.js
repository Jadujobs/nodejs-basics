const http = require("http");

// Simple Server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Hello World!</h1>");
//   res.end();
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write("<h1>Main Page</h1>");
  } else if (req.url == "/users") {
    if (req.method == "GET") {
      res.write("<h1>User Fetched</h1>");
    } else if (req.method == "POST") {
      res.write("<h1>User Created/h1>");
    } else if (req.method == "DELETE") {
      res.write("<h1>User Deleted/h1>");
    }
  }

  res.end();
});

server.listen(8000, console.log("Server Started..."));
