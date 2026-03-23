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
    "Motivated and detail-oriented undergraduate student pursuing a B.Sc. (Hons) in Agriculture at Bundelkhand University, Jhansi (Expected Graduation: Aug 2026). Dedicated to developing a strong foundation in agricultural science and technology. Seeking opportunities for internships and professional roles to gain field experience, enhance technical knowledge, and contribute to the agricultural sector’s growth.",
  contact: {
    phone: "+91 7991660085",
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
      duration: "2022 – 2026 (Expected)",
      description:
        "Engaged in experiential learning programs and agricultural extension activities. Active participant in NSS camp and field-based learning.",
      icon: GraduationCap,
    },
    {
      degree: "12th in Agriculture Science",
      institution: "Ramsurat Malati Intermediate College, Mirzapur",
      duration: "2020 – 2022",
      description:
        "U.P. State Board — Percentage: 74.70%. Specialized in agricultural subjects during higher secondary education.",
      icon: GraduationCap,
    },
    {
      degree: "10th in Science",
      institution: "Jansewa Intermediate College, Sonbhadra",
      duration: "2018 – 2020",
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
      { name: "Agricultural Research", icon: Cpu },
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
      issuer: "MANAGE (National Institute of Agricultural Extension Management)",
      year: "2024",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agriculture-fumigation-manage-activity-7337734066114334720-a-0X",
      icon: Award,
    },
    {
      name: "Course on Computer Concepts (CCC)",
      issuer: "NIELIT",
      year: "2024",
      url: "https://www.linkedin.com/posts/vishalkmaurya_course-on-computer-concepts-activity-7438583220033458177-0KBJ",
      icon: Award,
    },
    {
      name: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2022",
      url: "https://www.linkedin.com/posts/vishalkmaurya_google-certified-digital-marketing-activity-7003393067940495361-dd9q",
      icon: Award,
    },
    {
      name: "Agriculture 4.0: The Future of Farming Technology",
      issuer: "Just Agriculture Magazine",
      year: "2023",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agriculture-agripreneurship-futureoffarming-activity-7054733364754268160-IfYI",
      icon: Award,
    },
    {
      name: "Innovations in Agricultural Extension",
      issuer: "MANAGE",
      year: "2024",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agriculture-agriculturalextension-innovation-activity-7366763048734257153-sU2m",
      icon: Award,
    },
    {
      name: "Extension for Horticultural Technologies",
      issuer: "MANAGE & ICAR-NRCL",
      year: "2024",
      url: "https://www.linkedin.com/posts/vishalkmaurya_horticulture-agriculture-extensiontraining-activity-7223693793529671680-bt2A",
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
      name: "Agri Business Knowledge Series (AKS)",
      issuer: "ISAB",
      year: "2023",
      url: "https://www.linkedin.com/posts/vishalkmaurya_agribusiness-agriculture-isab-activity-7084884958292393985-doau",
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
    { name: "Hindi", proficiency: "Native/Bilingual", icon: Languages },
    { name: "English", proficiency: "Professional Working", icon: Languages },
    { name: "Bhojpuri", proficiency: "Native", icon: Languages },
  ],
  interests: [
    { name: "Sustainable Farming", icon: Heart },
    { name: "Tech Gadgets", icon: Heart },
    { name: "Rural Development", icon: Heart },
    { name: "Agriculture Extension", icon: Heart },
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