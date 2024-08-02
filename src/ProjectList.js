import React, { useState } from 'react';
import inkImage from './ink.png';
import thriftImage from './Thrift.png';
import h1buddyImage from './demo_optimized.png';
import bloomcraftImage from './Bloomcrafter.png';

const ProjectList = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // List of project objects
  const projects = [
    {
      id: 1,
      title: 'LinkedINK',
      description: 'AI-Powered Content Assistant for professional networking platforms.',
      technologies: ['AI', 'UX Research', 'Prototyping'],
      image: inkImage,
      link: 'https://docs.google.com/document/d/1WktfTmRAkeZ5fU8J6x3CR9IHhTCPdsR3/edit',
      linkText: 'View White Paper',
    },
    {
      id: 2,
      title: 'ThriftNU',
      description: 'Web app for Northwestern University community to buy and sell used course materials and items.',
      technologies: ['React', 'Firebase', 'Bootstrap'],
      image: thriftImage,
      link: 'https://thriftnu-59202.web.app/',
      linkText: 'View Project',
      github: 'https://github.com/mercykenya',
    },
    {
      id: 3,
      title: 'H1BUDDY',
      description: 'Interactive web application to assist international students in job searches with H1B visa sponsorship predictions.',
      technologies: ['Figma', 'UX Design', 'Prototyping'],
      image: h1buddyImage,
      link: 'https://www.figma.com/proto/7lOJ4dJN9oK5Nnyo0pB4nV/H1Buddy?node-id=171-1583&t=1DsZmTsaEHng9Ddj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=171%3A1583',
      linkText: 'Figma Prototype',
    },
    {
      id: 4,
      title: 'BloomCraft',
      description: 'Dynamic React-based web application for creating personalized floral arrangements with real-time visualization.',
      technologies: ['React', 'Firebase', 'CSS3'],
      image: bloomcraftImage,
      link: 'https://bloomcrafter-fbd57.web.app/',
      linkText: 'View Project',
      github: 'https://github.com/394-w24/BloomCraft2',
    },
  ];

  // Toggle project details visibility
  const toggleProject = (id) => {
    setExpandedProject((prevId) => (prevId === id ? null : id));
  };

  // Toggle image expansion
  const handleImageClick = (image) => {
    setExpandedImage((prevImage) => (prevImage === image ? null : image));
  };

  return (
    <div className="project-list">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3 onClick={() => toggleProject(project.id)} className="project-title">
            {project.title} {expandedProject === project.id ? '▼' : '▶'}
          </h3>
          <div className="image-container">
            <img
              src={project.image}
              alt={project.title}
              className={`project-image ${expandedImage === project.image ? 'expanded' : ''}`}
              onClick={() => handleImageClick(project.image)}
            />
            {expandedImage === project.image && (
              <div className="image-overlay" onClick={() => handleImageClick(null)}>
                <img src={project.image} alt={project.title} className="expanded-image" />
              </div>
            )}
          </div>
          <div className="project-links">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              {project.linkText}
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub Repo
              </a>
            )}
          </div>
          {expandedProject === project.id && (
            <div className="project-details">
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
