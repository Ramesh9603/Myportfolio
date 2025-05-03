
import React from "react";

import {projects} from "./data"

function Projects() {

    return(

        <section id="projects" className="section">
        <h2 className="MP"> My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="PT">{project.title}</h3>
              <p>{project.description}</p>
              <a className="VP" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Projects;