const express = require("express");  
const userController = require("../controllers/userController");  
const productController = require("../controllers/productController");  

const router = express.Router();  // Creating an instance of Express Router

// ========================== User Routes ==========================

// Route to handle fetching all users and creating a new user
router.route("/users")
    .get(userController.getAllUsers)  
    .post(userController.createUser); 

// Routes to handle fetching, updating, and deleting a specific user by ID
router.route("/users/:id")
    .get(userController.getUserById)  
    .put(userController.updateUser)  
    .delete(userController.deleteUser); 

// ========================== Product Routes ==========================

// Route to handle fetching all products and creating a new product
router.route("/products")
    .get(productController.getAllProducts)  
    .post(productController.createProduct); 

// Routes to handle fetching, updating, and deleting a specific product by ID
router.route("/products/:id")
    .get(productController.getProductById)  
    .put(productController.updateProduct)   
    .delete(productController.deleteProduct); 

// Export the router to be used in the main server file (server.js)
module.exports = router;  
