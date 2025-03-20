
step-1: npm install cors dotenv express mongoose morgan
step-2:

## - cookies ------------

### **What Are Cookies in Web Development? 🍪**
Cookies are **small pieces of data** stored in a user's browser by a website. They help websites remember **user preferences, session details, authentication info, and tracking data**.

---

## **1️⃣ How Cookies Work?**
1. **A client (browser) sends a request** to a web server.
2. **The server responds with a "Set-Cookie" header**, sending a cookie to the browser.
3. **The browser stores the cookie** and sends it back with future requests to the same server.
4. **The server reads the cookie** and uses the stored data to recognize the user.

---

## **2️⃣ Types of Cookies**
| Type | Description |
|------|------------|
| **Session Cookies** | Stored only while the browser is open. Deleted when the browser is closed. |
| **Persistent Cookies** | Stored for a set duration (e.g., days, months). Used for remembering logins. |
| **Secure Cookies** | Sent only over **HTTPS** to ensure security. |
| **HttpOnly Cookies** | Cannot be accessed via JavaScript (prevents XSS attacks). |
| **SameSite Cookies** | Restricts cookie sharing across different websites (prevents CSRF attacks). |

---

## **3️⃣ Setting Cookies in Express.js**
You can use the `cookie-parser` middleware to manage cookies in an **Express.js** application.

### **📌 Install `cookie-parser`**
```bash
npm install cookie-parser
```

### **📌 Use It in Your Express App**
```javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser()); // Enable cookies

// Set a cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "JohnDoe", { maxAge: 900000, httpOnly: true });
    res.send("Cookie has been set!");
});

// Get cookies
app.get("/get-cookie", (req, res) => {
    res.send(req.cookies); // Retrieve stored cookies
});

// Delete a cookie
app.get("/delete-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie has been deleted!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```

---

## **4️⃣ Example of a Cookie in HTTP Response**
When a server sets a cookie, it looks like this in the **HTTP response headers**:

```
Set-Cookie: username=JohnDoe; Max-Age=900000; HttpOnly; Secure
```

---

## **5️⃣ When Are Cookies Used?**
✔ **Authentication** – Remember logged-in users.  
✔ **User Preferences** – Store dark mode, language settings, etc.  
✔ **Tracking & Analytics** – Track user activity for personalized ads.  
✔ **Session Management** – Maintain shopping cart data or user sessions.  

---

## **🔑 Summary**
- Cookies **store small data** in the browser to improve user experience.
- They are used for **authentication, preferences, and tracking**.
- Express.js can **set, get, and delete cookies** using the `cookie-parser` package.
- Secure cookies help **prevent attacks like XSS and CSRF**.

### ------------ is cookies use good for back-end or front-end -----------------------

### **Are Cookies Used for Backend or Frontend?** 🍪  

Cookies can be used in **both backend and frontend**, but their main purpose is **storing and managing small pieces of data in the browser**. Here’s how they are used in both areas:

---

## **1️⃣ Cookies in the Frontend (Client-Side)**
📌 The frontend (browser) **stores and accesses cookies** using JavaScript.

✅ **Use Cases:**  
- Storing user preferences (e.g., dark mode, language selection).  
- Managing simple session data.  
- Tracking user behavior (e.g., analytics, ad tracking).  

✅ **Example: Setting and Getting Cookies in JavaScript**  
```javascript
// Set a cookie
document.cookie = "theme=dark; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

// Get all cookies
console.log(document.cookie); // Output: "theme=dark"

// Delete a cookie
document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

🚨 **Security Concern**: Cookies set on the frontend **can be easily modified by users**, so they **should NOT store sensitive data** like passwords or authentication tokens.

---

## **2️⃣ Cookies in the Backend (Server-Side)**
📌 The backend **sets, reads, and manages cookies** via HTTP responses.

✅ **Use Cases:**  
- Storing **session identifiers** (e.g., login sessions).  
- **Authentication** (e.g., JWT tokens stored in `HttpOnly` cookies).  
- **Security features** (e.g., CSRF protection).  

✅ **Example: Setting and Reading Cookies in Express.js (Backend)**  
```javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// Set a secure cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("authToken", "abcdef123456", { httpOnly: true, secure: true });
    res.send("Secure cookie set!");
});

