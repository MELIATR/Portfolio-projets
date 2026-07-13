import React from "react";
import { ExternalLink, Github, Sparkles, Smartphone, Globe, Code2, Bot } from "lucide-react";

const Work = () => {
 const projects = [
    {
      title: "Road Safety",
      description: "Mobile road safety application with a service request system (mechanic, towing, delivery) and real-time tracking. Responsible for the backend: REST API, WebSocket management for live tracking, and database.",
      tags: ["Node.js", "Express", "MongoDB", "WebSocket", "REST API", "JavaScript"],
      icon: <Smartphone size={24} />,
      color: "light",
      image: "🚗",
      github: "https://github.com/MELIATR/road-safety-backend",
      demo: "#",
      featured: true
    },
    {
      title: "The Refactoring Swarm",
      description: "Multi-agent system for automated Python code analysis, correction, and validation using LLMs. Combines static analysis, automatic fixing, and test-based validation through specialized agents (Auditor, Fixer, Judge) collaborating iteratively until the code is functional and follows best practices.",
      tags: ["Python", "LangChain", "LangGraph", "Google Gemini", "Pylint", "Pytest", "Multi-Agent AI"],
      icon: <Bot size={24} />,
      color: "mid",
      image: "🤖",
      github: "https://github.com/MELIATR/tp_initiation_aux_agents_IA_et_LLM",
      demo: "#",
      featured: true
    },
    {
      title: "University Wellness Platform",
      description: "Cross-functional project to modernize student services (MESRS/ONOU): housing, health, activities. Role of Technical Lead — overall architecture, detailed architecture of 3 modules, specifications and technical proposal.",
      tags: ["UML", "Software Architecture", "Merise"],
      icon: <Code2 size={24} />,
      color: "mid",
      image: "🎓",
      github: "#",
      demo: "#",
      featured: false
    },
   {
      title: "Transport Ticket Management",
      description: "JavaFX desktop application for managing transport passes (tickets and cards): user/employee registration, pass purchase and validity verification, complaint management, with data persistence via file serialization.",
      tags: ["Java", "JavaFX"],
      icon: <Globe size={24} />,
      color: "dark",
      image: "🎫",
      github: "https://github.com/MELIATR/gestion-transport",
      demo: "#",
      featured: false
}
  ];

  const getColorClasses = (color) => {
    const colors = {
      light: {
        gradient: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
        border: "rgba(196,181,253,0.4)",
        bg: "rgba(196,181,253,0.08)",
        text: "#c4b5fd",
        glow: "rgba(196,181,253,0.15)",
        bar: "linear-gradient(to right, #c4b5fd, #a78bfa)"
      },
      mid: {
        gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        border: "rgba(139,92,246,0.4)",
        bg: "rgba(139,92,246,0.1)",
        text: "#a78bfa",
        glow: "rgba(139,92,246,0.15)",
        bar: "linear-gradient(to right, #8b5cf6, #7c3aed)"
      },
      dark: {
        gradient: "linear-gradient(135deg, #6d28d9, #5b21b6)",
        border: "rgba(109,40,217,0.4)",
        bg: "rgba(109,40,217,0.12)",
        text: "#8b5cf6",
        glow: "rgba(109,40,217,0.15)",
        bar: "linear-gradient(to right, #6d28d9, #5b21b6)"
      }
    };
    return colors[color];
  };

  return (
<section id="projects" className="relative py-32 text-white overflow-hidden" style={{background: "linear-gradient(to bottom, #08000f, #0f0020, #0d0018)"}}>
      {/* Effets de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl" style={{background: "rgba(109,40,217,0.12)"}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl" style={{background: "rgba(139,92,246,0.1)"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6" style={{background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)"}}>
            <Sparkles size={16} style={{color: "#a78bfa"}} />
            <span className="text-sm uppercase tracking-wider" style={{color: "#c4b5fd"}}>Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(135deg, #ddd6fe, #8b5cf6, #6d28d9)"}}>
              Projects
            </span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{color: "#a78bfa"}}>
            A collection of projects that showcase my passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                className="group relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all hover:shadow-2xl lg:min-h-[400px]"
                style={{
                  background: "rgba(139,92,246,0.05)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  boxShadow: `0 0 0 0 ${colors.glow}`
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.boxShadow = `0 20px 60px ${colors.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.15)"; e.currentTarget.style.boxShadow = "0 0 0 0 transparent"; }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10">

                  {/* Image Section */}
                  <div className={`flex items-center justify-center ${project.featured ? "order-1 lg:order-1" : ""}`}>
                    <div className="relative">
                      <div
                        className="w-full aspect-video lg:aspect-square max-w-md rounded-xl flex items-center justify-center text-8xl group-hover:scale-105 transition-transform"
                        style={{background: colors.bg, border: `1px solid ${colors.border}`}}
                      >
                        {project.image}
                      </div>
                      {project.featured && (
                        <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg" style={{background: "linear-gradient(135deg, #7c3aed, #a78bfa)"}}>
                          ✦ Featured
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex flex-col justify-center ${project.featured ? "order-2 lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                        style={{background: colors.gradient}}
                      >
                        {project.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                    </div>

                    <p className="text-lg leading-relaxed mb-6" style={{color: "#a78bfa"}}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`}}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all"
                          style={{background: colors.gradient, boxShadow: `0 4px 15px ${colors.glow}`}}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all"
                          style={{background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa"}}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,92,246,0.15)"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,92,246,0.08)"; }}
                        >
                          <Github size={18} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
        </div>
      </div>
    </section>
  );
};

export default Work;
