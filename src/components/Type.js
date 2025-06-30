import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        words={[
          "Software Developer 💻",
          "Problem Solver 🔍",
          "Team Collaborator 🤝",
          "Project Management 🗂️",
          "CI/CD Practitioner 🛠️",
          "Agile Developer 📈",
          "Learner 📚",
          "Communicator 💬"
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
  );
};

export default Type;