// Get cookies
app.get("/get-cookie", (req, res) => {
    res.send(req.cookies);
});

// Clear cookies
app.get("/delete-cookie", (req, res) => {
    res.clearCookie("authToken");
    res.send("Cookie deleted!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

🚀 **Backend cookies are more secure** because they can be set as `HttpOnly` (preventing JavaScript access) and `Secure` (only sent over HTTPS).  

---

## **🔍 Which One Should You Use?**
| Feature | Frontend (Client-Side) Cookies | Backend (Server-Side) Cookies |
|---------|-------------------------------|-------------------------------|
| **Security** | ❌ Less secure (accessible via JavaScript) | ✅ More secure (`HttpOnly`, `Secure`) |
| **Use Cases** | UI preferences, tracking, basic storage | Authentication, sessions, security |
| **Who Manages?** | Browser (JavaScript) | Server (Express, Node.js, etc.) |
| **Best Practice?** | Use only for **non-sensitive data** | Use for **authentication & security** |

---

### **🔑 Final Verdict**
✔ **For simple UI settings**, use **frontend cookies**.  
✔ **For authentication & security**, use **backend cookies** with `HttpOnly` & `Secure` flags.  
✔ **If dealing with sensitive data**, consider using **JWT tokens** in cookies **or session storage** instead.  


### ---------- JWT Authentication with Cookies difference --------------

### **Difference Between JWT Authentication and Cookies Authentication**  

Both **JWT authentication** and **cookie-based authentication** are widely used in web applications, but they have different approaches. Here's a detailed comparison:

---

### **1️⃣ JWT Authentication (Token-Based)**
✅ **How It Works:**
1. User logs in → Server verifies credentials.
2. Server generates a **JWT token** (signed using a secret key).
3. The client stores the JWT in **localStorage**/**sessionStorage**/**cookies**.
4. For each request, the client includes the **JWT in the `Authorization` header**.
5. Server verifies the JWT → Grants access if valid.

✅ **Example Request Using JWT in Header:**
```http
GET /protected
Authorization: Bearer <JWT-TOKEN>
```

✅ **Pros:**
✔️ **Stateless** → No session storage on the server.  
✔️ **Decentralized** → Works across multiple domains/services (microservices).  
✔️ **Scalable** → No need to store user sessions on the backend.  

❌ **Cons:**
❌ **Token theft is possible** if stored in `localStorage`.  
❌ **No automatic session expiration** (JWT is valid until it expires).  
❌ **More complex token handling** in frontend/backend.  

---

### **2️⃣ Cookies Authentication (Session-Based)**
✅ **How It Works:**
1. User logs in → Server verifies credentials.
2. Server **creates a session** and stores session data in memory or a database.
3. Server **sets a session ID inside a cookie** and sends it to the client.
4. Browser **automatically includes the cookie** in every request.
5. Server reads the session ID from the cookie → Retrieves user data.

✅ **Example Request Using Cookies (Automatic):**
```http
GET /protected
Cookie: sessionId=abcdef123456
```

✅ **Pros:**
✔️ **More Secure** → HTTP-only cookies prevent XSS attacks.  
✔️ **Automatic handling** → Browser includes cookies in requests.  
✔️ **Session management is easy** → Server can expire or revoke sessions.  

❌ **Cons:**
❌ **Less scalable** → Server stores session data (in-memory or DB).  
❌ **CSRF attacks possible** (can be mitigated using `SameSite=strict`).  
❌ **Not suitable for APIs** that need to work across different services.  

---

### **3️⃣ JWT in HTTP-Only Cookies (Hybrid Approach)**
💡 **Best practice:** Store the JWT **inside an HTTP-only cookie** instead of localStorage.

✅ **Why?**
✔️ Prevents **XSS attacks** (JavaScript can't access cookies).  
✔️ Browser **automatically handles authentication** (sends cookies in every request).  
✔️ Combines **security** (cookies) and **statelessness** (JWT).  

✅ **Example:**
1. Store JWT inside **HTTP-only, Secure Cookie** on login:
   ```javascript
   res.cookie("authToken", token, { httpOnly: true, secure: true });
   ```
2. Verify JWT from the cookie in middleware:
   ```javascript
   const token = req.cookies.authToken;
   const decoded = jwt.verify(token, SECRET_KEY);
   ```

---

### **🚀 Which One Should You Use?**
| **Feature**           | **JWT Authentication** | **Cookies (Session-Based)** | **JWT in HTTP-Only Cookies** |
|----------------------|----------------------|---------------------------|-----------------------------|
| **Security**         | 🔴 Vulnerable to XSS if stored in `localStorage` | 🟢 Secure if HTTP-only | 🟢 Best security (XSS + CSRF protection) |
| **Scalability**      | 🟢 Highly scalable | 🔴 Requires session storage | 🟢 Scalable (JWT stays stateless) |
| **Automatic Handling** | 🔴 Requires manual handling in headers | 🟢 Browser handles cookies | 🟢 Browser handles authentication |
| **Best For**         | APIs, Microservices | Monolithic Web Apps | Web Apps with APIs |
| **Session Management** | 🔴 Hard to revoke individual tokens | 🟢 Can revoke sessions easily | 🟢 Token expires with cookies |

✅ **Best Choice:** **JWT stored in HTTP-only cookies** for a secure and scalable authentication system. 🚀  

Would you like a **full implementation example** of JWT in HTTP-only cookies? -Yes
### ---- JWT Authentication Using HTTP-Only Cookies in Node.js & Express.js ----------

### **JWT Authentication Using HTTP-Only Cookies in Node.js & Express.js**
This example demonstrates **secure authentication** using JWT stored in **HTTP-only cookies**.  

---
### **📌 Steps Involved**
1. **User Registration** – Creates a user & stores hashed password in the DB.
2. **User Login** – Generates a JWT & stores it in an **HTTP-only cookie**.
3. **Protected Route** – Verifies JWT from the cookie.
4. **User Logout** – Clears the cookie to log out.

---
### **1️⃣ Install Required Packages**
```sh
npm install express bcryptjs jsonwebtoken cookie-parser dotenv mongoose cors
```

---
### **2️⃣ `server.js` (Main Entry File)**
```javascript
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Adjust for frontend

// Routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---
### **3️⃣ `models/User.js` (User Model)**
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
```

---
### **4️⃣ `routes/authRoutes.js` (Authentication Routes)**
```javascript
const express = require("express");
const { registerUser, loginUser, getProfile, logoutUser } = require("../controllers/authController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);  // Register User
router.post("/login", loginUser);        // Login & Set JWT in Cookie
router.get("/profile", authenticateUser, getProfile); // Protected Route
router.post("/logout", logoutUser);      // Logout (Clear Cookie)

module.exports = router;
```

---
### **5️⃣ `controllers/authController.js` (Auth Logic)**
```javascript
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register New User
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
};

// Login User & Store JWT in HTTP-Only Cookie
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.cookie("authToken", token, { 
            httpOnly: true, 
            secure: true, 
            sameSite: "strict", 
            maxAge: 3600000 // 1 hour
        });

        res.json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
};

// Get Profile Data (Protected Route)
exports.getProfile = async (req, res) => {
    res.json({ user: req.user });
};

// Logout User (Clear Cookie)
exports.logoutUser = (req, res) => {
    res.clearCookie("authToken");
    res.json({ message: "Logged out successfully" });
};
```

---
### **6️⃣ `middleware/authMiddleware.js` (JWT Verification)**
```javascript
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.authToken; // Get token from cookie

        if (!token) {
            return res.status(401).json({ error: "Unauthorized access" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};
```

---
### **7️⃣ `.env` File (Environment Variables)**
```
MONGO_URI=mongodb://localhost:27017/jwt-auth
JWT_SECRET=mysecretkey123
```

---
### **8️⃣ Running the Server**
```sh
node server.js
```

---
### **📌 How It Works**
✅ **Register User**
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

✅ **Login User (Stores JWT in HTTP-only Cookie)**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

✅ **Access Protected Route (`/profile`)**
```http
GET /api/auth/profile
```
💡 If the cookie is valid, it returns user data.

✅ **Logout (Clears Cookie)**
```http
POST /api/auth/logout
```

---
### **🚀 Benefits of Using JWT in HTTP-Only Cookies**
✔️ **More Secure** – Prevents XSS attacks (JavaScript can't access the token).  
✔️ **Automatic Handling** – Browser sends cookies automatically with each request.  
✔️ **Easier Session Management** – No need for localStorage.  

### ---------------- front-end react for this ---------------------------


### **🔗 React Frontend for JWT Authentication (Using HTTP-Only Cookies)**  
This React app will allow users to **register, log in, view a protected profile, and log out** using **JWT stored in HTTP-only cookies**.

---

### **1️⃣ Install Dependencies**
```sh
npx create-react-app jwt-auth-frontend
cd jwt-auth-frontend
npm install axios react-router-dom
```

---

### **2️⃣ `App.js` (Main Component with Routing)**
```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import axios from "axios";

axios.defaults.withCredentials = true; // Send cookies with requests

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### **3️⃣ `components/Navbar.js` (Navigation Bar)**
```javascript
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
```

---

### **4️⃣ `pages/Register.js` (User Registration)**
```javascript
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", user);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
```

---

### **5️⃣ `pages/Login.js` (User Login)**
```javascript
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", user);
      alert("Login successful!");
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
```

---

### **6️⃣ `pages/Profile.js` (Protected Profile Page)**
```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/auth/profile");
        setUser(data.user);
      } catch (error) {
        console.error("Unauthorized:", error);
        navigate("/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <p>Welcome, {user.username} ({user.email})</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
```

---

### **7️⃣ Connect Backend & Frontend**
#### ✅ **Start the Backend**
```sh
cd backend
node server.js
```
#### ✅ **Start the Frontend**
```sh
cd jwt-auth-frontend
npm start
```

---

### **🔒 Secure Authentication Flow**
1. **User registers** ➝ Data saved in DB.
2. **User logs in** ➝ JWT is stored in **HTTP-only cookies**.
3. **Profile Page (Protected)** ➝ React fetches user data with JWT.
4. **Logout** ➝ Clears cookie & user session.

---

### **🚀 Why Use HTTP-Only Cookies for JWT?**
✅ **More Secure** – Prevents **XSS attacks** (JavaScript cannot access the token).  
✅ **Automatic Sending** – Browser automatically includes the JWT in **every request**.  
✅ **Prevents Token Theft** – LocalStorage & SessionStorage are vulnerable to attacks.  
--------------------------------------------------------------------------------------------



### ---- but without using cookies we can also generate jwt token and send it to front-end where they can use and set the cookies in front-end and stored in cookies ------------
Yes, you're absolutely right! You can generate a **JWT token on the backend** and send it to the frontend, where the frontend can manually store it in **cookies, localStorage, or sessionStorage**. However, there are **important security differences** between these approaches. Let's break them down.  

---

## **🔍 Two Ways to Handle JWT Authentication**  
### ✅ **1. Backend Stores JWT in HTTP-Only Cookies (Secure Approach)**  
- The backend generates the **JWT token** and stores it in an **HTTP-only cookie**.  
- The frontend does **not** have direct access to the token.  
- The browser automatically sends the token with **every request**.  

**📌 Example Backend Response (With Cookies)**  
```js
res.cookie("jwt", token, {
  httpOnly: true,
  secure: true,   // Use HTTPS
  sameSite: "Strict",
  maxAge: 24 * 60 * 60 * 1000,  // 1 Day
});
res.json({ message: "Login successful" });
```

**📌 Example Frontend Request**  
```js
axios.get("http://localhost:5000/api/auth/profile", { withCredentials: true });
```
✅ **More Secure:** Prevents **XSS (Cross-Site Scripting)** since JavaScript cannot access the JWT.  
✅ **Automatic Handling:** The browser **automatically** includes the JWT in requests.  
❌ **CSRF Risk:** If CSRF protection is not implemented, an attacker can send requests using cookies.

---

### ❌ **2. Frontend Stores JWT in LocalStorage or Cookies (Less Secure)**
- The backend sends **JWT as a response** (`res.json({ token })`).  
- The frontend manually **stores it** in **localStorage**, `sessionStorage`, or `document.cookie`.  
- The frontend **must include the JWT manually** in API requests.  

**📌 Example Backend Response**  
```js
res.json({ token });
```

**📌 Example Frontend Storing Token in LocalStorage**  
```js
axios.post("http://localhost:5000/api/auth/login", { email, password })
  .then(response => {
    localStorage.setItem("jwt", response.data.token);
  });
```

**📌 Example Frontend Sending JWT in Headers**  
```js
axios.get("http://localhost:5000/api/auth/profile", {
  headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
});
```

✅ **Easier Implementation:** No need for CSRF protection.  
✅ **Frontend Can Read Token:** Can store and manage tokens manually.  
❌ **Vulnerable to XSS Attacks:** If an attacker injects JavaScript (`document.localStorage.getItem("jwt")`), they can steal the token.  
❌ **Manual Token Management:** Frontend must manually include JWT in API requests.  

---

## **🔒 Which is Better?**
| Approach | XSS Protection | CSRF Protection | Ease of Use |
|----------|--------------|--------------|-------------|
| **JWT in HTTP-Only Cookies** | ✅ Secure | ❌ Needs CSRF Protection | ✅ Automatic Token Handling |
| **JWT in LocalStorage/SessionStorage** | ❌ Vulnerable | ✅ No CSRF Issue | ❌ Manual Token Handling |

### **🔹 Best Practice: Use HTTP-Only Cookies with CSRF Protection**  
- **For Web Apps:** Use **HTTP-only cookies** and implement **CSRF tokens** to prevent attacks.  
- **For Mobile/Single Page Apps (SPAs):** Storing in memory (`useState`, `Redux store`) is more secure than `localStorage`.  

Would you like a **full implementation** with **CSRF protection**? 🚀

### --------------- 1) JWT Authentication using HTTP-Only Cookies (Secure Approach) 2️⃣ JWT Authentication using LocalStorage (Less Secure, but Easier to Implement) --------------



I'll provide both implementations:  
1️⃣ **JWT stored in HTTP-only Cookies**  
2️⃣ **JWT stored in LocalStorage**  

---

## **1️⃣ JWT with HTTP-only Cookies**
### **Backend (Node.js + Express + MongoDB)**  

**Install required dependencies:**  
```sh
npm install express mongoose dotenv jsonwebtoken cookie-parser bcryptjs cors
```

**server.js**
```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
});
```

---

**models/User.js**
```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
```

---

**routes/authRoutes.js**
```js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  res.json({ message: "User registered successfully" });
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token, { httpOnly: true, secure: false });
  res.json({ message: "Login successful" });
});

// Get Profile (Protected Route)
router.get("/profile", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    res.json({ username: user.username, email: user.email });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
```

---

### **Frontend (React + Axios)**
**Install Axios:**  
```sh
npm install axios
```

**api.js**
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

export default api;
```

---

**Register.js**
```js
import { useState } from "react";
import api from "./api";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleRegister = async () => {
    await api.post("/register", user);
    alert("User Registered");
  };

  return (
    <div>
      <input type="text" placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
```

---

**Login.js**
```js
import { useState } from "react";
import api from "./api";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    await api.post("/login", user);
    alert("Login Successful");
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

---

**Profile.js**
```js
import { useEffect, useState } from "react";
import api from "./api";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/profile")
      .then((res) => setProfile(res.data))
      .catch(() => alert("Not logged in"));
  }, []);

  return profile ? <div>Welcome {profile.username}</div> : <div>Please login</div>;
};

