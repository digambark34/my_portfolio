import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  impact?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Virtual Try-On Jewelry",
      description: "AR-powered jewelry try-on experience using cutting-edge technologies",
      longDescription: "An innovative augmented reality application that allows users to virtually try on jewelry items. Built with MERN stack and integrated with AI/ML models for realistic rendering and cloud deployment on AWS.",
      image: "/api/placeholder/400/250",
      technologies: ["MERN", "AR", "AI/ML", "Python", "Docker", "AWS", "Cloud"],
      category: "fullstack",
      features: [
        "Real-time AR jewelry try-on",
        "AI-powered recommendation system", 
        "Cloud-based image processing",
        "Responsive cross-platform design",
        "Advanced 3D rendering",
        "User preference learning"
      ],
      impact: "Revolutionizing online jewelry shopping experience"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event registration and management platform with QR integration",
      longDescription: "A secure MERN stack event system featuring QR code check-in, automated WhatsApp/email confirmations, and comprehensive admin dashboard for seamless event management.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "MongoDB", "QR Code", "WhatsApp API", "Email API"],
      category: "fullstack",
      githubUrl: "https://github.com/digambark34",
      liveUrl: "https://your-event-system.netlify.app",
      features: [
        "QR code-based check-in system",
        "WhatsApp & Email confirmations", 
        "Google Sheets integration",
        "Badge printing functionality",
        "JWT authentication",
        "Admin dashboard with analytics"
      ],
      impact: "Reduced event scheduling errors by 30%"
    },
    {
      title: "Car Rental System",
      description: "Dynamic car booking platform with comprehensive fleet management",
      longDescription: "A robust car rental management system built with PHP and MySQL, featuring real-time vehicle availability, user authentication, and administrative controls for fleet management.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      category: "web",
      githubUrl: "https://github.com/digambark34",
      features: [
        "Real-time vehicle availability",
        "Secure user authentication",
        "Booking management system",
        "Admin panel for fleet control",
        "Rental history tracking",
        "Payment integration ready"
      ],
      impact: "Streamlined car rental operations for agencies"
    },
    {
      title: "Personal Finance Manager",
      description: "Console-based finance tracking application for personal budget management",
      longDescription: "A comprehensive personal finance tracking solution developed in C# that provides users with efficient tools for managing their financial transactions, budgets, and expenses.",
      image: "/api/placeholder/400/250",
      technologies: ["C#", ".NET", "Console Application"],
      category: "desktop",
      githubUrl: "https://github.com/digambark34",
      features: [
        "Income and expense tracking",
        "Category-wise transaction logging",
        "Date-wise financial reports",
        "Budget planning tools",
        "Transaction search and filter",
        "Financial summary dashboard"
      ],
      impact: "Simplified personal finance management for users"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FaDatabase /> },
    { id: 'web', label: 'Web Apps', icon: <FaExternalLinkAlt /> },
    { id: 'desktop', label: 'Desktop', icon: <FaCloud /> },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Showcasing my technical expertise and innovation</p>
          </motion.div>

          <motion.div variants={itemVariants} className="project-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="view-btn">
                      <FaEye /> View Details
                    </button>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.impact && (
                    <div className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                  )}
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-count">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="project-actions">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
              ×
            </button>
            
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <div className="modal-actions">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} />
              
              <div className="modal-details">
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                {selectedProject.impact && (
                  <div className="modal-impact">
                    <h4>Impact</h4>
                    <p>{selectedProject.impact}</p>
                  </div>
                )}
                
                <div className="modal-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
