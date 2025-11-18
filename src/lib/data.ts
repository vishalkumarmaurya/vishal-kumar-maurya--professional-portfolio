import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Award,
  Rocket,
  Mail,
  Linkedin,
  Github,
  Crop,
  Bot,
  Cloud,
  BarChart,
} from "lucide-react";
export const portfolioData = {
  name: "Vishal Kumar Maurya",
  title: "Aspiring Agri-Tech Innovator",
  about:
    "A passionate and driven professional with a background in agriculture and a keen interest in leveraging technology to solve real-world challenges. I am dedicated to developing sustainable and efficient solutions for the agricultural sector, combining my domain knowledge with emerging technologies like IoT, AI, and data analytics.",
  contact: {
    email: "vishal.maurya@example.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vishal-kumar-maurya",
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
      role: "Agri-Tech Research Intern",
      company: "Innovate Agrotech Solutions",
      duration: "June 2023 - Aug 2023",
      description:
        "Contributed to a project on IoT-based crop monitoring systems. Developed and tested sensors for soil moisture and nutrient levels, leading to a 15% increase in data accuracy. Collaborated with a team of engineers and agronomists to analyze data and provide actionable insights to farmers.",
      icon: Briefcase,
    },
    {
      role: "Farm Operations Assistant",
      company: "Greenfield Farms",
      duration: "May 2022 - Aug 2022",
      description:
        "Assisted in daily farm operations, including planting, irrigation management, and harvesting. Gained hands-on experience with modern farming equipment and precision agriculture techniques, which helped in reducing water consumption by 10%.",
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Agricultural Engineering",
      institution: "National Institute of Agricultural Sciences",
      duration: "2020 - 2024",
      description:
        "Specialized in Precision Agriculture and Farm Machinery. Final year project focused on developing a low-cost drone for crop health monitoring using multispectral imaging.",
      icon: GraduationCap,
    },
  ],
  skills: [
    { name: "Precision Agriculture", icon: Crop },
    { name: "IoT & Sensor Networks", icon: Bot },
    { name: "Data Analysis (Python, R)", icon: BarChart },
    { name: "Cloud Platforms (AWS, Azure)", icon: Cloud },
    { name: "Machine Learning Concepts", icon: Lightbulb },
    { name: "Agronomy", icon: Crop },
  ],
  certifications: [
    {
      name: "Certified Crop Advisor (CCA)",
      issuer: "American Society of Agronomy",
      year: "2023",
      icon: Award,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award,
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
};
export const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];