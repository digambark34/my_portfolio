import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  icon: React.ReactNode;
  achievements: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Stories and Dimensions",
      location: "Mumbai, India",
      duration: "Jul 2025",
      type: "Full-time",
      icon: <FaCode />,
      achievements: [
        "Designed and deployed Event Management Applications using MERN, reducing event scheduling errors by 30%",
        "Designed and developed responsive websites for clients, improving user engagement and load time by 30%",
        "Improved application performance by 15% through optimized code refactoring and efficient data handling"
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Event Management", "Performance Optimization"]
    },
    {
      title: "Student Intern",
      company: "Blue Ocean Shift Consulting",
      location: "Kerala, India", 
      duration: "Jul 2023 - Aug 2023",
      type: "Internship",
      icon: <FaPalette />,
      achievements: [
        "Freelanced as a graphic designer, enhancing brand identity and visual communication",
        "Created graphics for social media, presentations, and marketing materials using Canva and Figma",
        "Designed logos that aligned with client branding and vision, adding unique professional touch",
        "Collaborated closely with clients to understand and deliver on specific design needs"
      ],
      skills: ["Graphic Design", "Canva", "Figma", "Brand Identity", "Social Media Graphics", "Client Communication"]
    },
    {
      title: "Web Developer Intern",
      company: "InternPe",
      location: "Remote",
      duration: "2023",
      type: "Internship",
      icon: <FaChartLine />,
      achievements: [
        "Gained hands-on experience in web development technologies",
        "Worked on real-world projects to enhance technical skills",
        "Collaborated with development teams to deliver quality solutions"
      ],
      skills: ["Web Development", "HTML", "CSS", "JavaScript", "Team Collaboration"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">My professional journey and achievements</p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="experience-header">
                    <div className="company-icon">
                      {exp.icon}
                    </div>
                    <div className="experience-meta">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="company-info">
                        <span className="company-name">
                          <FaBuilding /> {exp.company}
                        </span>
                        <span className="job-type">{exp.type}</span>
                      </div>
                      <div className="job-details">
                        <span className="duration">
                          <FaCalendarAlt /> {exp.duration}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-used">
                    <h4>Technologies & Skills:</h4>
                    <div className="skills-tags">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="timeline-marker"></div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="experience-summary">
            <div className="summary-stats">
              <div className="summary-item">
                <span className="summary-number">3+</span>
                <span className="summary-label">Professional Roles</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">30%</span>
                <span className="summary-label">Error Reduction</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">15%</span>
                <span className="summary-label">Performance Improvement</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">100%</span>
                <span className="summary-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
