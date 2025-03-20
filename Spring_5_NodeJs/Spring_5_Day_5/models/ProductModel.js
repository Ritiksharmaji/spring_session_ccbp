const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product must have a name"],
        unique: [true, "Product name must be unique"],
        maxLength: [40, "Your product name length exceeds 40 characters"]
    },

    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        validate: {
            validator: function(value) {
                return value > 0;
            },
            message: "Price can't be zero or less than zero"
        }
    },

    Categories: {
        type: String,
        required: true,
    },

    ProductImage: {
        type: [String], // Array of image URLs
    },

    averageRating: {
        type: Number,
        default: 0,
    },

    DiscountedPrice: {
        type: Number,
        validate: {
            validator: function(value) {
                return value < this.price; 
            },
            message: "Discounted price must be less than the original price"
        }
    }
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
