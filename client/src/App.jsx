import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/WorkoutForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <WorkoutForm />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
