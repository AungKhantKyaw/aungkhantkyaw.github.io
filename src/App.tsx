import "./App.css";
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMoon, FaSun, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Aung Khant Kyaw | Portfolio";
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const projects = [
    {
      title: "E-commerce Platform & Integrations",
      subtitle: "Scalable Architecture for High-Volume Retail",
      description: "Designed scalable backend systems and APIs integrating CRM, payments, and third-party services.",
      challenge: "Legacy systems struggled with API timeouts and data synchronization issues during high-traffic periods, impacting customer experience.",
      solution: "Architected a robust API layer using Laravel and AWS. Decoupled services to ensure that CRM syncs and payment processing didn't block the main user thread.",
      result: "Improved system reliability and reduced API latency. The architecture successfully supported complex third-party integrations with zero data loss during peak loads.",
      tech: ["OpenCart", "Laravel", "Alpine.js", "React", "Bootstrap", "AWS"],
      github: "#",
      demo: "https://www.kusuriexpress.com/",
    },
    {
      title: "Job Application Tracker",
      subtitle: "Full-stack Productivity Tool",
      description: "A centralized MERN stack application designed to replace fragmented spreadsheets, allowing for efficient management of high-volume job applications and recruitment lifecycles.",
      challenge: "Managing numerous applications via Excel led to data fragmentation and high manual overhead, making it difficult to track follow-up timelines and specific job details across different platforms.",
      solution: "Developed a responsive web application with a React-based dashboard, a RESTful Node.js/Express API, and a persistent MongoDB database to automate organization and provide real-time status updates.",
      result: "Eliminated the risk of missed follow-ups and reduced administrative logging time by providing a structured, mobile-friendly interface to manage hundreds of applications in one place.",
      tech: ["Node.js", "React", "MongoDB", "Express"],
      github: "https://github.com/AungKhantKyaw/job-tracker",
      demo: "#",
    },
    {
      title: "Phishing URL Detection System",
      subtitle: "Machine Learning Cybersecurity Research",
      description: "A machine learning system that detects phishing URLs using lexical, domain, and content-based feature analysis with ensemble models.",
      challenge: "Traditional blacklist/whitelist methods fail to detect newly generated phishing URLs due to delayed updates. The challenge was to build a model capable of identifying zero-day phishing attacks using only URL and domain characteristics.",
      solution: "Engineered a dataset of 11,000+ URLs from PhishTank and UCI, extracting 30+ features including domain age, HTTPS usage, subdomains, and script-based link patterns. Implemented and optimized Random Forest and Gradient Boosting classifiers using RandomizedSearchCV, with structured train/validation/test splits for robust evaluation.",
      result: "Achieved up to 97.2% accuracy after optimization, with strong generalization on unseen data (~96.7% test accuracy). Identified key phishing indicators such as HTTPS usage, domain registration length, and anchor URL patterns, improving detection reliability against evolving threats.",
      tech: ["Python", "Scikit-learn", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Django"],
      github: "https://github.com/AungKhantKyaw/phishing_detection",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur z-50 bg-white/70 border-gray-200 dark:bg-black/50 dark:border-gray-800 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-bold text-gradient">Aung Khant Kyaw</span>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:scale-110 transition"
            >
              {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.p 
            variants={item} 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-tight mb-8"
          >
            Auckland-based Full-Stack Software Engineer with 10+ years building scalable APIs 
            and production systems.
          </motion.p>

          <motion.p 
            variants={item} 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Strong foundation in <span className="text-purple-400 font-medium">PHP</span> and backend architecture. 
            Now actively expanding into <span className="text-purple-400 font-medium">Python</span> (Django/FastAPI) 
            and the <span className="text-purple-400 font-medium">MERN stack</span> to build modern, data-driven applications.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Selected Work</h2>
          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-inner flex items-center justify-center group overflow-hidden">
                  <span className="text-gray-400 group-hover:scale-110 transition duration-500 cursor-default uppercase tracking-widest text-sm font-bold">
                    {project.title} Preview
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{project.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Read Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all"
              >
                <FaTimes size={20} />
              </button>
              
              <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-purple-600 font-semibold text-lg mb-10">{selectedProject.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-10">
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-black mb-4">The Challenge</h4>
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                  </section>
                  <section>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-black mb-4">The Solution</h4>
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                  </section>
                </div>
                
                <div className="space-y-8">
                  <section className="p-6 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-900/30">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-black mb-3">The Result</h4>
                    <p className="text-lg font-bold leading-tight">{selectedProject.result}</p>
                  </section>
                  <div className="flex flex-col gap-3">
                    <a href={selectedProject.github} className="btn-primary w-full text-center py-3 flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> View Source
                    </a>
                    <a href={selectedProject.demo} className="btn-secondary w-full text-center py-3 flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-4 text-center border-t border-gray-100 dark:border-gray-900">
        <h2 className="text-4xl font-bold mb-12">Let&apos;s Build Together</h2>
        <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-400">
          <a href="https://linkedin.com/in/agkhantkyaw" className="hover:text-purple-500 transition-transform hover:scale-110">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:aungkhantkyaw.akk@gmail.com" className="hover:text-purple-500 transition-transform hover:scale-110">
            <FaEnvelope size={32} />
          </a>
          <a href="https://github.com/AungKhantKyaw" className="hover:text-purple-500 transition-transform hover:scale-110">
            <FaGithub size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}