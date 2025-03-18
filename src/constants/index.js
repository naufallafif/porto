import project1 from "../assets/projects/JIS.png";
import project2 from "../assets/projects/SADEWA.png";
import project3 from "../assets/projects/Ikadin.png";
import project4 from "../assets/projects/Inboxed.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ROLES = ["FrontEnd Developer", "System Analyst"];

export const HERO_CONTENT = `A passionate and detail-oriented Computer Science graduate from Mercu Buana 
University with a GPA of 3.62, possessing strong expertise in front-end 
development, system analysis, and data analysis. With a robust foundation in 
project management methodologies such as Scrum and SDLC, I excel at designing 
user-centric products, creating seamless user interfaces, and analyzing complex 
systems. Proficient in programming languages like PHP, Laravel, JavaScript, and 
React JS, coupled with hands-on experience in data visualization, machine 
learning algorithms, and database management (SQL, Oracle). Certified in Scrum, 
database design, and data science, I bring strong analytical thinking, problem
solving abilities, and collaborative skills to deliver efficient solutions across 
diverse technical roles.`;

export const TYPING_STRINGS = [
  "FrontEnd Developer",
  "System Analyst"
];



export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/naufallafif",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/naufallafif",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/naufallafif",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: FaXTwitter,
  },
];


export const ABOUT_TEXT = "I am a passionate and detail-oriented Computer Science graduate with a strong foundation in front-end development, system analysis, and data visualization. With hands-on experience in project management methodologies like Scrum and SDLC, I excel in designing user-centric applications and optimizing user experiences. My technical expertise includes PHP, Laravel, JavaScript, React JS, SQL, and Oracle, complemented by certifications in Scrum, database design, and data science. Throughout my career, I have contributed to various projects, including web application development, data visualization, and software system analysis. My internship experiences as a Front-End Developer at PT. Sentra Support Service and Inboxed.id have honed my problem-solving skills, teamwork, and adaptability in dynamic environments. Beyond my technical skills, I have actively participated in leadership roles, serving as the Head of Organization Development Division at HIMSISFO and leading various student and community initiatives. I am eager to apply my skills and continuously learn in a growth-oriented organization that values innovation and collaboration";
export const EXPERIENCES = [
  {
    year: "Jun 2023 - Oct 2023",
    role: "Frontend Developer as Internship",
    company: "Inboxed.id",
    description: `Translate design mockups and wireframes certification application into high-quality front-end code using using PHP, HTML, CSS, JavaScript, and Bootstrap. Optimize web applications for speed, scalability, and accessibility across platforms and devices. Collaborate with backend developers to define and implement APIs for data-driven functionalities. Use version control systems (like Git) to manage code and collaborate efficiently within teams. Participate in agile development processes, including daily stand-ups, sprint planning, and retrospectives to improve workflow and team communication.`,
    technologies: ["PhP","HTML", "CSS", "JS", "Bootstrap", "Laravel", "Agile Development"],
  },
  {
    year: "Jan 2023 - Jun 2023",
    role: "Frontend Developer as Internship",
    company: "PT. SENTRA SUPPORT SERVICE",
    description: `Develop and maintain responsive IKADIN application, with user-friendly web interfaces using PHP,Laravel, HTML, CSS, JavaScript, and Bootstrap. Collaborate with UI/UX designers to implement visually appealing and intuitive designs. Ensure cross-browser compatibility and optimize performance for seamless user experience. Integrate front-end code with back-end services and APIs. Troubleshoot and debug front-end issues to ensure smooth functionality. Participate in code reviews and contribute to improving development practices and standards. Stay updated with the latest front-end technologies and industry trends for continuous improvement.`,
    technologies: ["PhP","HTML", "CSS", "JS", "Bootstrap", "Laravel", "Agile Development"],
  },
  
];

export const PROJECTS = [
  {
    title: "Data Visualization",
    image: project1,
    description:
      "Student Value Data Visualization Using Google Looker - Jakarta Intercultural School.",
    technologies: ["Agile Methodologies", "Google Looker", "Black Box Testing", "Project Managment"],
  },

  {
    title: "Certification and Training Website ",
    image: project3,
    description:
      "IKADIN Registration: platform Indonesian Advocates Association (IKADIN) Certification and Training Website - PT. Sentra Support Service",
    technologies: ["Systems Analysis", "Agile Methodologies", "Project Management", "Php", "Laravel","Html", "CSS", "Laravel", "JS"],
  },
  {
    title: "Platfrom Education - Inboxed.id",
    image: project4,
    description:
      "A platform for  education certification program",
    technologies: ["Systems Analysis", "Agile Methodologies", "Project Management", "Php", "Laravel","Html", "CSS", "Laravel", "JS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
