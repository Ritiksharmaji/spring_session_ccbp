const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const UserModel = require('./UserModel');
const ProductModel = require('./ProductModel');
const createController = require('./controllerFactory');

const app = express();
const { PORT, URL } = process.env;
const DbUrl = URL;

if (!URL) {
    throw new Error("MongoDB connection URL is missing from environment variables.");
}

// MongoDB Connection
async function connectDB() {
    try {
        await mongoose.connect(DbUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
}
connectDB();

app.use(express.json()); // Middleware to parse JSON

// Middleware to check input for POST requests
const checkInput = (req, res, next) => {
    if (req.method === "POST" && Object.keys(req.body).length === 0) {
        return res.status(400).json({ status: "failure", message: "Details are empty" });
    }
    next();
};

// Create user and product controllers using factory function
const userController = createController(UserModel);
const productController = createController(ProductModel);

// Define Routes for Users
app.post("/api/user", checkInput, userController.create);
app.get("/api/user", userController.getAll);
app.get("/api/user/:id", userController.getById);
app.put("/api/user/:id", userController.update);
app.delete("/api/user/:id", userController.delete);

// Define Routes for Products
app.post("/api/product", checkInput, productController.create);
app.get("/api/product", productController.getAll);
app.get("/api/product/:id", productController.getById);
app.put("/api/product/:id", productController.update);
app.delete("/api/product/:id", productController.delete);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
