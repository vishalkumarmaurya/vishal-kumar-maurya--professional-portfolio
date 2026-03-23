import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { PortfolioSection } from "@/components/PortfolioSection";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Cpu,
  Users,
  Phone,
  MapPin,
  Languages,
  Heart,
  ArrowRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
export function HomePage() {
  const {
    name,
    title,
    careerObjective,
    contact,
    workExperience,
    education,
    skills,
    certifications,
    researchAndPublications,
    languages,
    interests,
  } = portfolioData;
  return (
    <div className="bg-portfolio-background font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 min-h-screen antialiased">
      <PortfolioHeader />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white border-b border-slate-100"
        >
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#1e40af_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[9.5rem] font-black font-display text-slate-950 tracking-tighter leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="mt-10 text-xl md:text-3xl text-blue-700 font-bold max-w-3xl mx-auto uppercase tracking-wide leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.p>
            <motion.div
              className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="bg-slate-950 hover:bg-blue-900 text-white shadow-2xl transition-all duration-300 rounded-full h-14 px-10 text-lg font-bold">
                <a href={`mailto:${contact.email}`}>Get In Touch</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-slate-950 hover:bg-slate-50 transition-all duration-300 rounded-full h-14 px-10 text-lg font-bold group border border-transparent hover:border-slate-200">
                <RouterLink to="/cv" className="flex items-center gap-2">
                  View Full CV <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </RouterLink>
              </Button>
            </motion.div>
          </div>
        </section>
        {/* Career Objective */}
        <PortfolioSection id="about" title="About Me" className="bg-white">
          <div className="max-w-4xl mx-auto bg-slate-50/50 p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <p className="text-center text-xl md:text-2xl leading-relaxed text-slate-700 font-medium tracking-tight whitespace-pre-line">
              {careerObjective}
            </p>
          </div>
        </PortfolioSection>
        {/* Experience Section */}
        <PortfolioSection id="experience" title="Experience" className="bg-slate-50/30">
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden group rounded-3xl">
                <CardHeader className="p-8 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-slate-950 rounded-2xl shrink-0 shadow-lg">
                        <job.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-black text-slate-950 uppercase tracking-tight">{job.company}</CardTitle>
                        <p className="text-lg text-blue-700 font-bold mt-1 uppercase tracking-wide">{job.role}</p>
                        <Badge variant="secondary" className="mt-4 bg-blue-50 text-blue-800 border-blue-100 font-black uppercase text-[10px] tracking-[0.2em] px-3 py-1">
                          {job.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-8 text-lg font-medium whitespace-pre-line">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Academic Path */}
        <PortfolioSection id="education" title="Education" className="bg-white">
          <div className="max-w-4xl mx-auto space-y-16">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12 border-l-4 border-slate-100 py-2 last:pb-0 group">
                <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-white border-4 border-slate-950 shadow-md group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-2 uppercase tracking-tight group-hover:text-blue-700 transition-colors">{edu.institution}</h3>
                <p className="text-xl text-blue-700 font-bold mb-3 uppercase tracking-wide">{edu.degree}</p>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">{edu.duration}</p>
                <p className="text-slate-600 leading-relaxed max-w-2xl text-lg font-medium whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </PortfolioSection>
        {/* Skills Section */}
        <PortfolioSection id="skills" title="Skills" className="bg-slate-50/50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Technical", icon: Cpu, items: skills.technical, color: "bg-slate-950" },
              { title: "Personal", icon: Users, items: skills.soft, color: "bg-blue-800" }
            ].map((skillGroup, idx) => (
              <Card key={idx} className="border-none shadow-soft overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
                <div className={`${skillGroup.color} px-10 py-6 flex items-center justify-between`}>
                  <h3 className="text-xl font-black text-white flex items-center gap-4 uppercase tracking-widest">
                    <skillGroup.icon className="w-6 h-6" /> {skillGroup.title}
                  </h3>
                </div>
                <CardContent className="p-10">
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-6 py-3 text-sm font-black uppercase tracking-wider bg-white border border-slate-100 text-slate-700 shadow-sm hover:border-blue-500 transition-all cursor-default">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Certifications */}
        <PortfolioSection id="certifications" title="Certifications" className="bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:border-blue-500 transition-all duration-300 shadow-none border border-slate-100 flex flex-col h-full hover:shadow-2xl rounded-3xl">
                <CardContent className="p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                      <cert.icon className="w-6 h-6 text-slate-950 group-hover:text-blue-700" />
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h4 className="font-black text-slate-950 mb-3 leading-tight flex-1 text-xl uppercase tracking-tight">{cert.name}</h4>
                  <div className="mt-6 pt-6 border-t border-slate-50">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Research */}
        <PortfolioSection id="research" title="Research" className="bg-slate-950 text-white" titleClassName="text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {researchAndPublications.map((pub, index) => (
              <Card key={index} className="bg-white/5 border border-white/10 shadow-none group hover:bg-white/10 transition-all duration-300 rounded-3xl">
                <CardContent className="p-10">
                  <div className="flex gap-8 items-start">
                    <div className="p-5 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <FileText className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h4 className="text-2xl md:text-3xl font-black leading-snug tracking-tight uppercase">{pub.title}</h4>
                      <p className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs">{pub.journal}</p>
                      <Button asChild variant="link" className="p-0 h-auto text-blue-400 font-black uppercase text-sm tracking-widest hover:no-underline hover:text-white transition-colors">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          View Work <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Personal Details Section */}
        <PortfolioSection id="personal" title="Personal" className="bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-soft overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
              <CardHeader className="bg-slate-950 text-white py-8 px-10">
                <div className="flex items-center gap-4">
                  <Languages className="w-7 h-7" />
                  <CardTitle className="text-xl font-black uppercase tracking-widest">Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-10 space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <span className="font-black text-slate-900 uppercase tracking-tight text-lg">{lang.name}</span>
                    <Badge variant="outline" className="border-slate-200 text-blue-700 font-black uppercase text-xs tracking-widest px-4 py-1.5">
                      {lang.proficiency}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-none shadow-soft overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
              <CardHeader className="bg-blue-800 text-white py-8 px-10">
                <div className="flex items-center gap-4">
                  <Heart className="w-7 h-7" />
                  <CardTitle className="text-xl font-black uppercase tracking-widest">Interests</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-10">
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest) => (
                    <div key={interest.name} className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full text-slate-800 font-bold uppercase tracking-widest text-xs border border-slate-100 hover:bg-white hover:border-blue-500 transition-all">
                      <interest.icon className="w-4 h-4 text-blue-700" />
                      {interest.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </PortfolioSection>
        {/* Contact Section */}
        <PortfolioSection id="contact" title="Contact" className="bg-slate-950 text-white relative overflow-hidden" titleClassName="text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1e40af_1.5px,transparent_1.5px)] [background-size:50px_50px]" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-slate-400 text-xl md:text-2xl mb-16 font-medium leading-relaxed">
              Seeking opportunities to innovate within the agricultural value chain. Let's start a conversation.
            </p>
            <div className="space-y-16">
              <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-slate-950 rounded-full px-16 h-20 text-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-6">
                  <Mail className="w-8 h-8" /> Message Me
                </a>
              </Button>
              <div className="flex justify-center gap-12">
                {contact.social.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-all hover:scale-125 hover:rotate-6"
                    aria-label={social.name}
                  >
                    <social.icon className="w-12 h-12" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </PortfolioSection>
      </main>
      <footer className="bg-slate-950 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-slate-500 text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-blue-900 transition-colors">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-slate-300">{contact.email}</span>
            </div>
            <div className="flex flex-col items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-blue-900 transition-colors">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-slate-300">{contact.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-blue-900 transition-colors">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <span className="max-w-[240px] text-pretty text-slate-300">{contact.address}</span>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">
              © {new Date().getFullYear()} {name} • {title}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}