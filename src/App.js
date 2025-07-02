import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"; // Import your resume page
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main landing page with sections */}
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />

        {/* Resume route */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;