const express = require('express');
const fs = require('fs');
const path = require('path');
const ShortUniqueId = require('short-uuid');

const app = express();
const port = process.env.PORT || 3000;

// Define the path to the JSON data file
const dataFilePath = path.join(__dirname, 'dev-data.json');

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Function to read and parse the JSON data file
const getUserData = () => {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (err) {
    console.error('Error reading or parsing dev-data.json:', err);
    return [];
  }
};

// Function to write data to the JSON data file
const saveUserData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing to dev-data.json:', err);
  }
};

// Route handler for HTTP GET requests to '/api/user' (Read)
app.get('/api/user', (req, res) => {
  console.log("GET /api/user called");

  // Retrieve all user data
  const userData = getUserData();

  // Respond with the user data
  res.status(200).json({
    status: "success",
    data: userData
  });
});

// Route handler for HTTP POST requests to '/api/user' (Create)
app.post('/api/user', (req, res) => {
  console.log("POST /api/user called");

  const newUser = req.body;

  // Validate the incoming data
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({
      status: "error",
      message: "Missing 'name' or 'email' in request body"
    });
  }

  // Generate a unique ID for the new user
  const uid = new ShortUniqueId({ length: 10 });
  newUser.id = uid();

  // Retrieve existing user data
  const userData = getUserData();

  // Add the new user to the data
  userData.push(newUser);

  // Save the updated data back to the JSON file
  saveUserData(userData);

  // Respond with the newly created user object
  res.status(201).json({
    status: "success",
    data: newUser
  });
});

// Route handler for HTTP PUT requests to '/api/user/:id' (Update)
app.put('/api/user/:id', (req, res) => {
  console.log("PUT /api/user/:id called");

  const userId = req.params.id;
  const updatedUser = req.body;

  // Validate the incoming data
  if (!updatedUser.name || !updatedUser.email) {
    return res.status(400).json({
      status: "error",
      message: "Missing 'name' or 'email' in request body"
    });
  }

  // Retrieve existing user data
  const userData = getUserData();

  // Find the user to update
  const userIndex = userData.findIndex(user => user.id === userId);

  // If user not found, return an error
  if (userIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found"
    });
  }

  // Update the user data
  userData[userIndex] = { ...userData[userIndex], ...updatedUser };

  // Save the updated data back to the JSON file
  saveUserData(userData);

  // Respond with the updated user object
  res.status(200).json({
    status: "success",
    data: userData[userIndex]
  });
});

// Route handler for HTTP DELETE requests to '/api/user/:id' (Delete)
app.delete('/api/user/:id', (req, res) => {
  console.log("DELETE /api/user/:id called");

  const userId = req.params.id;

  // Retrieve existing user data
  const userData = getUserData();

  // Find the user to delete
  const userIndex = userData.findIndex(user => user.id === userId);

  // If user not found, return an error
  if (userIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found"
    });
  }

  // Remove the user from the data
  const deletedUser = userData.splice(userIndex, 1);

  // Save the updated data back to the JSON file
  saveUserData(userData);

  // Respond with the deleted user object
  res.status(200).json({
    status: "success",
    data: deletedUser
  });
});

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});