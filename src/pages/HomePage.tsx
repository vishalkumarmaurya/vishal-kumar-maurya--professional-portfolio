import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { PortfolioSection } from "@/components/PortfolioSection";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Link as LinkIcon, FileText, Cpu, Users, Phone, MapPin } from "lucide-react";
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
  } = portfolioData;
  return (
    <div className="bg-portfolio-background font-sans text-portfolio-primary selection:bg-blue-100">
      <PortfolioHeader />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        >
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-slate-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-blue-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-full px-8">
                <a href={`mailto:${contact.email}`}>Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-full px-8">
                <RouterLink to="/cv">View Resume</RouterLink>
              </Button>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <PortfolioSection id="about" title="Career Objective" className="bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg md:text-xl leading-relaxed text-slate-700 font-normal">
              {careerObjective}
            </p>
          </div>
        </PortfolioSection>
        {/* Work Experience Section */}
        <PortfolioSection id="experience" title="Work Experience" className="bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <job.icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-900">{job.role}</CardTitle>
                        <p className="text-blue-600 font-semibold">{job.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-blue-200 text-blue-700 font-medium">
                      {job.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Education Section */}
        <PortfolioSection id="education" title="Academic Background" className="bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-100 py-4 last:pb-0">
                <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{edu.duration}</span>
                </div>
                <p className="text-lg text-slate-700 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </PortfolioSection>
        {/* Skills Section */}
        <PortfolioSection id="skills" title="Skills & Competencies" className="bg-slate-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft overflow-hidden">
              <div className="bg-blue-700 px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> Technical Skills
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-50 text-blue-800 border-none flex items-center gap-1">
                      <skill.icon className="w-3 h-3" />{skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-soft overflow-hidden">
              <div className="bg-emerald-600 px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5" /> Soft Skills
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm font-medium bg-emerald-50 text-emerald-800 border-none flex items-center gap-1">
                      <skill.icon className="w-3 h-3" />{skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </PortfolioSection>
        {/* Certifications Section */}
        <PortfolioSection id="certifications" title="Certifications" className="bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:border-blue-200 transition-colors shadow-none border border-slate-100">
                <CardContent className="p-5 flex flex-col h-full">
                  <cert.icon className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-slate-900 mb-1 leading-tight">{cert.name}</p>
                  <p className="text-xs text-slate-500 mt-auto pt-2">{cert.issuer} • {cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Research Section */}
        <PortfolioSection id="research" title="Research & Publications" className="bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-4">
            {researchAndPublications.map((pub, index) => (
              <Card key={index} className="border-none shadow-soft group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors h-fit">
                      <FileText className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="text-xl font-bold text-slate-900 leading-snug">{pub.title}</h4>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{pub.journal}</p>
                      <Button asChild variant="link" className="p-0 h-auto text-blue-700 font-bold hover:no-underline">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Access Resource <LinkIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Contact Section */}
        <PortfolioSection id="contact" title="Get In Touch" className="bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-400 text-lg mb-10">
              Interested in collaboration or professional opportunities? Feel free to reach out. I am always open to discussing innovations in Agri-Tech.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 text-lg transition-transform hover:scale-105 active:scale-95">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3">
                  <Mail className="w-5 h-5" /> Send an Email
                </a>
              </Button>
              <div className="flex gap-8 mt-4">
                {contact.social.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </PortfolioSection>
      </main>
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p className="text-sm tracking-widest uppercase mb-8 font-bold text-white">&copy; {new Date().getFullYear()} {name}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm">
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="font-medium">{contact.email}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="font-medium">{contact.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-pretty px-4">{contact.address}</span>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-4">
            <Button asChild variant="link" className="text-slate-500 hover:text-white text-xs">
              <RouterLink to="/cv">Download CV as PDF</RouterLink>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}