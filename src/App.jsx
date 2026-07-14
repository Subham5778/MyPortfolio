import { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, Mail, Github, Linkedin, ExternalLink, Award, Trophy, Phone, MapPin, Code, Layers, Eye, Download } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "AI Study Companion",
      date: "June 2026",
      featured: true,
      description: "Full-stack AI-powered placement preparation platform using MERN Stack and Google Gemini API, serving study planning, mock tests, and interview preparation needs.",
      bullets: [
        "Built and integrated 20+ RESTful APIs for authentication, study plans, analytics, notes, and test management.",
        "Implemented JWT authentication with HTTP-only cookies and MongoDB-based data modeling for secure user management.",
        "Designed a responsive analytics dashboard featuring Pomodoro tracking, DSA progress monitoring, AI insights, streaks, and gamified learning metrics."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "JWT", "Tailwind CSS"],
      link: "https://github.com/subham5778"
    },
    {
      title: "Resume-Ai",
      date: "March 2026",
      featured: true,
      description: "AI-based Resume Analyzer using React.js, Node.js, Express.js, and MongoDB to evaluate resumes and generate ATS scores.",
      bullets: [
        "Integrated OpenAI/Gemini APIs to provide keyword optimization, content improvement suggestions, and role-specific feedback.",
        "Implemented a job recommendation system by matching user skills and experience with relevant job roles and ATS requirements."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "OpenAI API"],
      link: "https://github.com/subham5778"
    },
    {
      title: "Code and Sweet",
      date: "Jan 2026",
      featured: true,
      description: "Full-stack e-commerce web app with responsive UI and REST APIs, optimizing search & product storage features.",
      bullets: [
        "Built a full-stack e-commerce web app using React.js, Tailwind CSS, Node.js, and MongoDB Atlas with responsive UI and REST APIs.",
        "Integrated Cloudinary for secure image upload and storage, enabling efficient product and admin management.",
        "Enhanced application performance and scalability by ~40% through optimized API design and database queries."
      ],
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB Atlas", "Cloudinary"],
      link: "https://github.com/Subham5778/CodeandSweet"
    },
    {
      title: "Bank Management System",
      date: "Feb 2025",
      featured: false,
      description: "Java-based multi-account banking system using OOP principles.",
      bullets: [
        "Built a Java-based multi-account banking system using OOP principles to manage checking and savings accounts.",
        "Implemented deposits, withdrawals, transfers, interest calculation, and transaction history.",
        "Added user authentication (register/login) with proper input validation for reliability and usability."
      ],
      tech: ["Java", "Swing", "AWT", "OOP", "DBMS"],
      link: "https://github.com/Subham5778/Bank-System"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => activeTab === 'featured' ? p.featured : !p.featured);

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-text font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-cardBorder">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Subham<span className="text-text">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-muted font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
            <a href="#experience" className="hover:text-primary transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-primary transition-colors">EDUCATION</a>
            <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/subham5778"
              target='_blank'
              rel='noopener noreferrer'
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/subham-kumar5778"
              target='_blank'
              rel='noopener noreferrer'
              className="text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/Subham57/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <section className="min-h-[75vh] flex flex-col justify-center relative">
          <div className="absolute -left-10 top-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -right-10 bottom-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Software Engineer / Full-Stack Developer
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none">
            Hi, I'm <span className="bg-gradient-to-r from-primary via-accent to-blue-400 bg-clip-text text-transparent">Subham</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
            Computer Engineering student at D.Y. Patil University. Passionate about building robust full-stack applications (MERN, APIs) and solving algorithmic puzzles. Highly analytical with a LeetCode rating of <span className="text-text font-bold bg-primary/20 px-1.5 py-0.5 rounded">1874 (Knight badge)</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-text px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/20">
              Explore Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1cWhmujcLXv2L300Cc3gtQndFYDjhh7l4/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card px-6 py-4 rounded-xl font-medium hover:text-primary transition-all flex items-center gap-2"
            >
              <Eye size={18} />
              View Resume
            </a>
            <a 
              href="/Resum.pdf" 
              download="Subham_Kumar_Resume.pdf" 
              className="glass-card px-6 py-4 rounded-xl font-medium hover:text-primary transition-all flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="mailto:subham.nchs5778@gmail.com" className="glass-card px-6 py-4 rounded-xl font-medium hover:text-primary transition-all flex items-center gap-2">
              <Mail size={18} />
              Get In Touch
            </a>
          </div>
          
          <div className="mt-24 flex items-center text-muted text-sm font-medium animate-bounce cursor-pointer w-fit" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <ChevronDown size={16} className="mr-2" />
            Scroll to explore
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <p className="text-primary font-bold tracking-widest text-xs mb-2 uppercase">EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span></h2>
          
          <div className="relative border-l border-cardBorder ml-4 md:ml-6 space-y-12">
            {/* Experience Card 1 (Saiket System) */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Briefcase size={12} className="text-primary group-hover:text-background transition-colors" />
              </div>
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">Java Developer Intern</h3>
                    <p className="text-muted text-sm font-semibold">Saiket System · Remote</p>
                  </div>
                  <span className="text-primary bg-primary/10 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    Jan 2025 – Feb 2025
                  </span>
                </div>
                <ul className="space-y-2 text-muted text-sm md:text-base list-disc pl-4">
                  <li>Developed 6 Java desktop applications (Calculator, Bank Management Systems, To-Do List Manager) using Swing and AWT, strengthening OOP concepts and GUI development skills.</li>
                  <li>Built multiple utility-based projects (Text Analyzer, Number Guessing Game) to improve logic-building, problem-solving, and user experience.</li>
                  <li>Enhanced debugging and code optimization skills while collaborating with peers on code reviews and best practice discussions.</li>
                </ul>
              </div>
            </div>

            {/* Experience Card 2 (Threat Prism) */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-300 flex items-center justify-center">
                <Briefcase size={12} className="text-accent group-hover:text-background transition-colors" />
              </div>
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">CyberSecurity Intern</h3>
                    <p className="text-muted text-sm font-semibold">Threat Prism · Pune</p>
                  </div>
                  <span className="text-accent bg-accent/10 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    Oct 2023 – Nov 2023
                  </span>
                </div>
                <ul className="space-y-2 text-muted text-sm md:text-base list-disc pl-4">
                  <li>Conducted server vulnerability assessments and identified security issues such as SMTP Open Relay, DNS Zone Transfer, and NetBIOS exposures.</li>
                  <li>Performed ethical hacking tasks and evaluated secure server configurations while recommending effective mitigation strategies.</li>
                  <li>Strengthened hands-on penetration testing skills through real-world security analysis and remediation practice.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-primary font-bold tracking-widest text-xs mb-2 uppercase">CREATIONS</p>
              <h2 className="text-4xl md:text-5xl font-black">Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span></h2>
            </div>
            <div className="flex gap-2 bg-cardBg border border-cardBorder p-1 rounded-lg w-fit">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === 'all' ? 'bg-primary text-text' : 'text-muted hover:text-text'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('featured')} 
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === 'featured' ? 'bg-primary text-text' : 'text-muted hover:text-text'}`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="glass-card p-6 md:p-8 flex flex-col h-full group hover:border-primary/45">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-xs text-muted font-medium">{project.date}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cardBorder/50 hover:bg-primary/20 text-muted hover:text-primary transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-muted text-sm md:text-base mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="border-t border-cardBorder/40 pt-4 mb-6">
                  <h4 className="text-xs font-bold text-primary tracking-wider uppercase mb-2">Key Outcomes:</h4>
                  <ul className="text-xs text-muted space-y-1 list-disc pl-4">
                    {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-cardBorder/40 text-text/80 text-xs px-2.5 py-1 rounded-md font-medium border border-cardBorder/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <p className="text-primary font-bold tracking-widest text-xs mb-2 uppercase">TOOLKIT</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Expertise & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-primary" size={24} />
                <h3 className="text-lg font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["Java", "JavaScript", "C#"].map((s, i) => (
                  <span key={i} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3.5 py-2 rounded-lg border border-cardBorder/20">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-accent" size={24} />
                <h3 className="text-lg font-bold">Web & Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "MongoDB"].map((s, i) => (
                  <span key={i} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3.5 py-2 rounded-lg border border-cardBorder/20">{s}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-400" size={24} />
                <h3 className="text-lg font-bold">Fundamentals & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["DSA", "Computer Networks", "DBMS", "Operating Systems", "Git", "GitHub"].map((s, i) => (
                  <span key={i} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3.5 py-2 rounded-lg border border-cardBorder/20">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section id="education" className="scroll-mt-24">
          <p className="text-primary font-bold tracking-widest text-xs mb-2 uppercase">ACADEMICS</p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full">
                  <h4 className="text-lg font-bold text-text">D.Y. Patil University, Pune</h4>
                  <p className="text-primary text-sm font-medium mt-1">B.Tech, Computer Engineering</p>
                  <p className="text-muted text-xs font-semibold mt-0.5">Class of 2022 – 2026</p>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-cardBorder/20 border border-cardBorder/40 flex items-center justify-between">
                <span className="text-sm text-muted font-medium">Cumulative GPA</span>
                <span className="text-lg font-extrabold text-primary">8.40 / 10</span>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/20">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold">Certifications & Achievements</h3>
              </div>
              
              <ul className="space-y-4 text-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span><strong>LeetCode Knight Badge:</strong> Maximum rating of 1874, solving over 100+ high-quality problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span><strong>Weekly Contest 499:</strong> Secured a Global Rank of 815.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span><strong>GeeksforGeeks Contest:</strong> Secured 2nd Rank in University coding contest; solved 300+ problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span><strong>C# Certification:</strong> Earned credential from Microsoft validating expertise in C#.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span><strong>Competitive Prep:</strong> Solved Google SDE & Striver sheets across platforms.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-primary font-bold tracking-widest text-xs mb-4 uppercase">BIOGRAPHY</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Architecting clean code, solving complex algorithms, and building <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">seamless applications</span>.
              </h2>
            </div>
            <div className="flex-1 space-y-6 text-muted text-base md:text-lg leading-relaxed border-l-0 md:border-l border-cardBorder/60 md:pl-8">
              <p>
                I am a B.Tech graduate in Computer Engineering with strong core fundamentals in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.
              </p>
              <p>
                From building complex AI applications like <strong>AI Study Companion</strong> using modern MERN stacks, to analyzing server security setups, I love turning technical puzzles into elegant, high-performing software.
              </p>
              <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+91-8797075778</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>subham.nchs5778@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-cardBorder bg-cardBg/30 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted gap-4">
          <p>© 2026 Subham Kumar. Handcrafted with passion.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/subham5778" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/subham-kumar5778" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:subham.nchs5778@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

