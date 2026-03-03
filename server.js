const http = require("http"); // Import the http module

const hostname = "127.0.0.1"; // Localhost
const port = 3000; // The port for your server

// Create the server and handle requests and responses
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to OK
  res.setHeader("Content-Type", "text/plain"); // Set the response header
  res.end("Hello World"); // Send the response body
});

// Start the server and listen for incoming connections
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
