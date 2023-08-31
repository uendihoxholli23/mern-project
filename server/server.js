require("dotenv").config();

const express = require("express"); //require express package
const workoutRoutes = require("./routes/workouts");

//startup the express app
const app = express();

//middleware - a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//route handler
app.use("/api/workouts", workoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
