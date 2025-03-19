import React from "react";

function Projects() {
  const projects = [
    {
      title: "Tic_Tac_Toe",
      description: "A simple React-based game.",
      link: "https://satwik1357.github.io/Game-of-Codes/"
    },
    {
      title: "Dummy project",
      description: "Displays weather using an open API.",
      link: "https://satwik1357.github.io/image_border_change/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
