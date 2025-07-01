import React from "react";
import selfPortrait from "../assets/self-portrait.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-heading">A Little About Me</h1>

        <div className="about-grid">
          {/* Portrait */}
          <div className="about-image">
            <img
              src={selfPortrait}
              alt="Shaun Richter"
              className="portrait-img"
            />
          </div>

          {/* Description */}
          <div className="about-text">
            <p>
              Hi, I'm Shaun! I was born and raised in Temecula, California, and now I'm living in Iowa City.
              I earned my Bachelor's degree in Computer Science and Engineering with Honors and Highest Distinction
              from the University of Iowa, and I'm currently pursuing my Master's in Electrical and Computer Engineering,
              with a focus on Software Engineering.
            </p>
            <p>
              I'm also working as a Software Engineer at Collins Aerospace, where I contribute to developing real-time
              communication systems for aviation. I'm experienced in the fields of Software Engineering, Applied AI/ML,
              and Human-Computer Interaction. Whether it's developing real-time software, exploring AI models, or refining
              user interfaces, I'm always eager to dive into projects that blend innovation with impact.
            </p>
            <p>
              Outside of engineering, I enjoy playing and watching sports like football, soccer, pickleball, and volleyball,
              spending time with friends, and watching movies.
            </p>
          </div>
        </div>

        {/* Skillset */}
        <h2 className="skills-heading">Professional Skillset</h2>
        <div className="skills-grid">
          {/* Languages & Frameworks */}
          <div className="skill-tile" data-tooltip="React">
            <i className="devicon-react-original colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="React Bootstrap">
            <i className="devicon-bootstrap-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="JavaScript">
            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Python">
            <i className="devicon-python-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Ruby">
            <i className="devicon-ruby-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Java">
            <i className="devicon-java-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="C++">
            <i className="devicon-cplusplus-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="C#">
            <i className="devicon-csharp-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Matlab">
            <i className="devicon-matlab-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Node.js">
            <i className="devicon-nodejs-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Rails">
            <i className="devicon-rails-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Django">
            <i className="devicon-django-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Firebase">
            <i className="devicon-firebase-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="PostgreSQL">
            <i className="devicon-postgresql-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="PyTorch">
            <i className="devicon-pytorch-original colored"></i>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-tile" data-tooltip="VS Code">
            <i className="devicon-vscode-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Git">
            <i className="devicon-git-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="GitHub">
            <i className="devicon-github-original colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="GitLab">
            <i className="devicon-gitlab-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="SVN">
            <i className="devicon-subversion-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Jira">
            <i className="devicon-jira-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Grafana">
            <i className="devicon-grafana-original colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Docker">
            <i className="devicon-docker-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="AWS">
            <i className="devicon-amazonwebservices-original colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Terraform">
            <i className="devicon-terraform-plain colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Unity">
            <i className="devicon-unity-original colored"></i>
          </div>
          <div className="skill-tile" data-tooltip="Linux">
            <i className="devicon-linux-plain colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;