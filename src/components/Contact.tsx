import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaPaperPlane, FaUser, FaComment, FaExternalLinkAlt 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init("yGi-p8NRAyp7w5j2x"); // Replace with your EmailJS public key
      
      await emailjs.send(
        "service_8yrx253", // EmailJS service ID
        "template_6w1asap", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "digambarkothawale2003@gmail.com"
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "digambarkothawale05@gmail.com",
      secondary: "digambarkothawale2003@gmail.com",
      link: "mailto:digambarkothawale05@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91-7378861397",
      link: "tel:+917378861397"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Mumbai, Maharashtra",
      secondary: "India"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/digambar-kothawale-a3aa2a219",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub", 
      url: "https://github.com/digambark34",
      color: "#333"
    },
    {
      icon: <FaExternalLinkAlt />,
      name: "Scalebrix",
      url: "https://scalebrix.in",
      color: "#667eea"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Ready to start your next project? Let's discuss how I can help you achieve your goals.</p>
          </motion.div>

          <div className="contact-content">
            <motion.div variants={itemVariants} className="contact-info-section">
              <h3 className="info-title">Get In Touch</h3>
              <p className="info-description">
                I'm currently looking for new opportunities and interesting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-method"
                    whileHover={{ x: 5 }}
                  >
                    <div className="method-icon">
                      {info.icon}
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="method-link">
                          {info.content}
                        </a>
                      ) : (
                        <span className="method-text">{info.content}</span>
                      )}
                      {info.secondary && (
                        <span className="method-secondary">{info.secondary}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ "--social-color": social.color } as React.CSSProperties}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send Me a Message</h3>

                {submitStatus === 'success' && (
                  <motion.div 
                    className="form-message success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="form-message error"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FaUser /> Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FaEnvelope /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    <FaComment /> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaComment /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell me about your project, questions, or just say hello!"
                    rows={6}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
