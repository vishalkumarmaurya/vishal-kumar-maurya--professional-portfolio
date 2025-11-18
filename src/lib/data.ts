import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Award,
  Rocket,
  Linkedin,
  Github,
  Languages,
  Heart,
  Cpu,
  Users,
  FileText,
} from "lucide-react";
export const portfolioData = {
  name: "Vishal Kumar Maurya",
  title: "Aspiring Agri-Tech Innovator",
  careerObjective:
    "Motivated and detail-oriented undergraduate student pursuing a B.Sc. (Hons) in Agriculture at Bundelkhand University, Jhansi. Dedicated to developing a strong foundation in agricultural science and technology. Seeking opportunities for internships and professional roles to gain field experience, enhance technical knowledge, and contribute to the agricultural sector’s growth.",
  contact: {
    phone: "7991660085",
    email: "vishalkumarmaurya913@gmail.com",
    address: "Vill. Madhupur, Jhaparī, Sonbhadra, Uttar Pradesh, India",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vishalkmaurya",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/vishalkmaurya",
        icon: Github,
      },
    ],
  },
  workExperience: [
    {
      role: "Agricultural Subsidies Intern",
      company: "Indian Chamber of Food and Agriculture (ICFA)",
      duration: "Mar 2024 – May 2024",
      description:
        "Conducted research on agricultural subsidy programs and related government policies. Developed understanding of food and agriculture sector frameworks. Gained experience in report writing and virtual teamwork.",
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: "Bachelor of Science (Hons) in Agriculture",
      institution: "Bundelkhand University, Jhansi",
      duration: "Aug 2022 – Aug 2026",
      description:
        "Engaged in experiential learning programs and agricultural extension activities. Active participant in NSS camp and field-based learning.",
      icon: GraduationCap,
    },
    {
      degree: "12th in Agriculture Science",
      institution: "Ramsurat Malati Intermediate College, Mirzapur",
      duration: "Apr 2020 – Mar 2022",
      description:
        "U.P. State Board — Percentage: 74.7%. Specialized in agricultural subjects during higher secondary education.",
      icon: GraduationCap,
    },
    {
      degree: "10th in Science",
      institution: "Jansewa Intermediate College, Sonbhadra",
      duration: "Apr 2018 – Mar 2020",
      description:
        "U.P. State Board — Percentage: 77%. Developed a strong foundation in science and computer studies.",
      icon: GraduationCap,
    },
  ],
  skills: {
    technical: [
      { name: "Microsoft Office Suite", icon: Cpu },
      { name: "Computer Concepts (CCC)", icon: Cpu },
      { name: "Digital Marketing Basics", icon: Cpu },
    ],
    soft: [
      { name: "Effective Communication", icon: Users },
      { name: "Team Collaboration", icon: Users },
      { name: "Leadership", icon: Users },
      { name: "Work Ethic & Time Management", icon: Users },
    ],
  },
  certifications: [
    {
      name: "Course on Computer Concepts (CCC)",
      issuer: "NIELIT",
      year: "",
      icon: Award,
    },
    {
      name: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "",
      icon: Award,
    },
    {
      name: "Agriculture 4.0: The Future of Farming Technology",
      issuer: "Just Agriculture Magazine",
      year: "",
      icon: Award,
    },
    {
      name: "Innovations in Agricultural Extension: Integrating Research, Policy and Practices",
      issuer: "National Institute of Agricultural Extension Management (MANAGE)",
      year: "",
      icon: Award,
    },
    {
      name: "Extension for Horticultural Technologies",
      issuer: "National Institute of Agricultural Extension Management (MANAGE), Hyderabad in collaboration with ICAR-National Research Centre on Litchi, Muzaffarpur, Bihar",
      year: "",
      icon: Award,
    },
    {
      name: "Sugarcane based Agri-Startup Ecosystem",
      issuer: "ICAR-SUGARCANE BREEDING INSTITUTE SugarcaneEdge®, Agri business Incubation Centre (ABI) Coimbatore- 641 007",
      year: "",
      icon: Award,
    },
    {
      name: "AGRI BUSINESS KNOWLEDGE SERIES (AKS) 2023",
      issuer: "IMPERIAL SCHOOL OF AGRI BUSINESS (ISAB)",
      year: "",
      icon: Award,
    },
  ],
  researchAndPublications: [
    {
      title: "Integrating Multi-Omics Approaches to Uncover Disease Resistance Mechanisms in Underutilized Crops",
      journal: "ResearchGate",
      url: "https://doi.org/10.13140/RG.2.2.32849.60004",
      icon: FileText,
    },
    {
      title: "Digital Agriculture for Smallholder Farmers: Practical Approaches, Challenges, and Success Stories in India",
      journal: "Amazon (Book)",
      url: "https://a.co/d/1ykFknS",
      icon: FileText,
    },
  ],
  projects: [
    {
      name: "Smart Irrigation System",
      description:
        "An IoT-based system that uses real-time soil moisture data to automate irrigation, conserving water and improving crop yield. The system includes a web dashboard for remote monitoring and control.",
      tags: ["IoT", "Python", "React", "AWS"],
      icon: Rocket,
    },
    {
      name: "Pest Detection using AI",
      description:
        "A machine learning model trained to identify common crop pests from images. The model was deployed as a mobile application to assist farmers in early pest detection and management.",
      tags: ["Machine Learning", "TensorFlow", "Android"],
      icon: Rocket,
    },
  ],
  languages: [
    { name: "Hindi", proficiency: "Fluent", icon: Languages },
    { name: "English", proficiency: "Proficient", icon: Languages },
    { name: "Bhojpuri", proficiency: "Native", icon: Languages },
  ],
  interests: [
    { name: "Travel (Domestic & International)", icon: Heart },
    { name: "Video Games", icon: Heart },
    { name: "Skydiving", icon: Heart },
  ],
};
export const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Research", to: "research" },
  { name: "Contact", to: "contact" },
];