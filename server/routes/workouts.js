const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

//get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

//post a new workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new workout" });
});

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a new workout" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a new workout" });
});
module.exports = router;
