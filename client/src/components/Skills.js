import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" /> },
    { name: "Flask", icon: <SiFlask color="#000" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
