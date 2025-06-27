import React from "react";
import homeLogo from "../assets/software-engineer.svg";
import Type from "../components/Type";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        {/* ---------- LEFT SIDE: Text ------------------------------------- */}
        <div className="home-left">
          <h1 className="greeting">
            Hey there{" "}
            <span className="wave" role="img" aria-label="wave">
              👋
            </span>
          </h1>

          <h1 className="name-heading">
            I'M<strong className="main-name"> SHAUN RICHTER</strong>
          </h1>

          <div className="typewriter">
            <Type />
          </div>
        </div>

        {/* ---------- RIGHT SIDE: Image ----------------------------------- */}
        <div className="home-image">
          <img src={homeLogo} alt="Software Engineer" />
        </div>
      </div>
    </section>
  );
};

export default Home;