import './App.css';
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Aung Khant Kyaw | Portfolio";
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { skill: "PHP (CodeIgniter, Vanilla)", level: 90, color: "from-purple-500 to-pink-500" },
    { skill: "CMS and E-Commerce", level: 85, color: "from-gray-500 to-gray-500" },
    { skill: "JavaScript (ES6+)", level: 85, color: "from-yellow-500 to-amber-500" },
    { skill: "Modern JS Frameworks", level: 65, color: "from-blue-500 to-cyan-500" },
    { skill: "Database", level: 80, color: "from-green-500 to-emerald-500" },
    { skill: "API Integration", level: 80, color: "from-indigo-500 to-purple-500" },
    { skill: "Docker, Git & CI/CD", level: 70, color: "from-orange-500 to-red-500" },
    { skill: "Tailwind & Bootstrap", level: 75, color: "from-pink-500 to-rose-500" },
    { skill: "Python & Django", level: 55, color: "from-teal-500 to-cyan-500" },
    { skill: "Machine Learning (Scikit-learn, TensorFlow/PyTorch)", level: 45, color: "from-lime-500 to-green-500" },
  ];


  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.3), transparent 50%), radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.2), transparent 50%)'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Aung Khant Kyaw
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-300 font-light mb-8 flex items-center justify-center gap-3 flex-wrap">
            <Code2 className="text-purple-400" size={32} />
            <span>Full-stack Developer</span>
            <span className="text-purple-400">×</span>
            <span>Software Engineer</span>
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <a 
              href="#skills" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              View My Skills
            </a>
            <a 
              href="#feedback" 
              className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <a href="#skills" className="inline-block animate-bounce">
            <ArrowDown size={32} className="text-purple-400" />
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <Sparkles className="text-purple-400 opacity-60" size={24} />
        </div>
        <div className="absolute bottom-1/3 right-10 animate-pulse delay-75">
          <Sparkles className="text-pink-400 opacity-60" size={20} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills &
              </span>
              <br />
              <span className="text-white">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">Technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((item, i) => (
              <div
                key={item.skill}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" 
                     style={{ background: `linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))` }} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{item.skill}</h3>                    
                  </div>
                  
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="feedback" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Let's</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Find me on social media or reach out directly
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {[                           
              { Icon: FaLinkedin, url: "https://linkedin.com/in/agkhantkyaw", color: "hover:text-blue-600", label: "LinkedIn" },
              { Icon: FaEnvelope, url: "mailto:aungkhantkyaw.akk@gmail.com", color: "hover:text-red-500", label: "Email" },
              { Icon: FaGithub, url: "https://github.com/AungKhantKyaw", color: "hover:text-gray-300", label: "GitHub" }
            ].map(({ Icon, url, color, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all hover:scale-110 ${color}`}
                aria-label={label}
              >
                <Icon size={40} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aung Khant Kyaw. All rights reserved.</p>
          
          <a 
            href="#" 
            className="px-6 py-2 rounded-full border border-gray-700 hover:border-purple-500/50 transition-all hover:bg-purple-500/10"
          >
            Back to Top ↑
          </a>
          
        </div>
      </footer>
    </div>
  );
}