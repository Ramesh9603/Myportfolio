
import React from "react";

import {skills} from "./data"

function Skills() {

    return(

        <section id="skills" className="section">
        <h2 className="MS">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

    )
}

export default Skills;