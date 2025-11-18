import React from "react";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Printer } from "lucide-react";
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
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 sm:p-12 print:shadow-none print:p-8 font-sans text-gray-800">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-gray-200 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
            <p className="text-xl text-gray-600 mt-1">{title}</p>
          </div>
          <div className="text-sm text-gray-600 mt-4 sm:mt-0 sm:text-right space-y-1">
            <a href={`mailto:${contact.email}`} className="flex items-center justify-start sm:justify-end gap-2 hover:text-blue-600">
              <Mail size={14} /> {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center justify-start sm:justify-end gap-2 hover:text-blue-600">
              <Phone size={14} /> {contact.phone}
            </a>
            <p className="flex items-center justify-start sm:justify-end gap-2">
              <MapPin size={14} /> {contact.address}
            </p>
            <div className="flex items-center justify-start sm:justify-end gap-4 pt-1">
              <a href={contact.social.find(s => s.name === "LinkedIn")?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={contact.social.find(s => s.name === "GitHub")?.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </header>
        <main className="mt-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Career Objective</h2>
            <p className="text-gray-700 leading-relaxed">{careerObjective}</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                    <p className="text-sm text-gray-500">{job.duration}</p>
                  </div>
                  <p className="text-md font-medium text-gray-700">{job.company}</p>
                  <p className="text-gray-700 mt-2 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                  </div>
                  <p className="text-md font-medium text-gray-700">{edu.institution}</p>
                  <p className="text-gray-700 mt-2 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-blue-100 text-blue-800 font-medium">{skill.name}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-green-100 text-green-800 font-medium">{skill.name}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Certifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800">{cert.name}</span> - {cert.issuer}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Research and Publication</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {researchAndPublications.map((pub, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800">{pub.title}</span> - <span className="italic">{pub.journal}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">Languages & Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Languages</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {languages.map((lang) => (
                    <li key={lang.name}>{lang.name} ({lang.proficiency})</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interests</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {interests.map((interest) => (
                    <li key={interest.name}>{interest.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="fixed bottom-8 right-8 print:hidden">
        <Button onClick={handlePrint} size="lg" className="bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <Printer className="w-5 h-5 mr-2" /> Print CV
        </Button>
      </div>
    </div>
  );
}