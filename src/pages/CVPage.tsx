import React from "react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Printer, ArrowLeft, ExternalLink } from "lucide-react";
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
    <div className="bg-slate-100 min-h-screen p-0 sm:p-8 print:p-0 print:bg-white">
      {/* Utility Navigation Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between px-4 sm:px-0 print:hidden">
        <Button asChild variant="ghost" className="text-slate-600 hover:bg-slate-200">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </Button>
        <Button onClick={handlePrint} className="bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors px-6 shadow-lg">
          <Printer className="w-4 h-4 mr-2" /> Print PDF
        </Button>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none p-8 sm:p-12 print:p-0 font-sans text-slate-800 border-t-[12px] border-slate-900 print:border-t-8">
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 pb-8 mb-8">
          <div className="flex-1 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">{name}</h1>
            <p className="text-xl sm:text-2xl text-blue-700 font-bold mt-2 uppercase tracking-widest">{title}</p>
          </div>
          <div className="mt-6 md:mt-0 text-[13px] text-slate-600 space-y-2 md:text-right shrink-0">
            <p className="flex items-center md:justify-end gap-2">
              <span className="font-semibold text-slate-900">{contact.email}</span>
              <Mail size={14} className="text-slate-400" />
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <span className="font-semibold text-slate-900">{contact.phone}</span>
              <Phone size={14} className="text-slate-400" />
            </p>
            <p className="flex items-center md:justify-end gap-2">
              <span className="font-semibold text-slate-900 text-pretty max-w-[220px]">{contact.address}</span>
              <MapPin size={14} className="text-slate-400 shrink-0" />
            </p>
            <div className="flex flex-col md:items-end gap-1.5 pt-2 w-full">
              {contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center md:justify-end gap-2 text-xs font-black uppercase text-blue-700 hover:text-blue-800 transition-colors group w-full"
                >
                  <span className="truncate max-w-[200px] print:max-w-none">{formatUrl(social.url)}</span>
                  <social.icon size={14} className="text-slate-400 group-hover:text-blue-700 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </header>
        <main className="space-y-10">
          <section className="print:break-inside-avoid">
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Career Objective</h2>
            <p className="text-slate-700 leading-relaxed font-normal whitespace-pre-line">{careerObjective}</p>
          </section>
          <section>
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <div className="flex justify-between items-start mb-1 gap-4">
                    <h3 className="text-lg font-black text-slate-900 leading-tight uppercase">{job.company}</h3>
                    <span className="text-[11px] font-black text-slate-500 uppercase shrink-0 pt-1">{job.duration}</span>
                  </div>
                  <p className="text-md font-bold text-blue-700 mb-2">{job.role}</p>
                  <p className="text-slate-600 leading-relaxed text-[13.5px] whitespace-pre-line">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-6 border-b border-slate-100 pb-2">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <div className="flex justify-between items-start mb-1 gap-4">
                    <h3 className="text-lg font-black text-slate-900 leading-tight uppercase">{edu.institution}</h3>
                    <span className="text-[11px] font-black text-slate-500 uppercase shrink-0 pt-1">{edu.duration}</span>
                  </div>
                  <p className="text-md font-bold text-blue-700 mb-2">{edu.degree}</p>
                  <p className="text-slate-600 leading-relaxed text-[13.5px] whitespace-pre-line">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Technical Proficiencies</h2>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-200 text-slate-700 font-bold uppercase text-[10px] py-1 px-3">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="border-slate-200 text-slate-700 font-bold uppercase text-[10px] py-1 px-3">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
          <section className="print:break-inside-avoid">
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2 text-sm leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="flex-1">
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                        <span className="font-bold text-slate-900 group-hover:text-blue-700">{cert.name}</span>
                        <ExternalLink size={10} className="text-slate-400 group-hover:text-blue-700 print:hidden" />
                      </a>
                    ) : (
                      <span className="font-bold text-slate-900">{cert.name}</span>
                    )}
                    <span className="text-slate-500 font-medium"> — {cert.issuer}{cert.year ? ` (${cert.year})` : ""}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="print:break-inside-avoid">
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Research & Publications</h2>
            <div className="space-y-5">
              {researchAndPublications.map((pub, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-blue-700 leading-snug flex-1 transition-colors group flex items-start gap-2"
                    >
                      <span className="flex-1">{pub.title}</span>
                      <ExternalLink size={12} className="text-slate-400 group-hover:text-blue-700 mt-1 shrink-0 print:hidden" />
                    </a>
                  </div>
                  <p className="text-slate-500 italic uppercase text-[10px] font-bold tracking-widest mt-1">{pub.journal}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Languages</h2>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-sm flex justify-between items-center">
                    <span className="font-bold text-slate-800">{lang.name}</span>
                    <span className="text-slate-500 uppercase text-[10px] font-black border-b border-slate-100">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Interests</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {interests.map((interest) => (
                  <span key={interest.name} className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="text-blue-600">•</span> {interest.name}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
        <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Generated Professional CV • {name} • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}