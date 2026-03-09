import { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-cardBorder">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Subham<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-muted font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">WORK</a>
            <a href="#experience" className="hover:text-primary transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-primary transition-colors">EDUCATION</a>
            <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Subham5778"
            target='_blank'
            rel='noopener noreferrer'
            className="text-muted hover:text-primary transition-colors"
            >
            <button className="text-muted hover:text-primary transition-colors">
              <Github size={20} />
            </button>
            </a>
            <a href="https://www.linkedin.com/in/subham-kumar-580493257/"
            target='_blank'
            rel='noopener noreferrer'
            className="text-muted hover:text-primary transition-colors"
            >
            <button className="text-muted hover:text-primary transition-colors">
              <Linkedin size={20} />
            </button>
            </a>
          <a
          href="https://leetcode.com/u/Subham5778/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-primary transition-colors"
       >
        <button className="text-muted hover:text-primary transition-colors flex items-center">
         <SiLeetcode size={20} />
         </button>
         </a>

          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Subham<br />
            <span className="text-primary">Kumar</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Final-year Computer Engineering student with 700+ DSA problems solved, skilled in Java, React.js & Node.js — building scalable, real-world solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg font-medium transition-colors">
              VIEW PROJECTS
            </a>
            <a href="#experience" className="glass-card px-8 py-4 rounded-lg font-medium hover:text-primary transition-colors">
              MY EXPERIENCE
            </a>
           <a
  href="https://drive.google.com/file/d/1Gz4TpbAC3LEbZMMxho2f6jTokWpglM8w/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="glass-card px-8 py-4 rounded-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>

  VIEW RESUME
</a>
          </div>
          <div className="mt-20 flex items-center text-muted text-sm font-medium">
            <ChevronDown size={16} className="mr-2 animate-bounce" />
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <p className="text-primary font-medium tracking-widest text-sm mb-2 uppercase">CAREER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Work <span className="text-primary">Experience</span></h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cardBorder before:to-transparent">
            {/* Experience Card 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cardBg text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary group-hover:text-background">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
  
  <div className="flex items-center gap-3">
    
    <div>
      <h3 className="text-xl font-bold mb-1">Java Developer Intern</h3>
      <p className="text-primary text-sm font-medium">
        SaiKet Systems · Internship · Remote
      </p>
    </div>

    {/* Certificate Link */}
    <a
      href="https://drive.google.com/file/d/1HkT3QW-M95jXjNpCSOzmg6bmqsmE23pm/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted hover:text-primary transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 1 0-7.07-7.07L11 4"></path>
        <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L13 20"></path>
      </svg>
    </a>

  </div>

  <span className="text-muted text-sm mt-2 md:mt-0 font-medium">
    JAN 2025 - FEB 2025
  </span>

</div>
                <ul className="space-y-3 text-muted/90 list-none ml-0 pl-1 mt-4">
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Completed 6 project assignments related to Java development
                  </li>
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Built small applications and implemented OOP concepts
                  </li>
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Improved understanding of Java, debugging, and clean code
                  </li>
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Gained experience working with real coding tasks
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cardBg text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary group-hover:text-background">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">

  <div className="flex items-center gap-3">
    
    <div>
      <h3 className="text-xl font-bold mb-1">Cybersecurity Intern</h3>
      <p className="text-primary text-sm font-medium">
        Threat Prism · Internship · Remote
      </p>
    </div>

    {/* Certificate Link */}
    <a
      href="https://drive.google.com/file/d/17lpww8WjTqURuUDMp--Yh6OYVvyKHUZS/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted hover:text-primary transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 1 0-7.07-7.07L11 4"></path>
        <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L13 20"></path>
      </svg>
    </a>

  </div>

  <span className="text-muted text-sm mt-2 md:mt-0 font-medium">
    OCT 2023 - NOV 2023
  </span>

</div>
                <ul className="space-y-3 text-muted/90 list-none ml-0 pl-1 mt-4">
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Conducted server vulnerability assessments, identifying issues with SMTP Open Relay, DNS Zone Transfer, NetBIOS, and more
                  </li>
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Practiced ethical hacking and secure server configuration, recommending mitigation strategies
                  </li>
                  <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full ml-5">
                    Enhanced practical knowledge of penetration testing in real-world scenarios
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-primary font-medium tracking-widest text-sm mb-2 uppercase">PORTFOLIO</p>
              <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-primary">Projects</span></h2>
            </div>
            <span className="hidden md:inline-block text-muted tracking-widest text-sm font-medium">02 PROJECTS</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="glass-card p-8 flex flex-col h-full group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
  
  <div className="flex justify-between items-start mb-6">
    
    <div>
      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
        Code and Sweet
      </h3>
      <p className="text-muted text-sm font-medium">Jan 2026</p>
    </div>

    {/* GitHub Link Button */}
    <a
      href="https://github.com/Subham5778/CodeandSweet"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <ExternalLink className="text-primary" size={24} />
    </a>

  </div>

  <p className="text-muted/90 mb-6 leading-relaxed">
    Full-stack e-commerce web app with responsive UI and REST APIs.
  </p>

  <ul className="space-y-4 text-muted/90 list-none ml-0 pl-1 mb-8 flex-grow">

    <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
      Built a full-stack e-commerce web app using React.js, Tailwind CSS, Node.js, and MongoDB Atlas with responsive UI and REST APIs
    </li>

    <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
      Integrated Cloudinary for secure image upload and storage, enabling efficient product and admin management
    </li>

    <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
      Enhanced application performance and scalability by ~40% through optimized API design and efficient database queries
    </li>

  </ul>

  <div className="flex flex-wrap gap-2 mt-auto">
    {['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB Atlas', 'Cloudinary'].map((tech) => (
      <span
        key={tech}
        className="bg-cardBorder/40 text-text/80 text-xs font-semibold px-3 py-1.5 rounded"
      >
        {tech}
      </span>
    ))}
  </div>

</div>

            {/* Project 2 */}
            <div className="glass-card p-8 flex flex-col h-full group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Bank Management System</h3>
                  <p className="text-muted text-sm font-medium">FEB 2025</p>
                </div>
                {/* GitHub Link Button */}
                <a 
                 href="https://github.com/Subham5778/Bank-System"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                 <ExternalLink className="text-primary" size={24} />
               </a>
              </div>
              
              <p className="text-muted/90 mb-6 leading-relaxed">
                Java-based multi-account banking system using OOP principles.
              </p>
              
              <ul className="space-y-4 text-muted/90 list-none ml-0 pl-1 mb-8 flex-grow">
                <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
                  Built a Java-based multi-account banking system using OOP principles to manage checking and savings accounts
                </li>
                <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
                  Implemented deposits, withdrawals, transfers, interest calculation, and transaction history
                </li>
                <li className="relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-0 before:h-0 before:border-t-[4px] before:border-t-transparent before:border-l-[6px] before:border-l-primary before:border-b-[4px] before:border-b-transparent ml-5">
                  Added user authentication (register/login) with proper input validation for reliability and usability
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Java', 'OOP', 'ArrayList'].map(tech => (
                  <span key={tech} className="bg-cardBorder/40 text-text/80 text-xs font-semibold px-3 py-1.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <p className="text-primary font-medium tracking-widest text-sm mb-2 uppercase">TOOLKIT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & <span className="text-primary">Tools</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="glass-card p-6 border-t-4 border-t-primary/50">
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">LANGUAGES</h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'C#', 'Python', 'JavaScript'].map(skill => (
                  <span key={skill} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="glass-card p-6 border-t-4 border-t-primary/50">
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">WEB DEVELOPMENT</h3>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Node.js', 'Tailwind CSS'].map(skill => (
                  <span key={skill} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass-card p-6 border-t-4 border-t-primary/50">
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">DATABASES</h3>
              <div className="flex flex-wrap gap-3">
                {['MySQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core CS */}
            <div className="glass-card p-6 border-t-4 border-t-primary/50">
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">CORE CS FUNDAMENTALS</h3>
              <div className="flex flex-col gap-3">
                {['Data Structures & Algorithms', 'Computer Networks', 'DBMS', 'Operating Systems'].map(skill => (
                  <span key={skill} className="bg-cardBorder/40 text-text/90 text-sm font-medium px-3 py-1.5 rounded inline-block w-fit">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Achievements Section */}
        <section id="education" className="scroll-mt-24">
          <p className="text-primary font-medium tracking-widest text-sm mb-2 uppercase">BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Education & <span className="text-primary">Achievements</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:ring-4 before:ring-primary/20">
                  <h4 className="text-lg font-bold">D.Y. Patil University, Pune</h4>
                  <p className="text-primary text-sm font-medium mb-3 mt-1">B.Tech, Computer Engineering</p>
                  <span className="inline-block bg-primary text-background font-bold text-sm px-3 py-1 rounded">
                    CGPA: 8.21 / 10
                  </span>
                </div>
              

            
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:ring-4 before:ring-primary/20">
                  <h4 className="text-lg font-bold">F.N.S. Academy, Patna</h4>
                  <p className="text-primary text-sm font-medium mb-3 mt-1">Higher Secondary (Class XII) – Science</p>
                  <span className="inline-block bg-primary text-background font-bold text-sm px-3 py-1 rounded">
                    PERCENTAGE: 58.50 / 100
                  </span>
                </div>
              </div>
              </div>
              
            </div>

            {/* Awards Card */}
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h3 className="text-xl font-bold">Certifications & Achievements</h3>
              </div>
              
              <ul className="space-y-5 text-muted/90 text-sm md:text-base">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <span><strong>LeetCode:</strong> 400+ problems solved, Top 16.53% in contests (1650+ rating)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <span><strong>GeeksforGeeks:</strong> 2nd rank in University coding contest, 300+ problems solved</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <span>C# Programming Certification by Microsoft</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <span>MySQL & Database Management - Udemy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  <span>Solved Google SDE & Striver sheets for algorithmic mastery</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="glass-card p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-1">
              <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">ABOUT</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Code is craft,<br />built to <span className="text-primary">scale</span>.
              </h2>
            </div>
            <div className="flex-1 space-y-6 text-muted/90 text-lg leading-relaxed">
              <p>
                I'm a final-year Computer Engineering student at D.Y. Patil University, Pune, with a strong foundation in Data Structures & Algorithms, full-stack development, and cybersecurity. I've solved 700+ problems across LeetCode and GeeksforGeeks, ranking in the top 15.63% on LeetCode and 2nd Rank in my university on GFG.
              </p>
              <p>
                I'm seeking a software engineering role where I can apply my technical skills to build scalable, production-grade applications and contribute to impactful engineering teams.
              </p>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-cardBorder mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>© 2026 Subham Kumar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/Subham5778" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/subham-kumar5778/" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:subhamkumar5778@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
