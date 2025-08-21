import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaLinkedin, FaBuilding } from 'react-icons/fa';
import './Testimonials.css';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  linkedinUrl?: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      name: "Stories and Dimensions Team",
      position: "Development Team",
      company: "Stories and Dimensions",
      image: "/api/placeholder/80/80",
      content: "Digambar's expertise in MERN stack development significantly improved our event management applications. His ability to reduce scheduling errors by 30% and optimize performance by 15% made him an invaluable team member.",
      rating: 5,
    },
    {
      name: "Blue Ocean Shift Consulting",
      position: "Design Team Lead",
      company: "Blue Ocean Shift Consulting",
      image: "/api/placeholder/80/80",
      content: "Working with Digambar as a graphic designer was exceptional. His creativity and professional approach to brand identity design exceeded our expectations. He delivered unique, professional touches that perfectly aligned with our vision.",
      rating: 5,
    },
    {
      name: "Academic Supervisor",
      position: "Project Guide",
      company: "ADYPSOE",
      image: "/api/placeholder/80/80",
      content: "Digambar's innovative approach to AR and AI technologies in his virtual try-on jewelry project showcased his technical depth and creative problem-solving abilities. His academic performance reflects his dedication to excellence.",
      rating: 5,
    },
    {
      name: "Scalebrix Co-team",
      position: "Business Partner",
      company: "Scalebrix",
      image: "/api/placeholder/80/80",
      content: "As a cofounder, Digambar brings both technical expertise and entrepreneurial vision to Scalebrix. His ability to translate complex AI concepts into practical SaaS solutions has been crucial to our platform's development.",
      rating: 5,
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? 'star-filled' : 'star-empty'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Testimonials from colleagues and collaborators</p>
          </motion.div>

          <motion.div variants={itemVariants} className="testimonials-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5.0</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Professional References</span>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="testimonial-card"
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-header">
                  <FaQuoteLeft className="quote-icon" />
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <p className="testimonial-content">{testimonial.content}</p>

                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                      <div className="author-company">
                        <FaBuilding />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  {testimonial.linkedinUrl && (
                    <a 
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="testimonials-cta">
            <div className="cta-content">
              <h3>Work With Me</h3>
              <p>
                Looking for a dedicated developer who delivers exceptional results? 
                Let's collaborate and create something amazing together.
              </p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
