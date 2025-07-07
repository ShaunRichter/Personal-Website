import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollToHashElement from "./components/ScrollToHashElement";

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div className="section-divider"></div>
              <div id="about"><About /></div>
              <div className="section-divider"></div>
              <div id="projects"><Projects /></div>
              <div className="section-divider-bottom"></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;