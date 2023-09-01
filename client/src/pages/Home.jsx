import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/workouts");
      console.log(res);
      setWorkouts(res.data);
    } catch (err) {
      console.error(err);
    }
  });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
};

export default Home;
