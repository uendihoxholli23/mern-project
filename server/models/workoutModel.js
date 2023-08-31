const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema structure
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//model based on schema
module.exports = mongoose.model("Workout", workoutSchema);
