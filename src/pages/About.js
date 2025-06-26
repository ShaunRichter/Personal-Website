import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          Passionate about building innovative software solutions and pushing the boundaries of technology.
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2 className="section-title">Professional Summary</h2>
          <p className="about-text">
            Hi, I'm <strong>Shaun Richter</strong>, a Software Engineer with a B.S.E. in Computer Science & Engineering from the <strong>University of Iowa</strong>, graduating in December 2024. 
            Currently, I'm pursuing a Master's in Computer and Electrical Engineering, with an expected completion in December 2025.
          </p>
        </div>

        <div className="about-card">
          <h2 className="section-title">Professional Experience</h2>
          <ul className="about-list">
            <li className="experience-item">
              <strong>Software Engineering Intern – Collins Aerospace</strong> <span className="date">(2023 - Present)</span>
              <p>
                - Developed **high-reliability embedded software** for aviation communication.<br />
                - Worked in an **agile environment**, collaborating with cross-functional teams.<br />
                - Mentored new interns and engineers in software best practices.
              </p>
            </li>
            <li className="experience-item">
              <strong>Teaching Assistant – University of Iowa</strong> <span className="date">(2022 - 2023)</span>
              <p>
                - Assisted in teaching **advanced C++ programming** and object-oriented principles.<br />
                - Conducted **office hours, graded assignments**, and provided hands-on student guidance.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h2 className="section-title">Extracurricular Activities</h2>
          <ul className="about-list">
            <li><strong>Association for Computing Machinery (ACM)</strong> – Active Member (2022 - Present)</li>
            <li><strong>American Wind Energy Association (AWEA)</strong> – Lead of Software Team (2022 - 2023)</li>
            <li><strong>University of Iowa Intramurals</strong> – Competed in **Basketball, Pickleball, Soccer** (2021 - Present)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
