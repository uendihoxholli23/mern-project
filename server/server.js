require("dotenv").config();

const express = require("express"); //require express package

//startup the express app
const app = express();

//middleware - a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route handler
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" }); // the server responds with this json
});

//listen for request
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