export default Profile;
```

---

## **2️⃣ JWT with LocalStorage**
#### **Backend Code (Same as Above)**
👉 The only difference is that instead of setting cookies, we send the token in the response and store it in LocalStorage on the frontend.

Change the login route:
```js
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token }); // Send token in response instead of setting cookies
});
```

---

### **Frontend Code**
**Login.js**
```js
import { useState } from "react";
import api from "./api";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await api.post("/login", user);
    localStorage.setItem("token", res.data.token); // Store token in localStorage
    alert("Login Successful");
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

---

**Profile.js**
```js
import { useEffect, useState } from "react";
import api from "./api";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setProfile(res.data))
      .catch(() => alert("Not logged in"));
  }, []);

  return profile ? <div>Welcome {profile.username}</div> : <div>Please login</div>;
};

export default Profile;
```

---

## **Which one is better?**
| Feature           | JWT + Cookies | JWT + LocalStorage |
|------------------|--------------|----------------|
| **Security**    | ✅ Safer (HTTP-only, prevents XSS) | ❌ Vulnerable to XSS |
| **Ease of Use** | ❌ Requires backend cookie setup | ✅ Simple to implement |
| **Access Control** | ✅ Works with same-site requests | ❌ Can be stolen via JavaScript |

For security reasons, **JWT + Cookies is recommended**.

