import paddeaseImage from "../assets/projects/paddease.png";
import palikaImage from "../assets/projects/epalika.png";
import posImage from "../assets/projects/pos.png";
import hrImage from "../assets/projects/sajilohr.png";

export const projects = [
  {
    title: "PaddEase: AI-Powered Paddy Disease Detector",
    description:
      "A comprehensive mobile application for real-time paddy leaf disease detection using image analysis. Users can upload photos, receive immediate diagnoses, and track their detection history. Features secure user authentication, cloud storage for images, and a robust data logging system.",
    techUsed: ["Flutter", "Dart", "Python", "Figma"],
    githubLink: "https://github.com/sandesh101/PaddEase",
    image: paddeaseImage,
  },
  {
    title: "E-Palika",
    description:
      "A digital governance platform (e-Palika system) streamlining access to essential municipal services like citizenship and birth certificate registration. Features secure user accounts, form validation, document upload, and administrative dashboard for processing requests.",
    techUsed: ["Flutter", "Dart", "Firebase", "Figma", "Git"],
    githubLink: "https://github.com/sandesh101/E-Palika",
    image: palikaImage,
  },
  {
    title: "POS System",
    description:
      "Developed a robust Point-of-Sale (POS) application tailored for retail operations, enabling efficient transaction processing, inventory management, and real-time receipt generation and printing. Implemented features for product scanning, sales tracking, and end-of-day reporting, significantly streamlining checkout processes for a local company.",
    techUsed: ["Flutter", "Dart", "Hive", "Provider"],
    githubLink: "https://github.com/sandesh101/",
    image: posImage,
  },
  {
    title: "SajiloHR",
    description:
      "Designed and developed an intuitive HR Management System (HRMS) to streamline various human resource operations for an organization. Key modules include employee management, attendance tracking, leave request and approval workflows, payroll processing, and performance evaluation tools. Features multi-user roles (employee, manager, HR, admin) and secure data handling.",
    techUsed: ["Flutter", "Dart", "Figma", "Authentication"],
    githubLink: "https://github.com/sandesh101/",
    image: hrImage,
  },
];
