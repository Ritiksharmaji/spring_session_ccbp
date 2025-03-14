const express = require("express");
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const router = express.Router();

// User Routes
router.route("/users")
    .get(userController.getAllUsers)
    .post(userController.createUser);
router.route("/users/:id")
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// Product Routes
router.route("/products")
    .get(productController.getAllProducts)
    .post(productController.createProduct);
router.route("/products/:id")
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;
