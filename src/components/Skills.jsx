import React from "react";
import { Code2, Database, Zap, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
  {
    title: "Langages",
    icon: <Code2 size={24} />,
    color: "light",
    skills: [
      { name: "C", level: 80 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 80 },
    ]
  },
  {
    title: "Backend",
    icon: <Database size={24} />,
    color: "mid",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST API", level: 80 },
      { name: "WebSocket", level: 75 },
    ]
  },
  {
    title: "Bases de données & Outils",
    icon: <Zap size={24} />,
    color: "dark",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "Git", level: 80 },
      { name: "Linux", level: 70 },
    ]
  }
];

  const getColorClasses = (color) => {
    const colors = {
      light: {
        gradient: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
        border: "rgba(196,181,253,0.2)",
        bg: "rgba(196,181,253,0.08)",
        text: "#c4b5fd",
        bar: "linear-gradient(to right, #c4b5fd, #a78bfa)"
      },
      mid: {
        gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        border: "rgba(139,92,246,0.25)",
        bg: "rgba(139,92,246,0.1)",
        text: "#a78bfa",
        bar: "linear-gradient(to right, #8b5cf6, #7c3aed)"
      },
      dark: {
        gradient: "linear-gradient(135deg, #6d28d9, #5b21b6)",
        border: "rgba(109,40,217,0.3)",
        bg: "rgba(109,40,217,0.12)",
        text: "#8b5cf6",
        bar: "linear-gradient(to right, #6d28d9, #5b21b6)"
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="relative py-32 text-white overflow-hidden" style={{background: "linear-gradient(to bottom, #0f0020, #08000f)"}}>

      {/* Effets de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: "rgba(139,92,246,0.1)"}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: "rgba(109,40,217,0.12)"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6" style={{background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)"}}>
            <Sparkles size={16} style={{color: "#a78bfa"}} />
            <span className="text-sm uppercase tracking-wider" style={{color: "#c4b5fd"}}>My Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(135deg, #ddd6fe, #8b5cf6, #6d28d9)"}}>
              Technologies
            </span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{color: "#a78bfa"}}>
            A diverse toolkit to bring ideas to life, from elegant interfaces to robust backends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all hover:-translate-y-1"
                style={{
                  background: "rgba(139,92,246,0.05)",
                  border: `1px solid ${colors.border}`,
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Icon Header */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform"
                  style={{background: colors.gradient}}
                >
                  <div className="text-white">{category.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium" style={{color: "#ddd6fe"}}>{skill.name}</span>
                        <span className="text-sm" style={{color: colors.text}}>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{background: "rgba(139,92,246,0.1)"}}>
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{width: `${skill.level}%`, background: colors.bar}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Skills Pills */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider mb-6" style={{color: "#6d28d9"}}>Also Familiar With</p>
          <div className="flex flex-wrap justify-center gap-3">
              {["Pascal", "OpenMP", "Selenium", "BeautifulSoup", "VirtualBox", "MySQL Workbench", "Packet Tracer"].map((skill) => (              <span
                key={skill}
                className="px-6 py-2 backdrop-blur-sm rounded-full text-sm transition-all cursor-default"
                style={{background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa"}}
                onMouseEnter={e => { e.currentTarget.style.color = "#ddd6fe"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)"; }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
