import React, { useState } from 'react';
import inkImage from './ink.png';
import thriftImage from './Thrift.png';
import h1buddyImage from './demo_optimized.png';
import bloomcraftImage from './Bloomcrafter.png';

const ProjectList = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: 'LinkedINK', 
      description: 'AI-Powered Content Assistant for professional networking platforms.',
      technologies: ['AI', 'UX Research', 'Prototyping'],
      image: inkImage,
      link: 'https://docs.google.com/document/d/1WktfTmRAkeZ5fU8J6x3CR9IHhTCPdsR3/edit'
    },
    { 
      id: 2, 
      title: 'ThriftNU', 
      description: 'Web app for Northwestern University community to buy and sell used course materials and items.',
      technologies: ['React', 'Firebase', 'Bootstrap'],
      image: thriftImage,
      link: 'https://thriftnu-59202.web.app/',
      github: 'https://github.com/mercykenya'
    },
    { 
      id: 3, 
      title: 'H1BUDDY', 
      description: 'Interactive web application to assist international students in job searches with H1B visa sponsorship predictions.',
      technologies: ['Figma', 'UX Design', 'Prototyping'],
      image: h1buddyImage,
      link: 'https://www.figma.com/proto/7lOJ4dJN9oK5Nnyo0pB4nV/H1Buddy?node-id=171-1583&t=1DsZmTsaEHng9Ddj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=171%3A1583'
    },
    { 
      id: 4, 
      title: 'BloomCraft', 
      description: 'Dynamic React-based web application for creating personalized floral arrangements with real-time visualization.',
      technologies: ['React', 'Firebase', 'CSS3'],
      image: bloomcraftImage,
      link: 'https://bloomcrafter-fbd57.web.app/',
      github: 'https://github.com/394-w24/BloomCraft2'
    },
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="project-list">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3 onClick={() => toggleProject(project.id)}>
            {project.title} {expandedProject === project.id ? '▼' : '▶'}
          </h3>
          {expandedProject === project.id && (
            <div className="project-details">
              <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;