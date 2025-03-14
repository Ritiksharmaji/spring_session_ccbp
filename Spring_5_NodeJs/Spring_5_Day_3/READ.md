step-1: npm init -y
step-2: npm express  short-uuid
step-3: npm install dotenv
now to run the application: npm run dev

## ---- create the route in finalApis.js and based on those route create the function which we have to execute on that ----
//  Routes
app.get("/api/user", getAllUsers);
app.get("/api/user/:id", getUserById);
app.post("/api/user", createUser);
app.put("/api/user/:id", updateUser);
app.delete("/api/user/:id", deleteUser);

## ------ working with database ---------------
1) install the driver: npm i mongoose
2) then create a database in mongoDb-altas and copy the string url in .env with username and password
3) 