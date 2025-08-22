import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLightbulb, FaCode, FaDatabase, FaCloud, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  features: string[];
  impact: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Virtual Try-On Jewelry",
      description: "AR-powered jewelry try-on experience using cutting-edge technologies",
      longDescription: "An innovative AR-powered virtual try-on jewelry application built with the MERN stack, incorporating advanced AR technology and AI/ML algorithms for realistic jewelry visualization. This application revolutionizes the online jewelry shopping experience by allowing customers to virtually try on jewelry items in real-time.",
      image: "",
      technologies: ["MERN", "AR", "AI/ML", "Python", "Docker", "AWS", "Cloud"],
      category: "fullstack",
      features: [
        "Real-time AR jewelry try-on",
        "Advanced 3D visualization",
        "AI-powered recommendation system",
        "User profile management",
        "Inventory management system",
        "Mobile-responsive design"
      ],
      impact: "Increased online jewelry sales by 40% and reduced return rates by 25%"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event registration and management platform with QR integration",
      longDescription: "A full-featured event management system built with React and Node.js that allows users to create, manage, and book events seamlessly. The platform includes real-time notifications, QR code integration, WhatsApp API, and comprehensive analytics for event organizers.",
      image: "",
      technologies: ["React.js", "Node.js", "MongoDB", "QR Code", "WhatsApp API", "Email API"],
      category: "fullstack",
      githubUrl: "https://github.com/username/event-management",
      features: [
        "Event creation and management",
        "User registration system",
        "QR code check-in system",
        "WhatsApp notifications",
        "Email automation",
        "Analytics dashboard",
        "Payment integration"
      ],
      impact: "Managed 500+ events with 10,000+ attendees successfully"
    },
    {
      title: "Car Rental System",
      description: "Dynamic car booking platform with comprehensive fleet management",
      longDescription: "A robust car rental management system built with PHP and MySQL, featuring real-time vehicle availability, user authentication, and administrative controls for fleet management. The system provides comprehensive booking management and rental tracking capabilities.",
      image: "",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      category: "web",
      githubUrl: "https://github.com/username/car-rental",
      features: [
        "Vehicle inventory management",
        "Real-time availability tracking",
        "User authentication system",
        "Booking management",
        "Payment processing",
        "Admin dashboard",
        "Rental history tracking"
      ],
      impact: "Streamlined rental operations for 200+ vehicles across multiple locations"
    },
    {
      title: "Personal Finance Manager",
      description: "Console-based finance tracking application for personal budget management",
      longDescription: "A comprehensive personal finance tracking solution developed in C# that provides users with efficient tools for managing their financial transactions, budgets, and expenses. The application features intuitive console interface and robust data management capabilities.",
      image: "",
      technologies: ["C#", ".NET", "Console Application"],
      category: "desktop",
      githubUrl: "https://github.com/username/finance-manager",
      features: [
        "Transaction tracking",
        "Budget planning",
        "Expense categorization",
        "Financial reports",
        "Data export functionality",
        "Secure data storage"
      ],
      impact: "Helped users track and optimize their financial habits with detailed analytics"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaLightbulb },
    { id: 'fullstack', name: 'Full Stack', icon: FaCode },
    { id: 'web', name: 'Web Development', icon: FaDatabase },
    { id: 'desktop', name: 'Desktop Apps', icon: FaCloud }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2>My Projects</h2>
          <p>A showcase of my technical skills and creative solutions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="filter-buttons"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <IconComponent />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <FaExternalLinkAlt />
                  </div>
                )}
                <div className="project-overlay">
                  <FaExternalLinkAlt className="overlay-icon" />
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <div className="project-actions">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="modal-image">
                  {selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  ) : (
                    <div className="modal-image-placeholder">
                      <FaExternalLinkAlt />
                      <span>Project Screenshot</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-body">
                <div className="project-description">
                  <h3>About This Project</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-impact">
                  <h4>Impact & Results</h4>
                  <p>{selectedProject.impact}</p>
                </div>

                <div className="project-technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.githubUrl && (
                  <div className="modal-actions">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-btn github-btn"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
