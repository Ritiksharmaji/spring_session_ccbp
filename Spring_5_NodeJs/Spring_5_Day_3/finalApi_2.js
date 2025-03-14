const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');

const app = express();
const { PORT, URL } = process.env;
const DbUrl = URL;

app.use(express.json()); // Middleware to parse JSON

if (!URL) {
    throw new Error("MongoDB connection URL is missing from environment variables.");
}

//  Better way: Using async/await for MongoDB connection
async function connectDB() {
    try {
        await mongoose.connect(DbUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process if DB connection fails
    }
}

connectDB();

//  Define User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        unique: true, 
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"] 
    },
    password: { type: String, required: [true, "Password is required"], minlength: [6, "Password must be at least 6 characters"] },
    confirmPassword: { 
        type: String, 
        required: [true, "Confirm Password is required"], 
        validate: {
            validator: function(value) {
                return value === this.password;
            },
            message: "Passwords do not match"
        }
    }
});

// Create User Model
const UserModel = mongoose.model('User', userSchema);

//  POST - Create New User
const createUser = async (req, res) => {
    console.log("POST /api/user called");
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json({ status: "success", data: user });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

//  GET - Retrieve All Users
const getAllUsers = async (req, res) => {
    console.log("GET /api/user called");
    try {
        const users = await UserModel.find();
        res.status(200).json({ status: "success", data: users });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

//  GET - Retrieve User by ID
const getUserById = async (req, res) => {
    console.log(`GET /api/user/${req.params.id} called`);
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        res.status(200).json({ status: "success", data: user });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Invalid User ID" });
    }
};

//  PUT - Update User
const updateUser = async (req, res) => {
    console.log(`PUT /api/user/${req.params.id} called`);
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, 
          req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        res.status(200).json({ status: "success", data: user });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

//  DELETE - Remove User
const deleteUser = async (req, res) => {
    console.log(`DELETE /api/user/${req.params.id} called`);
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        res.status(200).json({ status: "success", message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

//  Define Routes
app.post("/api/user", createUser);
app.get("/api/user", getAllUsers);
app.get("/api/user/:id", getUserById);
app.put("/api/user/:id", updateUser);
app.delete("/api/user/:id", deleteUser);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
