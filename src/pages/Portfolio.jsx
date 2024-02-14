import React from 'react';
import './Portfolio.css'; // Import your custom CSS file for styling
import placeholderImage from '../assets/placeholder-image.jpg'; // Import your placeholder image

function Portfolio() {
    // Placeholder data for projects
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: placeholderImage,
        projectUrl: 'https://example.com/project1', // Replace with the actual project URL
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: placeholderImage,
        projectUrl: 'https://example.com/project2', // Replace with the actual project URL
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        imageUrl: placeholderImage,
        projectUrl: 'https://example.com/project3', // Replace with the actual project URL
      },
    ];
  
    return (
      <div className="portfolio-container">
        <section className="portfolio-content">
          <h2>Portfolio</h2>
          <div className="project-cards">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.title} />
                </a>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default Portfolio;