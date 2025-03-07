const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/data', (req, res) => {
  // Access parsed JSON data from the request body
  const { name, age } = req.body;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
