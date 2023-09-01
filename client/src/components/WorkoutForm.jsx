import React, { useState } from "react";
import axios from "axios";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/workouts/",
        workout
      );
      console.log("Workout added successfully:", response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div class="flex justify-center items-center min-h-screen">
      <div class="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 class="text-2xl font-semibold mb-6">Add a new workout</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Exercise Title:
            </label>
            <input
              type="text"
              value={title}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Reps:
            </label>
            <input
              type="number"
              value={reps}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Load(kg):
            </label>
            <input
              type="number"
              value={load}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setLoad(e.target.value)}
              required
            />
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
