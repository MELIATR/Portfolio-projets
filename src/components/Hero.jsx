import React from "react";
import { ArrowDown, Sparkles, Code2, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden" style={{background: "linear-gradient(135deg, #0d0010 0%, #1a0030 40%, #0f0020 70%, #08000f 100%)"}}>

      {/* Effets de fond animés - violet */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "rgba(139, 92, 246, 0.25)"}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "rgba(167, 139, 250, 0.2)", animationDelay: "700ms"}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{background: "rgba(109, 40, 217, 0.15)", animationDelay: "1000ms"}}></div>
        <div className="absolute top-10 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{background: "rgba(196, 181, 253, 0.1)", animationDelay: "400ms"}}></div>
      </div>

      {/* Grille de fond subtile */}
      <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(to right, rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.05) 1px, transparent 1px)", backgroundSize: "4rem 4rem", maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"}}></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-8 animate-fade-in" style={{background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)"}}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{background: "#a78bfa"}}></div>
          <span className="text-sm" style={{color: "#c4b5fd"}}>Computer Science Student🎓</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold mb-5 animate-fade-in-up">
         Amelia Tararbit
        </h1>

        {/* Sous-titre */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-lg md:text-xl" style={{color: "#a78bfa"}}>
          <div className="flex items-center gap-2">
            <Code2 size={20} style={{color: "#c4b5fd"}} />
            <span>Software Engineering Student</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket size={20} style={{color: "#8b5cf6"}} />
            <span>Backend Enthusiast</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={20} style={{color: "#7c3aed"}} />
            <span>Problem Solver</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed" style={{color: "#a78bfa"}}>
          Software Engineering student passionate about building modern web applications and turning ideas into practical, user-friendly solutions. Always eager to learn, create, and improve.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-20 mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center gap-2"
            style={{background: "linear-gradient(135deg, #7c3aed, #8b5cf6, #6d28d9)", boxShadow: "0 4px 30px rgba(139,92,246,0.4)"}}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2"
            style={{background: "rgba(139,92,246,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd"}}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(167,139,250,0.6)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)"}
          >
            Contact Me
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-wave { animation: wave 2s ease-in-out infinite; transform-origin: 70% 70%; display: inline-block; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
