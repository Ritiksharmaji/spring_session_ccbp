const express = require('express');
const fs = require('fs');
const path = require('path');
const ShortUniqueId = require('short-uuid'); 
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Define the path to the JSON data file
const dataFilePath = path.join(__dirname, 'dev-data.json');

// Middleware to parse JSON bodies
app.use(express.json());

// Function to read and parse JSON data
const readUserData = () => {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (err) {
    console.error('Error reading or parsing dev-data.json:', err);
    return [];
  }
};

// Function to write data to the JSON file
const saveUserData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing to dev-data.json:', err);
  }
};

//  GET All Users
const getAllUsers = (req, res) => {
  console.log("GET /api/user called");
  const users = readUserData();
  res.status(200).json({ status: "success", data: users });
};

// GET User by ID
const getUserById = (req, res) => {
  console.log("GET /api/user/:id called");
  const userId = req.params.id;
  const users = readUserData();
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  res.status(200).json({ status: "success", data: user });
};

//POST - Create New User
const createUser = (req, res) => {
  console.log("POST /api/user called");
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ status: "error", message: "Missing 'name' or 'email'" });
  }

  const shortUUID = ShortUniqueId(); // No "new" keyword
const newUser = { id: shortUUID.generate(), name, email };

  const users = readUserData();
  users.push(newUser);
  saveUserData(users);

  res.status(201).json({ status: "success", data: newUser });
};

// PUT - Update User
const updateUser = (req, res) => {
  console.log("PUT /api/user/:id called");
  const userId = req.params.id;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ status: "error", message: "Missing 'name' or 'email'" });
  }

  const users = readUserData();
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  users[userIndex] = { ...users[userIndex], name, email };
  saveUserData(users);

  res.status(200).json({ status: "success", data: users[userIndex] });
};

// DELETE - Delete User
const deleteUser = (req, res) => {
  console.log("DELETE /api/user/:id called");
  const userId = req.params.id;

  const users = readUserData();
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  saveUserData(users);

  res.status(200).json({ status: "success", data: deletedUser });
};

//  Routes
app.get("/api/user", getAllUsers);
app.get("/api/user/:id", getUserById);
app.post("/api/user", createUser);
app.put("/api/user/:id", updateUser);
app.delete("/api/user/:id", deleteUser);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
