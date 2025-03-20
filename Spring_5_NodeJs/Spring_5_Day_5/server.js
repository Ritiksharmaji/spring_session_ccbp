require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/routes");

// Initialize Express App
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(morgan("dev")); // Logging

// Routes
app.use("/api", routes);

// Default Route
app.get("/", (req, res) => {
  res.send("API is running ");
});

// Load environment variables
const { PORT, URL } = process.env;
if (!URL) {
    console.error(" MongoDB connection URL is missing from environment variables.");
    process.exit(1);
}

const DB_URI = URL;

// MongoDB Connection
async function connectDB() {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" Connected to MongoDB");
    } catch (error) {
        console.error(" MongoDB connection error:", error);
        process.exit(1); 
    }
}

// Connect to DB
connectDB();


app.get("/search", (req,res)=>{
    console.log(`query-parameter:${req.query}`);
    res.status(200).json({
        message:req.query,
        status:"success"
    })
})

// Start Server
app.listen(PORT || 5000, () => {
  console.log(`🚀 Server running on http://localhost:${PORT || 5000}`);
});
