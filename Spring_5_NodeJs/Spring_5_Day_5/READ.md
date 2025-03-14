
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

## ------------------------------- working with query-parameter ----------------------------


