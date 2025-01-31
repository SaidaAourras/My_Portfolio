import React from "react";
import projects from "../data/Projects";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-box">
        <h2 className="heading"> projects </h2>
        <div className="wrapper">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={`images/${project.image}`} alt={project.name} />
              <h2>{project.name}</h2>
              <div className="rating"></div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
