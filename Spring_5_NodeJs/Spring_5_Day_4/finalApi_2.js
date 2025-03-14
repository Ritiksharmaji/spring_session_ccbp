const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const UserModel = require('./UserModel');
const ProductModel = require('./ProductModel');

const app = express();
const { PORT, URL } = process.env;
const DbUrl = URL;



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

 app.use(express.json()); // Middleware to parse JSON

 // this middleware for the user
const CheckInput = (req,res,next)=>{
    if(req.method == "POST"){
        const userData = req.body;
        const isEmpty = Object.keys(userData).length == 0;
        if(isEmpty){
            res.status(400).json({
                status:"failure",
                message:"user Details are empty"
            })
        }else{
            next();
        }
    }
}

// middleware for the product 
// Middleware to check input for POST requests
const CheckInputProduct = (req, res, next) => {
    if (req.method === "POST") {
        const productData = req.body;
        if (Object.keys(productData).length === 0) {
            return res.status(400).json({
                status: "failure",
                message: "Product details are empty"
            });
        }
    }
    next();
};

// ---------------------------------------- this methods are for the user  --------------------------------------------------
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

// ------------------------------- -----------------------these methods are for the product ---------------------------------------

// POST - Create New Product
const createProduct = async (req, res) => {
    console.log("POST /api/product called");
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json({ status: "success", data: product });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

// GET - Retrieve All Products
const getAllProducts = async (req, res) => {
    console.log("GET /api/product called");
    try {
        const products = await ProductModel.find();
        res.status(200).json({ status: "success", data: products });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// GET - Retrieve Product by ID
const getProductById = async (req, res) => {
    console.log(`GET /api/product/${req.params.id} called`);
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }
        res.status(200).json({ status: "success", data: product });
    } catch (error) {
        res.status(400).json({ status: "error", message: "Invalid Product ID" });
    }
};

// PUT - Update Product
const updateProduct = async (req, res) => {
    console.log(`PUT /api/product/${req.params.id} called`);
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }
        res.status(200).json({ status: "success", data: product });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

// DELETE - Remove Product
const deleteProduct = async (req, res) => {
    console.log(`DELETE /api/product/${req.params.id} called`);
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }
        res.status(200).json({ status: "success", message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};


// -------------- Routes -------------------------------------
// app.use(CheckInput);

//  Define Routes for the user
app.post("/api/user",CheckInput, createUser);
app.get("/api/user", getAllUsers);
app.get("/api/user/:id", getUserById);
app.put("/api/user/:id", updateUser);
app.delete("/api/user/:id", deleteUser);

// Define Routes for the product
app.post("/api/product", CheckInputProduct, createProduct);
app.get("/api/product", getAllProducts);
app.get("/api/product/:id", getProductById);
app.put("/api/product/:id", updateProduct);
app.delete("/api/product/:id", deleteProduct);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
