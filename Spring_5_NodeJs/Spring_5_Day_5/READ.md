
We covered the following things in this unit:
Middlewares, Auth , JWT , protect route , login signup , logout

1) Intro to Middleware & its Necessicity

2) Explanation of Auth, JWT

3) Life Cycel of JWT

4) Implementing the Protect route, login, signup & logout


Data validation, aliasing , central Error handler

1) Data Validation in DB

2) Concept of Aliasing

3) Explanation of Errors & types

4) Implementing central Error handler

### -------------------

step-1: installl: npm install cors express mongoose dotenv morgan

## ---------------------

1) Intro to MVC architecutre & its uses in node js
ans: 

### **Introduction to MVC Architecture & Its Uses in Node.js**  

#### **What is MVC Architecture?**  
MVC (Model-View-Controller) is a **software design pattern** used for organizing code in web applications. It helps in separating concerns, making the application more scalable and maintainable.  

The three main components of MVC are:  

1. **Model**  
   - Represents the **data** and **business logic** of the application.  
   - Interacts with the database to perform CRUD (Create, Read, Update, Delete) operations.  
   - Example: Database schema, data validation, and business rules.  

2. **View**  
   - Handles the **presentation layer** (UI/UX) of the application.  
   - Displays data received from the **Model** and sends user input to the **Controller**.  
   - Example: EJS, Handlebars, or frontend frameworks like React in a separate client-server setup.  

3. **Controller**  
   - Acts as an **intermediary** between the Model and the View.  
   - Handles user requests, processes input, interacts with the Model, and returns responses to the View.  
   - Example: Routing logic in Express.js.  

---

### **Why Use MVC in Node.js?**  
Node.js is widely used for building web applications, and MVC provides an **organized structure** for managing code effectively. Some benefits include:  

✅ **Separation of Concerns** – Each part of the application has a clear role.  
✅ **Scalability** – Easy to extend and modify the application.  
✅ **Code Reusability** – Components can be reused across different parts of the application.  
✅ **Maintainability** – Debugging and testing become more manageable.  

---

### **MVC in a Node.js + Express Application**  
Below is an example of how MVC is implemented in a Node.js application using **Express.js** and **MongoDB (Mongoose ORM)**.

#### **Project Structure**
```
/mvc-demo
│── /models
│   ├── User.js
│── /views
│   ├── index.ejs
│── /controllers
│   ├── userController.js
│── /routes
│   ├── userRoutes.js
│── app.js
│── package.json
```

---

### **1. Model (User.js) - Represents Data**
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model("User", userSchema);
```

---

### **2. Controller (userController.js) - Handles Logic**
```javascript
const User = require("../models/User");

// Fetch all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.render("index", { users });
};

// Add new user
exports.addUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  await newUser.save();
  res.redirect("/");
};
```

---

### **3. Routes (userRoutes.js) - Manages Routing**
```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/add", userController.addUser);

module.exports = router;
```

---

### **4. View (index.ejs) - Displays Data**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Users List</title>
</head>
<body>
    <h1>Users</h1>
    <ul>
        <% users.forEach(user => { %>
            <li><%= user.name %> - <%= user.email %></li>
        <% }); %>
    </ul>

    <form action="/add" method="POST">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="number" name="age" placeholder="Age" required>
        <button type="submit">Add User</button>
    </form>
</body>
</html>
```

---

### **5. Setting Up Express App (app.js)**
```javascript
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mvc_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.use("/", userRoutes);

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **How the MVC Flow Works**
1️⃣ A user visits `/` → The **Controller** calls the **Model** to fetch data.  
2️⃣ The **Model** retrieves users from the database and sends them to the **View**.  
3️⃣ The **View (EJS template)** displays the users in a list.  
4️⃣ When a user submits the form, the **Controller** adds the data to the **Model**.  
5️⃣ The **Model** stores the new user in MongoDB and redirects the user back to `/`.  

---

### **Conclusion**  
Using the **MVC architecture** in Node.js applications helps in writing **structured, scalable, and maintainable** code. It ensures **separation of concerns**, making it easier to debug and extend functionality as needed.  

Would you like me to extend this with additional features like authentication, pagination, or API-based MVC? 🚀


### ---- pre and post Hook in express-js ------------------
### **Pre and Post Hooks in Express.js**
In **Express.js**, "pre" and "post" hooks are often associated with **Mongoose** middleware. These hooks allow you to execute logic **before** (pre) or **after** (post) certain database operations.

---

## **📌 1. Pre Hooks (`pre`)**
A **pre hook** runs **before** a specific operation (like `save`, `find`, `update`, etc.).

### **✅ Example: Running Code Before Saving a Document**
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Pre-save hook: Hash password before saving
userSchema.pre("save", function (next) {
  console.log(`Hashing password for user: ${this.email}`);
  // Example: Hash password here (e.g., with bcrypt)
  this.password = `hashed_${this.password}`;
  next();
});

const User = mongoose.model("User", userSchema);
```
### **🔥 How It Works?**
1. Before saving (`save` operation), the function runs.
2. Logs a message and hashes the password.
3. Calls `next()` to proceed with saving.

---

## **📌 2. Post Hooks (`post`)**
A **post hook** runs **after** a specific operation (like `save`, `find`, etc.).

