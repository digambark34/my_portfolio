// Portfolio Configuration
// Edit this file to easily update your portfolio content

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Digambar Kothawale",
    title: "Full Stack Developer",
    email: "digambarkothawale05@gmail.com",
    phone: "+91 7378861397",
    location: "Mumbai, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/digambar-kothawale-a3aa2a219",
    github: "https://github.com/digambark34",
    
  },

  // Hero Section
  hero: {
    typingTexts: [
      "Full Stack Developer",
      "Web Developer", 
      "AR Innovator",
      "Problem Solver",
      "AI Enthusiast",
      "Prompt Engineer"
    ],
    description: "I'm a passionate Full Stack Developer with 5+ years of experience building scalable applications. I specialize in modern web technologies and love creating innovative solutions that solve real-world problems."
  },

  // About Section
  about: {
    description: `I'm a passionate Full Stack Developer with over 5 years of experience 
    in building scalable web applications and leading technical teams. I have extensive experience 
    in developing innovative solutions that streamline business operations and drive growth.

    My expertise spans across modern web technologies including React, Node.js, Python, and cloud platforms. 
    I have a strong background in both frontend and backend development, with a keen eye for creating user-centric 
    innovative digital solutions. Completed my B.E. in Computer Engineering 
    from Pravara Rural Engineering College with a remarkable 7.96 CGPA, I bring both academic excellence 
    and practical industry experience to every project.

    I'm passionate about building efficient and scalable solutions that solve real-world problems. 
    My focus on clean code architecture and user-centric design has helped deliver high-quality 
    applications throughout my career.`,
    
    stats: [
      { number: "7.96", label: "CGPA" },
      { number: "87.60%", label: "Diploma" },
      { number: "1+", label: "Years Experience" },
      { number: "11+", label: "Projects Completed" }
    ],

    highlights: [
      {
        title: "Education Excellence",
        description: "Strong academic background with consistent high performance and certifications in cutting-edge technologies."
      },
      {
        title: "Technical Leadership",
        description: "Leading development teams and architecting scalable solutions for complex business challenges."
      },
      {
        title: "Innovation & Awards",
        description: "Recognized for innovative solutions with multiple awards and successful project launches."
      },
      {
        title: "Professional Growth",
        description: "Continuously learning and adapting to new technologies to deliver cutting-edge solutions."
      }
    ]
  },

  // Experience Section
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications and managing technical projects.",
      achievements: [
        "Architected and developed scalable web applications using React and Node.js",
        "Led a team of 5+ developers on multiple high-impact projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized application performance handling 10,000+ concurrent users"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2019 - 2020",
      description: "Developed and maintained web applications using modern technologies.",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Optimized database queries improving performance by 40%",
        "Implemented automated testing reducing bugs by 50%",
        "Mentored junior developers on best practices"
      ]
    }
  ],

  // Skills Section
  skills: {
    categories: {
      programming: "Programming Languages",
      frontend: "Frontend Technologies", 
      backend: "Backend Technologies",
      database: "Databases",
      tools: "Tools & Platforms",
      cloud: "Cloud & DevOps"
    }
  },

  // Projects Section (You can add more projects here)
  projects: {
    featured: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce platform with advanced features and modern UI/UX design.",
        image: "/project1.jpg",
        tags: ["React", "Node.js", "MongoDB", "AWS"],
        category: "Web Application",
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/digambark34/ecommerce-platform"
      }
      // Add more projects here
    ]
  },

  // Contact Section
  contact: {
    title: "Let's Work Together",
    description: "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!",
    
    // EmailJS Configuration
    emailjs: {
      serviceId: "service_8yrx253",
      templateId: "YOUR_TEMPLATE_ID", // Update this
      publicKey: "YOUR_PUBLIC_KEY"    // Update this
    }
  },

  // Social Media
  social: {
    github: "https://github.com/digambark34",
    linkedin: "https://www.linkedin.com/in/digambar-kothawale-a3aa2a219",
    twitter: "https://twitter.com/digambark34",
    email: "mailto:digambarkothawale05@gmail.com",
    website: "https://digambark34.netlify.app"
  },

  // SEO and Meta
  seo: {
    title: "Digambar Kothawale - Full Stack Developer",
    description: "Expert Full Stack Developer with 5+ years experience. Specializing in React, Node.js, Python, and cloud technologies. Building scalable web applications.",
    keywords: "Full Stack Developer, React Developer, Node.js, Python, Software Engineer, Web Development, JavaScript",
    url: "https://digambark34.netlify.app"
  }
};

export default portfolioConfig;
