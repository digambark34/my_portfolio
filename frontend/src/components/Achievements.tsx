import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaAward, FaStar, FaCrown, FaGem } from 'react-icons/fa';
import './Achievements.css';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  year?: string;
  highlight?: boolean;
}

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements: Achievement[] = [
    {
      title: "1st Place - Digital Hunt Competition",
      description: "Secured first rank in the Digital Hunt competition held at Ajeenkya DY Patil School of Engineering",
      icon: <FaCrown />,
      category: "Competition",
      year: "2024",
      highlight: true
    },
    {
      title: "Winner - Bug-na-Bughta Competition",
      description: "Winner of the Bug-na-Bughta debugging competition at MMCOE, showcasing problem-solving skills",
      icon: <FaTrophy />,
      category: "Competition", 
      year: "2023",
      highlight: true
    },
    {
      title: "Degree with First Class Distinction",
      description: "Maintained outstanding academic performance with CGPA of 7.96 in Computer Engineering",
      icon: <FaStar />,
      category: "Academic",
      year: "2022-2025"
    },
    {
      title: "Diploma with First Distinction",
      description: "Completed Diploma in Computer Engineering with 87.60% from Yashwantrao Bhonsale Polytechnic",
      icon: <FaMedal />,
      category: "Academic",
      year: "2019-2022"
    },
    {
      title: "High School Excellence",
      description: "Achieved 87.80% in high school from Milagris High School Sawantwadi",
      icon: <FaAward />,
      category: "Academic",
      year: "2019"
    },
    {
      title: "Full Stack Development",
      description: "Successfully developed multiple enterprise-level web applications using modern technology stack",
      icon: <FaGem />,
      category: "Development",
      year: "2024",
      highlight: true
    },
    {
      title: "Multiple Certifications",
      description: "Earned certifications in C#, Machine Learning, PHP & MySQL, MSCIT, and CCIT",
      icon: <FaAward />,
      category: "Certification",
      year: "2021-2024"
    },
    {
      title: "Performance Optimization Expert",
      description: "Improved application performance by 15% through optimized code refactoring and efficient data handling",
      icon: <FaStar />,
      category: "Professional",
      year: "2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = Array.from(new Set(achievements.map(achievement => achievement.category)));

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle">Recognition of excellence and dedication</p>
          </motion.div>

          <motion.div variants={itemVariants} className="achievements-stats">
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <span className="stat-number">2</span>
                <span className="stat-label">Competition Wins</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎓</div>
              <div className="stat-content">
                <span className="stat-number">7.96</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📜</div>
              <div className="stat-content">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <div className="achievements-categories">
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="category-section"
              >
                <h3 className="category-title">{category}</h3>
                <div className="achievements-grid">
                  {achievements
                    .filter(achievement => achievement.category === category)
                    .map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="achievement-icon">
                          {achievement.icon}
                        </div>
                        <div className="achievement-content">
                          <div className="achievement-header">
                            <h4 className="achievement-title">{achievement.title}</h4>
                            {achievement.year && (
                              <span className="achievement-year">{achievement.year}</span>
                            )}
                          </div>
                          <p className="achievement-description">{achievement.description}</p>
                          {achievement.highlight && (
                            <div className="achievement-badge">
                              <FaStar /> Featured Achievement
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="achievements-summary">
            <div className="summary-card">
              <div className="summary-icon">
                <FaTrophy />
              </div>
              <div className="summary-content">
                <h3>Journey of Excellence</h3>
                <p>
                  From academic excellence to entrepreneurial success, my journey has been marked by 
                  consistent achievement and innovation. As the cofounder of Scalebrix and winner of 
                  multiple competitions, I continue to push boundaries and create meaningful impact 
                  in the tech industry.
                </p>
                <div className="summary-highlights">
                  <span className="highlight-item">🏆 Competition Winner</span>
                  <span className="highlight-item">🎯 Academic Achiever</span>
                  <span className="highlight-item">🚀 Entrepreneur</span>
                  <span className="highlight-item">💡 Innovator</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
