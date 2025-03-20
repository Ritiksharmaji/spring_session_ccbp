const ProductModel = require("../models/ProductModel");
const factoryController = require("../utils/controllerFactory");

exports.createProduct = factoryController.createOne(ProductModel);
exports.getAllProducts = factoryController.getAll(ProductModel);
exports.getProductById = factoryController.getOne(ProductModel);
exports.updateProduct = factoryController.updateOne(ProductModel);
exports.deleteProduct = factoryController.deleteOne(ProductModel);
