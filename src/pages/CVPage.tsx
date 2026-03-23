import React from "react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Printer, ArrowLeft } from "lucide-react";
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
  const formatUrl = (url: string) => {
    return url.replace(/^https?:\/\/(www\.)?/, "");
  };
  return (
    <div className="bg-slate-50 min-h-screen p-0 sm:p-12 print:p-0 print:bg-white font-sans">
      {/* Utility Navigation Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between px-4 sm:px-0 print:hidden">
        <Button asChild variant="ghost" className="text-slate-600 hover:bg-slate-200 font-bold uppercase tracking-widest text-xs">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back
          </Link>
        </Button>
        <Button onClick={handlePrint} className="bg-slate-950 text-white rounded-full hover:bg-slate-800 transition-all px-8 shadow-xl font-bold uppercase tracking-widest text-xs">
          <Printer className="w-4 h-4 mr-2" /> Print / Export
        </Button>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none p-8 sm:p-16 print:p-0 text-slate-900 border-t-[16px] border-slate-950">
        <header className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-950 pb-12 mb-12">
          <div className="flex-1 pr-6">
            <h1 className="text-5xl sm:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none">{name}</h1>
            <p className="text-xl sm:text-2xl text-blue-700 font-black mt-3 uppercase tracking-[0.15em]">{title}</p>
          </div>
          <div className="mt-8 md:mt-0 text-[13px] text-slate-700 space-y-2.5 md:text-right shrink-0">
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-slate-950">{contact.email}</span>
              <Mail size={16} className="text-slate-400 shrink-0" />
            </p>
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-slate-950">{contact.phone}</span>
              <Phone size={16} className="text-slate-400 shrink-0" />
            </p>
            <p className="flex items-center md:justify-end gap-3 text-right">
              <span className="font-bold text-slate-950 text-pretty max-w-[240px]">{contact.address}</span>
              <MapPin size={16} className="text-slate-400 shrink-0" />
            </p>
            <div className="flex flex-col md:items-end gap-2 pt-4">
              {contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center md:justify-end gap-3 text-xs font-black uppercase text-blue-700 hover:text-blue-900 transition-colors group"
                >
                  <span className="truncate max-w-[200px] border-b border-transparent group-hover:border-blue-700">{formatUrl(social.url)}</span>
                  <social.icon size={16} className="text-slate-400 group-hover:text-blue-700 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </header>
        <main className="space-y-12">
          <section className="print:break-inside-avoid">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Profile</h2>
            <p className="text-slate-800 leading-relaxed font-medium text-[15px] whitespace-pre-line">{careerObjective}</p>
          </section>
          <section>
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-8 border-b border-slate-100 pb-2">Experience</h2>
            <div className="space-y-10">
              {workExperience.map((job, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">{job.company}</h3>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest pt-1">{job.duration}</span>
                  </div>
                  <p className="text-md font-black text-blue-700 uppercase tracking-wider mb-4">{job.role}</p>
                  <p className="text-slate-700 leading-relaxed text-[14px] font-medium whitespace-pre-line">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-8 border-b border-slate-100 pb-2">Education</h2>
            <div className="space-y-10">
              {education.map((edu, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">{edu.institution}</h3>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest pt-1">{edu.duration}</span>
                  </div>
                  <p className="text-md font-black text-blue-700 uppercase tracking-wider mb-4">{edu.degree}</p>
                  <p className="text-slate-700 leading-relaxed text-[14px] font-medium whitespace-pre-line">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="print:break-inside-avoid">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Technical</h2>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-300 text-slate-950 font-black uppercase text-[10px] py-1 px-3">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
            <section className="print:break-inside-avoid">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-300 text-slate-950 font-black uppercase text-[10px] py-1 px-3">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
          <section className="print:break-inside-avoid">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 text-[13px] leading-tight group">
                  <div className="w-2 h-2 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    {cert.url ? (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-black text-slate-950 uppercase tracking-tight hover:text-blue-700 hover:underline transition-colors"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <span className="font-black text-slate-950 uppercase tracking-tight">{cert.name}</span>
                    )}
                    <span className="text-slate-500 font-bold block mt-1 uppercase text-[10px] tracking-widest">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="print:break-inside-avoid">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Research</h2>
            <div className="space-y-6">
              {researchAndPublications.map((pub, index) => (
                <div key={index} className="text-[14px]">
                  <p className="font-black text-slate-950 uppercase tracking-tight leading-snug">{pub.title}</p>
                  <p className="text-blue-700 uppercase text-[10px] font-black tracking-[0.3em] mt-2">{pub.journal}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="print:break-inside-avoid">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Languages</h2>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-sm flex justify-between items-center">
                    <span className="font-black text-slate-950 uppercase tracking-widest">{lang.name}</span>
                    <span className="text-slate-500 uppercase text-[10px] font-black">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="print:break-inside-avoid">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-6 border-b border-slate-100 pb-2">Interests</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {interests.map((interest) => (
                  <span key={interest.name} className="text-sm font-black text-slate-950 uppercase tracking-widest">
                    {interest.name}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
        <footer className="mt-20 pt-10 border-t border-slate-100 text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
          Professional CV • {name} • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}