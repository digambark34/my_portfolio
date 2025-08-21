import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPhp, FaPython, FaDocker, FaAws, 
  FaGitAlt, FaLinux, FaWindows, FaDatabase, FaCode, FaMobile
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiMysql, SiPostgresql, 
  SiNextdotjs, SiExpress, SiTailwindcss, SiBootstrap, SiCanva, SiFigma,
  SiDotnet
} from 'react-icons/si';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: 90, icon: <SiJavascript />, category: "programming" },
        { name: "Python", level: 85, icon: <FaPython />, category: "programming" },
        { name: "C#", level: 80, icon: <SiDotnet />, category: "programming" },
        { name: "TypeScript", level: 75, icon: <SiTypescript />, category: "programming" },
        { name: "C++", level: 70, icon: <FaCode />, category: "programming" },
        { name: "PHP", level: 75, icon: <FaPhp />, category: "programming" }
      ]
    },
    {
      name: "Frontend Technologies",
      icon: <FaMobile />,
      skills: [
        { name: "React.js", level: 90, icon: <FaReact />, category: "frontend" },
        { name: "Next.js", level: 80, icon: <SiNextdotjs />, category: "frontend" },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss />, category: "frontend" },
        { name: "Bootstrap", level: 80, icon: <SiBootstrap />, category: "frontend" }
      ]
    },
    {
      name: "Backend & Frameworks",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs />, category: "backend" },
        { name: "Express.js", level: 80, icon: <SiExpress />, category: "backend" },
        { name: ".NET", level: 75, icon: <SiDotnet />, category: "backend" }
      ]
    },
    {
      name: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 85, icon: <SiMongodb />, category: "database" },
        { name: "MySQL", level: 80, icon: <SiMysql />, category: "database" },
        { name: "PostgreSQL", level: 75, icon: <SiPostgresql />, category: "database" }
      ]
    },
    {
      name: "Tools & Platforms",
      icon: <FaAws />,
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt />, category: "tools" },
        { name: "Docker", level: 75, icon: <FaDocker />, category: "tools" },
        { name: "AWS", level: 70, icon: <FaAws />, category: "tools" },
        { name: "Linux", level: 75, icon: <FaLinux />, category: "tools" },
        { name: "Windows", level: 90, icon: <FaWindows />, category: "tools" }
      ]
    },
    {
      name: "Design Tools",
      icon: <SiFigma />,
      skills: [
        { name: "Figma", level: 80, icon: <SiFigma />, category: "design" },
        { name: "Canva", level: 85, icon: <SiCanva />, category: "design" }
      ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "var(--skill-level)",
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">My technical expertise and proficiency levels</p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="skill-category"
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.name}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          className="skill-progress-fill"
                          style={{ "--skill-level": `${skill.level}%` } as React.CSSProperties}
                          variants={progressVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="skills-summary">
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <FaCode />
                </div>
                <div className="summary-content">
                  <h4>6+ Languages</h4>
                  <p>Proficient in multiple programming languages</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <FaReact />
                </div>
                <div className="summary-content">
                  <h4>Modern Frameworks</h4>
                  <p>Expert in cutting-edge web technologies</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <FaAws />
                </div>
                <div className="summary-content">
                  <h4>Cloud & DevOps</h4>
                  <p>Experience with cloud platforms and deployment</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <FaDatabase />
                </div>
                <div className="summary-content">
                  <h4>Full Stack</h4>
                  <p>Complete web development capabilities</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="certifications">
            <h3 className="certifications-title">Certifications & Learning</h3>
            <div className="certifications-grid">
              <div className="certification-item">
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <h4>C# Language Developer</h4>
                  <p>Udemy (2024)</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">🔬</div>
                <div className="cert-content">
                  <h4>PHP and MySQL Workshop</h4>
                  <p>IIT Bombay Spoken Tutorial (2021)</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">🤖</div>
                <div className="cert-content">
                  <h4>Machine Learning</h4>
                  <p>Pantatech-E-Learning (2021)</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">💻</div>
                <div className="cert-content">
                  <h4>MSCIT & CCIT</h4>
                  <p>Computer Literacy Certifications</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
