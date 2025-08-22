import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaTrophy, FaHeart } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <p>
                I'm a passionate <strong>Full Stack Developer</strong> with a love for creating 
                innovative digital solutions. Completed my B.E. in Computer Engineering 
                at Ajeenkya DY Patil School of Engineering with a <strong>CGPA of 7.96</strong>.
              </p>
              
              <p>
                As the <strong>Cofounder of Scalebrix</strong>, I'm building an AI-driven SaaS 
                platform for marketing automation. My journey includes developing cutting-edge 
                applications using the MERN stack, AR technologies, and cloud platforms like AWS.
              </p>

              <p>
                I'm passionate about building efficient and scalable solutions that solve real-world problems. 
                My focus on clean code architecture and user-centric design has helped deliver high-quality 
                applications throughout my career.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">7.96</span>
                  <span className="stat-label">CGPA</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">87.60%</span>
                  <span className="stat-label">Diploma</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <div className="highlight-content">
                  <h3>Education Excellence</h3>
                  <p>Strong academic background with consistent high performance and certifications in cutting-edge technologies.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaCode />
                </div>
                <div className="highlight-content">
                  <h3>Technical Expertise</h3>
                  <p>Proficient in MERN stack, AR technologies, AI/ML, cloud platforms, and modern development practices.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaTrophy />
                </div>
                <div className="highlight-content">
                  <h3>Achievements</h3>
                  <p>First rank in Digital Hunt competition and winner of Bug-na-Bughta competition at MMCOE.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaHeart />
                </div>
                <div className="highlight-content">
                  <h3>Passion & Hobbies</h3>
                  <p>Enthusiastic learner, fast coder, cricket player, and someone who loves building innovative solutions.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="scalebrix-highlight">
            <div className="scalebrix-card">
              <div className="scalebrix-icon">🚀</div>
              <div className="scalebrix-content">
                <h3>Cofounder @ Scalebrix</h3>
                <p>
                  Building an AI-driven SaaS platform for marketing automation at 
                  <a href="https://scalebrix.in" target="_blank" rel="noopener noreferrer"> scalebrix.in</a>. 
                  Transforming how businesses approach marketing with cutting-edge AI technology.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
