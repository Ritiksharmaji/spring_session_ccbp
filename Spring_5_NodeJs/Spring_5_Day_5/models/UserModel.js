const mongoose = require('mongoose');

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

// Create User Model and export 
module.exports = mongoose.model('User', userSchema);