import React from "react";
import selfPortrait from "../assets/self-portrait.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-heading">A Little About Me</h1>

        <div className="about-grid">
          {/* LEFT: Portrait */}
          <div className="about-image">
            <img
              src={selfPortrait}
              alt="Shaun Richter"
              className="portrait-img"
            />
          </div>

          {/* RIGHT: Description */}
          <div className="about-text">
            <p>
              Hi, I'm Shaun! I was born and raised in Temecula, California, and now I'm living in Iowa City.
              I earned my Bachelor's degree in Computer Science and Engineering with Honors and Highest Distinction
              from the University of Iowa, and I'm currently pursuing my Master's in Electrical and Computer Engineering,
              with a focus on Software Engineering.
            </p>
            <p>
              I'm also working as a Software Engineer at Collins Aerospace, where I contribute to developing real-time
              communication systems for aviation. I'm experienced in the fields of Software Engineering, Machine Learning,
              and Human-Machine Interaction. Whether it's developing real-time software, exploring AI models, or refining
              user interfaces, I'm always eager to dive into projects that blend innovation with impact.
            </p>
            <p>
              Outside of engineering, I enjoy playing and watching sports like football, soccer, pickleball, and volleyball,
              spending time with friends, and watching movies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
