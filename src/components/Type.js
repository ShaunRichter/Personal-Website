import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <h2>
      <Typewriter
        words={[
          "Software Developer 💻",
          "React Enthusiast ⚛️",
          "UI/UX Explorer 🎨",
          "Problem Solver 🔍",
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
