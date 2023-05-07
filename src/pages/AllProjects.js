import React from "react";
import { useLocation } from "react-router-dom";
import Projects from "./../Components/Projects/Projects";

const AllProjects = () => {
  const navigate = useLocation();

  return (
    <div>
      <Projects />
    </div>
  );
};

export default AllProjects;
