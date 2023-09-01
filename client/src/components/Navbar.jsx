import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
          Workout{" "}
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            MERN
          </mark>{" "}
          project
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