Would you like me to add **refresh tokens**? 🚀

### --- shall we use both at same time ----------------------
```
 res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });  and res.json({ token }); // Send token in response instead of setting cookies shall we do like this 

```
Yes, you **can** do that, but it depends on your security and implementation strategy. Let's analyze both approaches:

---

## ✅ **Approach 1: Setting JWT in HTTP-only Cookies (Recommended for Security)**
```js
res.cookie("token", token, {
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: false, // Set to true in production with HTTPS
    sameSite: "lax", // Prevents CSRF to some extent
});
res.json({ message: "Login successful" });
```
### **🔹 Pros:**
- **More Secure:** Prevents XSS attacks since JavaScript **cannot** access `httpOnly` cookies.
- **Automatic Handling:** Browser automatically sends the cookie with requests.
- **Works with Backend Sessions:** Easier to implement refresh tokens.

### **🔹 Cons:**
- Requires `withCredentials: true` in frontend requests.
- CSRF protection is needed if not using `SameSite=Strict`.

---

## ✅ **Approach 2: Sending JWT in Response Instead of Cookies**
```js
res.json({ token });
```
### **🔹 Pros:**
- **More Flexible:** Frontend can store the token anywhere (`localStorage`, `sessionStorage`, or a non-httpOnly cookie).
- **Easier to implement on frontend** (No need for `withCredentials`).

### **🔹 Cons:**
- **Less Secure:** If stored in `localStorage` or `sessionStorage`, it is vulnerable to **XSS attacks**.
- **Manual Handling:** Frontend must attach the token in `Authorization` headers.

---

## **📌 Best Practice**
For **most secure authentication**, use **HTTP-only cookies (Approach 1)**.  
However, if you need to **manually access the token on the frontend**, you can **combine both approaches**:

```js
res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
});
res.json({ token }); // Sending the token allows frontend flexibility
```

This way, the frontend **can** store the token manually if needed but also benefits from the security of **HTTP-only cookies**.

Let me know if you need a full working implementation with both methods! 🚀