var http = require("http"); // Import the http module
const port = 3000; // The port for your server

http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to OK
  res.setHeader("Content-Type", "text/plain"); // Set the response header
  res.end("Hello World"); // Send the response body
})
.listen(port);