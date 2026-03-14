import React from "react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export function CVPage() {
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
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="bg-slate-100 min-h-screen p-0 sm:p-8 print:p-0 print:bg-white">
      {/* Utility Navigation Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between px-4 sm:px-0 print:hidden">
        <Button asChild variant="ghost" className="text-slate-600">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </Button>
        <Button onClick={handlePrint} className="bg-slate-900 text-white rounded-full">
          <Printer className="w-4 h-4 mr-2" /> Print PDF
        </Button>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none p-8 sm:p-12 print:p-0 font-sans text-slate-800 border-t-8 border-slate-900">
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 pb-8 mb-8">
          <div className="flex-1">
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{name}</h1>
            <p className="text-xl text-blue-700 font-bold mt-1 uppercase tracking-widest">{title}</p>
          </div>
          <div className="mt-6 md:mt-0 text-sm text-slate-600 space-y-2 md:text-right">
            <p className="flex items-center md:justify-end gap-2">
              <Mail size={14} className="text-slate-400" /> {contact.email}
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <Phone size={14} className="text-slate-400" /> {contact.phone}
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <MapPin size={14} className="text-slate-400" /> {contact.address}
            </p>
            <div className="flex items-center md:justify-end gap-4 pt-2">
              <span className="flex items-center gap-1 text-xs font-bold uppercase text-slate-400">
                <Linkedin size={14} /> linkedin.com/in/vishalkmaurya
              </span>
            </div>
          </div>
        </header>
        <main className="space-y-10">
          <section>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Career Objective</h2>
            <p className="text-slate-700 leading-relaxed font-medium">{careerObjective}</p>
          </section>
          <section>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="group print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                    <span className="text-xs font-black text-slate-400 uppercase">{job.duration}</span>
                  </div>
                  <p className="text-md font-bold text-blue-700 mb-3">{job.company}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <span className="text-xs font-black text-slate-400 uppercase">{edu.duration}</span>
                  </div>
                  <p className="text-md font-bold text-slate-700 mb-2">{edu.institution}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Technical Proficiencies</h2>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-200 text-slate-700 font-bold uppercase text-[10px] py-1">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-200 text-slate-700 font-bold uppercase text-[10px] py-1">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
          <section>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p><span className="font-bold text-slate-800">{cert.name}</span> <span className="text-slate-400">— {cert.issuer}</span></p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Research & Publications</h2>
            <div className="space-y-4">
              {researchAndPublications.map((pub, index) => (
                <div key={index} className="text-sm">
                  <p className="font-bold text-slate-800 mb-1">{pub.title}</p>
                  <p className="text-slate-500 italic uppercase text-[10px] tracking-wider">{pub.journal}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Languages</h2>
              <ul className="space-y-1">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-sm flex justify-between">
                    <span className="font-bold text-slate-800">{lang.name}</span>
                    <span className="text-slate-400 uppercase text-[10px] font-bold">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Interests</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {interests.map((interest) => (
                  <span key={interest.name} className="text-sm font-medium text-slate-700">• {interest.name}</span>
                ))}
              </div>
            </section>
          </div>
        </main>
        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
          Generated Professional CV • Vishal Kumar Maurya • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}