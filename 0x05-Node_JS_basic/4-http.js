/**
 * create a small HTTP server using the http module
 */
const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