### **✅ Example: Running Code After Saving a Document**
```js
userSchema.post("save", function (doc, next) {
  console.log(`User ${doc.email} was successfully created!`);
  next();
});
```
### **🔥 How It Works?**
1. After saving (`save` operation), the function runs.
2. Logs a success message.

---

## **📌 3. Using Hooks with Other Operations**
You can use hooks with **`findOne`, `findByIdAndUpdate`, `deleteOne`**, etc.

### **✅ Example: Pre Hook Before `findOne`**
```js
userSchema.pre("findOne", function (next) {
  console.log(`Finding user: ${this.getQuery()}`);
  next();
});
```

### **✅ Example: Post Hook After `findOne`**
```js
userSchema.post("findOne", function (doc, next) {
  if (!doc) {
    console.log("User not found!");
  } else {
    console.log(`User found: ${doc.email}`);
  }
  next();
});
```

---

## **📌 When to Use Pre & Post Hooks?**
| Hook | Use Case |
|------|---------|
| **Pre Hook (`pre`)** | Modify data before saving, logging, validation, hashing passwords |
| **Post Hook (`post`)** | Logging, notifications, sending emails after an action |

---

## **✅ Summary**
- **Pre Hook (`pre`)**: Runs before an operation (useful for modifying data, validation).
- **Post Hook (`post`)**: Runs after an operation (useful for logging, notifications).
- Mostly used in **Mongoose models**.
- Helps keep code **clean and maintainable**.

Let me know if you need more details! 🚀

## --- const router = express.Router(); why we are using we are using ---------------------------

In **Express.js**, `express.Router()` is used to create modular, mountable route handlers. 

### **Why Use `express.Router()`?**
1. **Organizing Routes**: Instead of defining all routes in `server.js`, you can group related routes into separate files for better maintainability.
2. **Middleware Support**: Allows adding middleware at the route level.
3. **Code Reusability**: Makes it easy to export and reuse routes across files.
4. **Better Readability**: Keeps your `server.js` clean and focused on server initialization.

---

### **How It Works?**
```javascript
const express = require("express");
const router = express.Router(); // Creates a new router instance

// Define routes
router.get("/products", (req, res) => {
    res.send("Get all products");
});

router.post("/products", (req, res) => {
    res.send("Add a new product");
});

module.exports = router; // Export router
```

---

### **Using It in `server.js`**
```javascript
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes"); // Import routes

app.use("/api", productRoutes); // Mount router on /api

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```
Now, your API endpoints will be:
- `GET /api/products`
- `POST /api/products`

This keeps your code **modular and scalable**! 


## -------- differ between const router = express.Router();  and const app = express(); -------------

### **Difference between `const router = express.Router();` and `const app = express();`**

Both `express.Router()` and `express()` are used in Express.js, but they serve different purposes.

---

### **1. `const app = express();`**
✅ **Purpose:** Creates an Express application instance.  
✅ **Use Case:** Used to initialize the entire server.  
✅ **Scope:** Global, used to handle all middleware, routes, and configurations.

**Example:**
```javascript
const express = require("express");
const app = express();  // Creates an instance of Express

app.use(express.json());  // Middleware to parse JSON requests

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

📌 **Key Points:**
- `app` is the main instance that runs the Express server.
- Used to register middleware, routes, and error handling globally.
- Calls `app.listen(PORT, callback)` to start the server.

---

### **2. `const router = express.Router();`**
✅ **Purpose:** Creates a modular, mountable route handler.  
✅ **Use Case:** Used to manage routes separately in different files.  
✅ **Scope:** Local, typically within route files (`routes.js`).  

**Example:**
```javascript
const express = require("express");
const router = express.Router();  // Creates a new router instance

router.get("/users", (req, res) => {
    res.send("List of users");
});

router.post("/users", (req, res) => {
    res.send("User created");
});

module.exports = router; // Export router to use in the main app
```

📌 **Key Points:**
- `router` is used to create separate route modules.
- Allows grouping of similar routes (`/users`, `/products`, etc.).
- Helps keep the main `server.js` file clean and organized.
- **Must be attached to `app`** using `app.use('/api', router);` in `server.js`.

---

### **How They Work Together**
In a typical Express project, `router` is used for modular routing, while `app` initializes and manages the server.

#### **Example (Combining both in `server.js`)**
```javascript
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import user routes

app.use(express.json()); 
app.use("/api", userRoutes); // Attach the router under the `/api` prefix

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

### **🔑 Summary**
| Feature | `express()` (`app`) | `express.Router()` (`router`) |
|---------|---------------------|------------------------------|
| **Purpose** | Initializes the Express app (server) | Creates a modular route handler |
| **Scope** | Global (used for middleware, routing, listening) | Local (used for grouping routes) |
| **Usage** | `app.use()` for global middleware | `router.use()` for local middleware |
| **Example** | `const app = express();` | `const router = express.Router();` |
| **Listening** | `app.listen(PORT, callback);` | No `listen()` method |

🚀 **Best Practice:**  
- Use `app = express();` in `server.js` for overall server setup.
- Use `router = express.Router();` in separate route files to organize routes.


## ------------------- 

## ------------------------------- working with query-parameter ----------------------------


