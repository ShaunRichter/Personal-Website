import React from "react";

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <p>
        Download my full resume:
        <a href="/resume.pdf" download="Shaun_Richter_Resume.pdf">
          <button style={{ marginLeft: "10px" }}>Download Resume</button>
        </a>
      </p>
    </div>
  );
};

export default Resume;
