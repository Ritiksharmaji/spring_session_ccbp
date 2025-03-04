// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port number for the server to listen on
// Use the PORT environment variable if available; otherwise, default to port 3000
const port = process.env.PORT || 3000;

// Define a route handler for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send a 'Hello World!' response to the client
  res.send('Hello World!');
});

// Define a route handler for HTTP GET requests to '/api/user'
app.get('/api/user', (req, res) => {
  console.log("/api/user API called");
  res.send("User API called");
});

// Middleware function that sends a response
app.use((req, res) => {
  res.send("Hello from the middleware");
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  // Log a message to the console once the server is running
  console.log(`Server is running on port ${port}`);
});
