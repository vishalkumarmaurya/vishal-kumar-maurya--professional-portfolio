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
  Link as LinkIcon,
  Cpu,
  Users,
  Phone,
  MapPin,
  Languages,
  Heart,
  ArrowRight,
  ExternalLink,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="bg-portfolio-background font-sans text-portfolio-primary selection:bg-blue-200 selection:text-blue-900 min-h-screen antialiased">
      <PortfolioHeader />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 border-b border-blue-100/50"
        >
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200"
            >
              Agriculture • Innovation • Technology
            </motion.div>
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-slate-900 tracking-tight leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="mt-8 text-xl md:text-3xl text-blue-800 font-medium max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {title}
            </motion.p>
            <motion.div
              className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white shadow-xl hover:shadow-blue-200 transition-all duration-300 rounded-full h-14 px-10 text-lg">
                <a href={`mailto:${contact.email}`}>Contact Me</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 rounded-full h-14 px-10 text-lg group">
                <RouterLink to="/cv" className="flex items-center gap-2">
                  Professional CV <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </RouterLink>
              </Button>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <PortfolioSection id="about" title="Career Objective" className="bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg md:text-xl leading-relaxed text-slate-700 font-normal whitespace-pre-line tracking-tight">
              {careerObjective}
            </p>
          </div>
        </PortfolioSection>
        {/* Work Experience Section */}
        <PortfolioSection id="experience" title="Experience" className="bg-blue-50/50">
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-lg transition-all duration-500 overflow-hidden group">
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-700 rounded-2xl shrink-0 shadow-lg shadow-blue-100">
                        <job.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900">{job.company}</CardTitle>
                        <p className="text-lg text-blue-700 font-semibold mt-1">{job.role}</p>
                        <Badge variant="secondary" className="mt-3 bg-blue-100 text-blue-800 border-none font-bold uppercase text-[10px] tracking-widest px-3 py-1">
                          {job.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 relative z-10">
                  <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-6 whitespace-pre-line text-lg">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Education Section */}
        <PortfolioSection id="education" title="Academic Path" className="bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-10 border-l-4 border-blue-100 py-2 last:pb-0 group">
                <div className="absolute left-[-14px] top-6 w-6 h-6 rounded-full bg-white border-4 border-blue-700 shadow-md group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{edu.institution}</h3>
                <p className="text-lg text-blue-700 font-semibold mb-2">{edu.degree}</p>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{edu.duration}</p>
                <p className="text-slate-600 leading-relaxed max-w-2xl text-lg">{edu.description}</p>
              </div>
            ))}
          </div>
        </PortfolioSection>
        {/* Skills Section */}
        <PortfolioSection id="skills" title="Skills & Competencies" className="bg-slate-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Technical Expertise", icon: Cpu, items: skills.technical, color: "bg-blue-700" },
              { title: "Interpersonal Skills", icon: Users, items: skills.soft, color: "bg-emerald-600" }
            ].map((skillGroup, idx) => (
              <Card key={idx} className="border-none shadow-soft overflow-hidden group hover:shadow-xl transition-shadow duration-500">
                <div className={`${skillGroup.color} px-8 py-5 flex items-center justify-between`}>
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <skillGroup.icon className="w-6 h-6" /> {skillGroup.title}
                  </h3>
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-white border border-slate-100 text-slate-700 shadow-sm hover:border-blue-200 transition-colors cursor-default">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Certifications Section */}
        <PortfolioSection id="certifications" title="Certifications" className="bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:border-blue-200 transition-all duration-300 shadow-none border border-slate-100 flex flex-col h-full hover:shadow-lg">
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <cert.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 leading-tight flex-1 text-lg">{cert.name}</h4>
                  <div className="mt-4 pt-4 border-t border-slate-50">
                    <p className="text-sm font-medium text-slate-500">{cert.issuer}</p>
                    {cert.url && (
                      <Button asChild variant="link" className="p-0 h-auto text-xs font-bold text-blue-700 mt-2 hover:no-underline">
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          Verify Credential <LinkIcon className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Research Section */}
        <PortfolioSection id="research" title="Research" className="bg-blue-900 text-white" titleClassName="text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {researchAndPublications.map((pub, index) => (
              <Card key={index} className="bg-white/5 border border-white/10 shadow-none group hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-xl md:text-2xl font-bold leading-snug">{pub.title}</h4>
                      <p className="text-blue-300 font-bold tracking-widest uppercase text-xs">{pub.journal}</p>
                      <Button asChild variant="link" className="p-0 h-auto text-blue-400 font-bold hover:no-underline hover:text-white transition-colors">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          View Publication <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Languages & Interests */}
        <PortfolioSection id="personal" title="Personal Details" className="bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-none shadow-soft bg-indigo-50/30 overflow-hidden">
              <CardHeader className="bg-indigo-700 text-white">
                <CardTitle className="text-lg flex items-center gap-2"><Languages className="w-5 h-5" /> Languages</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between group">
                    <span className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{lang.name}</span>
                    <Badge variant="outline" className="text-indigo-700 border-indigo-200 font-bold uppercase text-[10px] tracking-widest">
                      {lang.proficiency}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-none shadow-soft bg-rose-50/30 overflow-hidden">
              <CardHeader className="bg-rose-600 text-white">
                <CardTitle className="text-lg flex items-center gap-2"><Heart className="w-5 h-5" /> Interests</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <div key={interest.name} className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-rose-100 shadow-sm hover:scale-105 transition-transform cursor-default">
                      <interest.icon className="w-4 h-4 text-rose-500" />
                      <span className="text-sm font-bold text-slate-800">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </PortfolioSection>
        {/* Contact Section */}
        <PortfolioSection id="contact" title="Get In Touch" className="bg-slate-950 text-white relative overflow-hidden" titleClassName="text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-slate-400 text-xl mb-12">
              Open to collaborative innovations in agricultural technology and rural development.
            </p>
            <div className="space-y-12">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-16 h-16 text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4">
                  <Mail className="w-6 h-6" /> Send Message
                </a>
              </Button>
              <div className="flex justify-center gap-10">
                {contact.social.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-all hover:scale-125 hover:rotate-6"
                    aria-label={social.name}
                  >
                    <social.icon className="w-10 h-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </PortfolioSection>
      </main>
      <footer className="bg-slate-950 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-slate-400 text-sm font-medium">
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-700/20 transition-colors">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <span>{contact.email}</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-700/20 transition-colors">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <span>{contact.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-blue-700/20 transition-colors">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <span className="max-w-[200px]">{contact.address}</span>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">
              © {new Date().getFullYear()} {name} • All Rights Reserved
            </p>
            <Button asChild variant="link" className="text-blue-500 hover:text-white transition-colors">
              <RouterLink to="/cv" className="flex items-center gap-2">
                Download Professional Dossier <ArrowRight size={14} />
              </RouterLink>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}