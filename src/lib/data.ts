import {
  Briefcase,
  GraduationCap,
  Award,
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
        url: "https://github.com/vishalkumarmaurya",
        icon: Github,
      },
    ],
  },
  workExperience: [
    {
      role: "Rural Agriculture / Awareness Work Experience",
      company: "Bundelkhand University Jhansi Institute of Agricultural Sciences",
      duration: "Aug 2025 – Dec 2025 (6 months)",
      description:
        "Allotted to Village Deli Block Babina Jhansi (U.P). Conducted rural agriculture awareness programs with local farming communities. Shared modern agricultural practices, sustainable techniques, and government schemes. Gained practical field experience in community outreach, education, and agricultural extension services.",
      icon: Briefcase,
    },
    {
      role: "Summer Internship",
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
      name: "Fumigation of Agricultural Commodities",
      issuer: "National Institute of Agricultural Extension Management (MANAGE)",
      year: "",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agriculture-fumigation-manage-activity-7337734066114334720-a-0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWkm8oBahQJbqnDTcQT6cd6gf75jNcrom4",
      icon: Award,
    },
    {
      name: "Course on Computer Concepts (CCC)",
      issuer: "NIELIT",
      year: "2023",
      icon: Award,
    },
    {
      name: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2023",
      icon: Award,
    },
    {
      name: "Agriculture 4.0: The Future of Farming Technology",
      issuer: "Just Agriculture Magazine",
      year: "2023",
      icon: Award,
    },
    {
      name: "Innovations in Agricultural Extension: Integrating Research, Policy and Practices",
      issuer: "National Institute of Agricultural Extension Management (MANAGE)",
      year: "2023",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agriculture-agriculturalextension-innovation-activity-7366763048734257153-sU2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWkm8oBahQJbqnDTcQT6cd6gf75jNcrom4",
      icon: Award,
    },
    {
      name: "Extension for Horticultural Technologies",
      issuer: "National Institute of Agricultural Extension Management (MANAGE) in collaboration with ICAR-National Research Centre on Litchi (NRCL), Muzaffarpur, Bihar",
      year: "2024",
      url: "https://www.linkedin.com/posts/vishalkmaurya_horticulture-agriculture-extensiontraining-activity-7223693793529671680-bt2A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWkm8oBahQJbqnDTcQT6cd6gf75jNcrom4",
      icon: Award,
    },
    {
      name: "Sugarcane based Agri-Startup Ecosystem",
      issuer: "ICAR-SBI Coimbatore",
      year: "2025",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agritech-sugarcaneecosystem-sustainability-activity-7295385007693471744-Vqke",
      icon: Award,
    },
    {
      name: "AGRI BUSINESS KNOWLEDGE SERIES (AKS) 2023",
      issuer: "ISAB",
      year: "2023",
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
      journal: "Amazon (Book Contribution)",
      url: "https://a.co/d/1ykFknS",
      icon: FileText,
    },
  ],
  languages: [
    { name: "Hindi", proficiency: "Fluent", icon: Languages },
    { name: "English", proficiency: "Proficient", icon: Languages },
    { name: "Bhojpuri", proficiency: "Native", icon: Languages },
  ],
  interests: [
    { name: "Travel & Exploration", icon: Heart },
    { name: "Gaming", icon: Heart },
    { name: "Adventure Sports", icon: Heart },
  ],
};
export const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Certifications", to: "certifications" },
  { name: "Research", to: "research" },
  { name: "Personal", to: "personal" },
  { name: "Contact", to: "contact" },
];