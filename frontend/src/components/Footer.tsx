import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/digambark34',
      icon: <FaGithub />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/digambar-kothawale-a3aa2a219',
      icon: <FaLinkedin />
    },
    {
      name: 'Email',
      url: 'mailto:digambarkothawale05@gmail.com',
      icon: <FaEnvelope />
    },
    {
      name: 'Portfolio',
      url: 'https://digambark34.netlify.app',
      icon: <FaExternalLinkAlt />
    }
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Digambar Kothawale</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating 
              innovative solutions with cutting-edge technologies. Building the 
              future, one line of code at a time.
            </p>
            
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <FaEnvelope />
                <span>digambarkothawale05@gmail.com</span>
              </p>
              <p className="contact-item">
                <span className="location-icon">📍</span>
                <span>Mumbai, Maharashtra, India</span>
              </p>
            </div>
            <div className="availability">
              <span className="status-indicator"></span>
              <span>Available for freelance projects</span>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="newsletter">
              <p className="newsletter-text">
                Interested in my journey? Connect with me to stay updated on 
                my latest projects and insights!
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Digambar Kothawale. All rights reserved.
            </p>
            <div className="footer-actions">
              <span className="portfolio-version">v2.0</span>
              <motion.button
                onClick={scrollToTop}
                className="back-to-top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
