import "./App.css";
import Home from "./Components/Home/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import AllProjects from "./pages/AllProjects";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
