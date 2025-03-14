const UserModel = require("../models/UserModel");
const factoryController = require("../utils/controllerFactory");

exports.createUser = factoryController.createOne(UserModel);
exports.getAllUsers = factoryController.getAll(UserModel);
exports.getUserById = factoryController.getOne(UserModel);
exports.updateUser = factoryController.updateOne(UserModel);
exports.deleteUser = factoryController.deleteOne(UserModel);
