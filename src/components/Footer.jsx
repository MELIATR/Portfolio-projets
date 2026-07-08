import React from "react";
import { Github, Linkedin, Mail, Sparkles, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer
      id="contact"
      className="relative pt-32 pb-8 overflow-hidden"
      style={{background: "linear-gradient(to bottom, #0f0020, #08000f)", borderTop: "1px solid rgba(139,92,246,0.2)"}}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "rgba(109,40,217,0.15)"}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "rgba(139,92,246,0.1)", animationDelay: "1000ms"}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles style={{color: "#a78bfa"}} size={24} />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(135deg, #c4b5fd, #8b5cf6, #7c3aed)"}}>
                Amelia Tararbit
              </h2>
            </div>

            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{color: "#a78bfa"}}>
              Building modern web applications with clean code, creativity, and a passion for learning new technologies.
            </p>

          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{color: "#6d28d9"}}>
                <div className="w-8 h-px" style={{background: "linear-gradient(to right, #8b5cf6, transparent)"}}></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Projects", id: "projects" },
                  { label: "Skills", id: "skills" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="transition-colors inline-flex items-center gap-1 group"
                      style={{color: "#a78bfa"}}
                      onMouseEnter={e => e.currentTarget.style.color = "#ddd6fe"}
                      onMouseLeave={e => e.currentTarget.style.color = "#a78bfa"}
                    >
                      {link.label}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{color: "#6d28d9"}}>
                <div className="w-8 h-px" style={{background: "linear-gradient(to right, #7c3aed, transparent)"}}></div>
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <p
                  
                    className="transition-colors underline underline-offset-4"
                    style={{color: "#a78bfa", textDecorationColor: "#6d28d9"}}
                    onMouseEnter={e => { e.currentTarget.style.color = "#c4b5fd"; e.currentTarget.style.textDecorationColor = "#c4b5fd"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.textDecorationColor = "#6d28d9"; }}
                  >
                    na_tararbit@esi.dz
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{color: "#6d28d9"}}>
                <div className="w-8 h-px" style={{background: "linear-gradient(to right, #6d28d9, transparent)"}}></div>
                Socials
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/MELIATR", label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/tararbit-amelia-9431133a3/", label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl backdrop-blur-sm flex items-center justify-center transition-all"
                    style={{background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#a78bfa"}}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,92,246,0.2)"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"; e.currentTarget.style.color = "#ddd6fe"; e.currentTarget.style.transform = "scale(1.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,92,246,0.1)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)"; e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-px mb-8" style={{background: "linear-gradient(to right, transparent, rgba(139,92,246,0.4), transparent)"}}></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p style={{color: "#6d28d9"}}>
            Designed & Developed by Me
          </p>
          <p style={{color: "#6d28d9"}}>
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
