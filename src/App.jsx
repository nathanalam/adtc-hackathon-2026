import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Factory,
  Clock,
  Users,
  Rocket,
  Wrench,
  ChevronRight,
  MapPin,
  Calendar,
  Box,
  BrainCircuit,
  Settings,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-hbs-crimson selection:text-white overflow-x-hidden">

      {/* Background Glow Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-flow-vignette opacity-80"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)',
          boxShadow: 'inset 0 0 100px #000000'
        }}>
      </div>

      {/* Blue Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-hbs-crimson/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #0041FF 1px, transparent 1px), linear-gradient(to bottom, #0041FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-wider">
            <div className="bg-hbs-crimson p-1.5 rounded-sm shadow-[0_0_10px_#A51C30]">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">HBS <span className="text-hbs-crimson">DEEP TECH</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollToSection('about')} className="hover:text-hbs-crimson transition-colors uppercase">Mission</button>
            <button onClick={() => scrollToSection('schedule')} className="hover:text-hbs-crimson transition-colors uppercase">Schedule</button>
            <button onClick={() => scrollToSection('tools')} className="hover:text-hbs-crimson transition-colors uppercase">Toolkit</button>
            <a
              href="https://lu.ma/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-hbs-crimson text-white font-bold rounded-sm hover:bg-red-700 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(165,28,48,0.5)] uppercase tracking-wider text-xs"
            >
              Register on Luma
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono mb-8 animate-fade-in text-neon-blue mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            APRIL 14-15, 2026 • HARVARD BUSINESS SCHOOL
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-white mb-8 leading-[0.9]">
            HBS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hbs-crimson to-red-500 drop-shadow-[0_0_10px_rgba(165,28,48,0.5)]">
              DEEP TECH
            </span>
            <br />HACKATHON
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light mx-auto md:mx-0 border-l-2 border-neon-blue pl-6">
            Beyond the MVP. We aren't just building apps; we are architecting the physical future.
            Join us to solve complex supply chain, logistics, and feasibility challenges in deep tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://lu.ma/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-hbs-crimson hover:bg-red-700 text-white font-display font-bold rounded-sm transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(165,28,48,0.4)] hover:shadow-[0_0_30px_rgba(165,28,48,0.6)] uppercase tracking-wide"
            >
              Secure Your Spot
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('involve')}
              className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-neon-blue text-white font-display font-bold rounded-sm transition-all uppercase tracking-wide hover:shadow-[0_0_15px_rgba(0,65,255,0.3)]"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </header>

      {/* The Mission / About */}
      <section id="about" className="relative z-10 py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Factory className="text-hbs-crimson drop-shadow-[0_0_8px_rgba(165,28,48,0.8)]" size={32} />
                MISSION PROTOCOL
              </h2>
              <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
                <p>
                  Most hackathons stop at software. We believe the next trillion-dollar opportunities lie at the intersection of <span className="text-white font-bold">atoms and bits</span>.
                </p>
                <p>
                  Force MBAs to move beyond high-level strategy by delivering three technical assets: a <strong className="text-neon-blue font-bold">3D CAD model/render</strong>, a verifiable <strong className="text-neon-blue font-bold">Bill of Materials (BOM) mapped to real suppliers</strong>, and a <strong className="text-neon-blue font-bold">go-to-market plan with defined unit economics</strong>.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-sm border border-white/10 hover:border-neon-blue/50 transition-colors group">
                  <Box className="w-8 h-8 text-hbs-crimson mb-4 group-hover:drop-shadow-[0_0_10px_rgba(165,28,48,0.8)] transition-all" />
                  <div className="font-display font-bold text-white text-lg mb-1">Supply Chain</div>
                  <div className="text-xs text-neon-blue uppercase tracking-widest">Sourcing & Logistics</div>
                </div>
                <div className="p-6 bg-white/5 rounded-sm border border-white/10 hover:border-neon-blue/50 transition-colors group">
                  <Settings className="w-8 h-8 text-hbs-crimson mb-4 group-hover:drop-shadow-[0_0_10px_rgba(165,28,48,0.8)] transition-all" />
                  <div className="font-display font-bold text-white text-lg mb-1">Feasibility</div>
                  <div className="text-xs text-neon-blue uppercase tracking-widest">Technical Validation</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] rounded-full opacity-50"></div>
              <div className="relative bg-[#050505] border border-white/10 p-10 rounded-lg shadow-2xl backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <BrainCircuit size={100} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">EVENT DATA</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-6 group">
                    <div className="bg-white/5 p-3 rounded-sm text-neon-blue border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,65,255,0.4)] transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Harvard Business School</div>
                      <div className="text-slate-400 text-sm font-mono mt-1">Batten 207</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 group">
                    <div className="bg-white/5 p-3 rounded-sm text-neon-blue border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,65,255,0.4)] transition-all">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">April 14 - April 15, 2026</div>
                      <div className="text-slate-400 text-sm font-mono mt-1">April 14 - April 15</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 group">
                    <div className="bg-white/5 p-3 rounded-sm text-neon-blue border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,65,255,0.4)] transition-all">
                      <Users size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Scale</div>
                      <div className="text-slate-400 text-sm font-mono mt-1">~60 students (12-15 teams)</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="relative z-10 py-24 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-white mb-4">RUN OF SHOW</h2>
            <p className="text-neon-blue font-mono tracking-widest">2-DAY SPRINT // VALIDATE THE IMPOSSIBLE</p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-16">
            {[
              { time: "Day 1", title: "CONCEPT, ARCHITECTURE & SOURCING", desc: "April 14", icon: Rocket },
              { time: "1:00 PM", title: "KICKOFF & CONSTRAINTS REVEAL", desc: "Define scope (e.g., robotics, defense tech, industrial AI).", icon: Rocket },
              { time: "1:30 PM", title: "IDEATION & TEAM FORMATION", desc: "", icon: Users },
              { time: "2:00 PM", title: "TOOLING CRASH COURSE", desc: "Rapid CAD (Onshape, AI generators) and supplier sourcing (ThomasNet, Alibaba).", icon: Wrench },
              { time: "2:45 PM", title: "CORE WORKING BLOCK I", desc: "Architecture & Sourcing. Lock in the core concept; map the initial BOM.", icon: Box },
              { time: "5:00 PM", title: "TECHNICAL REALITY CHECK", desc: "Deploy technical mentors sourced from the MS/MBA cohort and Q-Lab network to actively pressure-test hardware feasibility and automation logic.", icon: Settings },
              { time: "6:00 PM", title: "WORKING DINNER", desc: "Heavy vegetarian and pescatarian catering.", icon: Clock },
              { time: "7:00 PM", title: "CORE WORKING BLOCK II", desc: "Supplier Verification. Teams must secure real-world pricing and lead times for their BOM.", icon: Factory },
              { time: "Day 2", title: "CAD, ECONOMICS & PITCH EXECUTION", desc: "April 15", icon: Rocket },
              { time: "1:00 PM", title: "RECONVENE & TARGET SETTING", desc: "", icon: Rocket },
              { time: "1:15 PM", title: "CORE WORKING BLOCK III", desc: "CAD Rendering & Unit Economics. Finalize visual assets and calculate precise unit costs based on Day 1 sourcing.", icon: Cpu },
              { time: "4:00 PM", title: "PITCH CONSTRUCTION", desc: "Translate technical architecture and BOM data into an investment narrative.", icon: BrainCircuit },
              { time: "5:30 PM", title: "WORKING DINNER", desc: "", icon: Clock },
              { time: "6:30 PM", title: "PITCHES", desc: "Strict timing: 3-minute pitch, 2-minute Q&A per team.", icon: Users },
              { time: "7:45 PM", title: "JUDGING & AWARDS", desc: "", icon: Users },
            ].map((item, idx) => (
              <div key={idx} className="relative md:pl-16 pl-10 group">
                <div className="absolute -left-[9px] md:-left-[9px] bg-black border-2 border-hbs-crimson rounded-full p-2 text-white group-hover:shadow-[0_0_20px_#A51C30] transition-all z-10">
                  <item.icon size={16} />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                  <div className="font-mono text-neon-blue font-bold shrink-0 w-24 text-lg pt-1">{item.time}</div>
                  <div className="bg-white/5 hover:bg-white/10 p-8 rounded-sm border border-white/10 w-full hover:border-hbs-crimson transition-all group-hover:translate-x-2">
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="tools" className="relative z-10 py-24 bg-black border-y border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">THE BUILDER'S STACK</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Leverage powerful tools from our partners to accelerate your feasibility study.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Replit", role: "Prototyping", desc: "Rapidly spin up backend logic or simulation scripts.", color: "hover:border-orange-500", glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]" },
              { name: "Lovable", role: "Interface", desc: "Generate internal dashboards and logistics UIs instantly.", color: "hover:border-blue-500", glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" },
              { name: "Gamma", role: "Presentation", desc: "Build the pitch deck while you build the product.", color: "hover:border-purple-500", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]" },
              { name: "Xometry", role: "Manufacturing", desc: "Get real-time quotes for CNC, 3D printing, and injection molding.", color: "hover:border-green-500", glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]" },
            ].map((tool, idx) => (
              <div key={idx} className={`bg-[#0A0A0A] p-8 rounded-sm border border-white/10 transition-all cursor-default group ${tool.color} ${tool.glow} hover:-translate-y-2`}>
                <div className="text-xs font-mono text-neon-blue mb-4 uppercase tracking-widest">{tool.role}</div>
                <div className="text-2xl font-display font-bold text-white mb-4">{tool.name}</div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Registration */}
      <section id="involve" className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-hbs-crimson/20 to-neon-blue/20 blur-[100px] opacity-40"></div>

          <div className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-10 md:p-16 text-center shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">BUILD THE FUTURE</h2>
            <p className="text-slate-300 mb-12 max-w-2xl mx-auto text-lg font-light">
              Whether you are hacking, judging, or sponsoring, we want you involved in HBS's premier deep tech event.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="#"
                className="px-6 py-6 rounded-sm bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col items-center justify-center gap-3 group"
              >
                <span className="font-display tracking-wide group-hover:text-neon-blue transition-colors">SUBMIT PROJECT</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">(DEVPOST SOON)</span>
              </a>

              <a
                href="mailto:slam@mba2027.hbs.edu?subject=Judge Registration - HBS Deep Tech Hackathon&body=Hi, I am interested in being a judge for the hackathon. My background is..."
                className="px-6 py-6 rounded-sm bg-hbs-crimson/10 text-hbs-crimson font-bold border border-hbs-crimson/30 hover:bg-hbs-crimson/20 hover:border-hbs-crimson hover:shadow-[0_0_20px_rgba(165,28,48,0.3)] transition-all flex flex-col items-center justify-center gap-3"
              >
                <span className="font-display tracking-wide">REGISTER AS JUDGE</span>
                <span className="text-xs font-mono opacity-80 decoration-slate-400">EMAIL REGISTRATION</span>
              </a>

              <a
                href="mailto:slam@mba2027.hbs.edu?subject=Sponsorship Inquiry - HBS Deep Tech Hackathon&body=Hi, we are interested in sponsoring the hackathon..."
                className="px-6 py-6 rounded-sm bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col items-center justify-center gap-3 group"
              >
                <span className="font-display tracking-wide group-hover:text-neon-blue transition-colors">SPONSOR EVENT</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-white transition-colors">PARTNER WITH US</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-black text-center text-slate-500 text-sm font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            &copy; {new Date().getFullYear()} HBS AUTOMATION & DEEP TECH CLUB.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neon-blue transition-colors uppercase tracking-widest text-xs">Contact</a>
            <a href="#" className="hover:text-neon-blue transition-colors uppercase tracking-widest text-xs">Club Page</a>
            <a href="#" className="hover:text-neon-blue transition-colors uppercase tracking-widest text-xs">Code of Conduct</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
