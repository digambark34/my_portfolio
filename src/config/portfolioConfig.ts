// Portfolio Configuration
// Edit this file to easily update your portfolio content

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Digambar Kothawale",
    title: "Full Stack Developer & SaaS Co-founder",
    email: "digambarkothawale05@gmail.com",
    phone: "+91 8530067391",
    location: "Ahmednagar, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/digambar-kothawale-a3aa2a219",
    github: "https://github.com/digambark34",
    website: "https://scalebrix.in"
  },

  // Hero Section
  hero: {
    typingTexts: [
      "Full Stack Developer",
      "SaaS Cofounder", 
      "AR Innovator",
      "Problem Solver",
      "AI Enthusiast",
      "Prompt Engineer"
    ],
    description: "I'm a passionate Full Stack Developer and SaaS Co-founder with 5+ years of experience building scalable applications. Currently leading Scalebrix, where we're revolutionizing business efficiency through innovative SaaS solutions."
  },

  // About Section
  about: {
    description: `I'm a passionate Full Stack Developer and SaaS Co-founder with over 5 years of experience 
    in building scalable web applications and leading technical teams. As the Co-founder and CTO of Scalebrix, 
    I've been instrumental in developing innovative SaaS solutions that streamline business operations and drive growth.

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
      { number: "5+", label: "Years Experience" },
      { number: "20+", label: "Projects Completed" }
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
        description: "Recognized for innovative solutions with multiple awards and successful SaaS product launches."
      },
      {
        title: "Entrepreneurial Spirit",
        description: "Co-founded Scalebrix, building solutions that impact businesses globally with modern technology stack."
      }
    ]
  },

  // Experience Section
  experience: [
    {
      title: "Co-founder & CTO",
      company: "Scalebrix",
      period: "2022 - Present",
      description: "Leading the technical vision and development of innovative SaaS solutions.",
      achievements: [
        "Architected and developed the core Scalebrix platform",
        "Led a team of 8+ developers and designers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Scaled platform to handle 10,000+ active users"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2020 - 2022",
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
        title: "Scalebrix SaaS Platform",
        description: "A comprehensive business management platform with advanced analytics and automation features.",
        image: "/project1.jpg",
        tags: ["React", "Node.js", "MongoDB", "AWS"],
        category: "SaaS",
        liveUrl: "https://scalebrix.in",
        githubUrl: "https://github.com/scalebrix"
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
    website: "https://scalebrix.in"
  },

  // SEO and Meta
  seo: {
    title: "Digambar Kothawale - Full Stack Developer & SaaS Co-founder",
    description: "Expert Full Stack Developer with 5+ years experience. Co-founder of Scalebrix SaaS platform. Specializing in React, Node.js, Python, and cloud technologies.",
    keywords: "Full Stack Developer, React Developer, Node.js, Python, SaaS, Software Engineer, Web Development, Scalebrix",
    url: "https://digambark34.github.io/my_portfolio"
  }
};

export default portfolioConfig;
