import React from 'react';
import './ProjectGrid.css'; // Make sure to import the CSS file

const ProjectGrid = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.name} className="project-image" />
          <h3>{project.name}</h3>
          <p><a href={project.deployedLink}>Deployed App</a></p>
          <p><a href={project.repoLink}>Repository</a></p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid