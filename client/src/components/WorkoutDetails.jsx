import React from "react";

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="block w-2/4 ml-2 mt-4 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
        {workout.title}
      </h5>
      <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
        Load(kg): {workout.load}{" "}
      </p>
      <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
        Reps: {workout.reps}{" "}
      </p>
      <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
        {workout.createdAt}{" "}
      </p>
    </div>
  );
};

export default WorkoutDetails;
