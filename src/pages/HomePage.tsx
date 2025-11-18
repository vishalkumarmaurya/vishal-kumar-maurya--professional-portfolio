import React from "react";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { PortfolioSection } from "@/components/PortfolioSection";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
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
    projects,
    languages,
    interests,
  } = portfolioData;
  return (
    <div className="bg-portfolio-background font-sans text-portfolio-muted">
      <PortfolioHeader />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-display text-portfolio-primary animate-fade-in">
              {name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-portfolio-primary/80 animate-fade-in [animation-delay:300ms]">
              {title}
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in [animation-delay:600ms]">
              <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <a href={`mailto:${contact.email}`}>Contact Me</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <a href="/resume.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        </section>
        {/* About Section */}
        <PortfolioSection id="about" title="Career Objective">
          <p className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed text-gray-700">
            {careerObjective}
          </p>
        </PortfolioSection>
        {/* Work Experience Section */}
        <PortfolioSection id="experience" title="Work Experience">
          <div className="max-w-3xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
                    <div>
                      <CardTitle className="text-xl font-semibold text-portfolio-primary">{job.role}</CardTitle>
                      <p className="text-lg text-portfolio-primary/90">{job.company}</p>
                    </div>
                    <p className="text-sm text-portfolio-muted font-medium mt-2 sm:mt-0">{job.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Education Section */}
        <PortfolioSection id="education" title="Education">
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
                    <div>
                      <CardTitle className="text-xl font-semibold text-portfolio-primary">{edu.degree}</CardTitle>
                      <p className="text-lg text-portfolio-primary/90">{edu.institution}</p>
                    </div>
                    <p className="text-sm text-portfolio-muted font-medium mt-2 sm:mt-0">{edu.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Skills Section */}
        <PortfolioSection id="skills" title="Skills">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-center mb-6 text-portfolio-primary">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.technical.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                    <skill.icon className="w-5 h-5 mr-2" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-center mb-6 text-portfolio-primary">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.soft.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                    <skill.icon className="w-5 h-5 mr-2" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </PortfolioSection>
        {/* Projects Section */}
        <PortfolioSection id="projects" title="Projects">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-portfolio-primary flex items-center">
                    <project.icon className="w-6 h-6 mr-3 text-blue-800" />
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Certifications Section */}
        <PortfolioSection id="certifications" title="Certifications">
          <div className="max-w-3xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <cert.icon className="w-8 h-8 mr-4 text-blue-800" />
                  <div>
                    <p className="font-semibold text-portfolio-primary">{cert.name}</p>
                    <p className="text-sm text-portfolio-muted">{cert.issuer}{cert.year && ` - ${cert.year}`}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </PortfolioSection>
        {/* Languages & Interests Section */}
        <PortfolioSection id="languages-interests" title="Languages & Interests">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-center mb-6 text-portfolio-primary">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <Card key={lang.name} className="p-3">
                    <div className="flex items-center">
                      <lang.icon className="w-6 h-6 mr-3 text-blue-800" />
                      <p className="font-medium text-portfolio-primary">{lang.name} <span className="text-sm text-portfolio-muted">({lang.proficiency})</span></p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-center mb-6 text-portfolio-primary">Interests</h3>
              <div className="space-y-4">
                {interests.map((interest) => (
                  <Card key={interest.name} className="p-3">
                    <div className="flex items-center">
                      <interest.icon className="w-6 h-6 mr-3 text-pink-500" />
                      <p className="font-medium text-portfolio-primary">{interest.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </PortfolioSection>
        {/* Contact Section */}
        <PortfolioSection id="contact" title="Get In Touch">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team.
            </p>
            <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <a href={`mailto:${contact.email}`} className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Say Hello
              </a>
            </Button>
            <div className="flex justify-center gap-6 mt-8">
              {contact.social.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-800 transition-colors">
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </PortfolioSection>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <p className="mt-2 text-sm">{contact.email} | {contact.phone}</p>
          <p className="mt-2 text-sm">{contact.address}</p>
          <p className="mt-4 text-sm">Built with ❤️ at Cloudflare</p>
        </div>
      </footer>
    </div>
  );
}