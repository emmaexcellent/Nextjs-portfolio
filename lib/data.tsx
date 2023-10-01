import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import libraryProject from "@/public/Capture.JPG";
import Engone from "@/public/Capture2.JPG";
import Excelcart from "@/public/Capture3.JPG";
import innoSummit from "@/public/Capture4.JPG";
import littleLemon from "@/public/Capture5.JPG";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "META Frontend Developer Professional Course",
    location: "COUSERA",
    description:
      "From this Meta course, I learnt the from basics of frontend developer (using HTML, CSS and Javascript) to the advance frontend developer using react (framework built  by Meta)",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "META Backend Developer Professional Course",
    location: "COUSERA",
    description:
      "Also from this course, I learnt the all the neccessary things in backend starting from the basics of PYTHON and other database managements. Then dive into APIs and using DJANGO Framework to develop APIs.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "FullStack Developer",
    location: "OOU Ibogun Campus",
    description:
      "I help group of students develop their School Library website project assigned to them. I was able to design and develop beautiful UI and help them manage the database using SQLite built in django. With the success of the amazing project, the students got excellent grade.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "AI Animal Recognition Project",
    location: "OOU Ibogun Campus",
    description:
      "As I increase in networking with students around, a group of students also surmoned me to help them with their project which Animal Recognition AI. With my Python knowledge, using tensorflow, I help them to train a model that could recognise if an image is an animal.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Project Supervisor",
    location: "Abeokuta ",
    description:
      "Also a team of students from a technical school surmoned me as a supervisor over their WebApp project. They're to develop an attendee webapp which can only function for students within their campus only. I was able to give clear insight of the project and help understand how they can succed in the project and I supervised each of the team members guiding through the best system till they are able to achieve their desired goal",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lagos, Nigeria",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, MySQL, GitHub, Django, Python, AI Modeling, AWS, Google Cloud and Security Analyst. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "School Library Website Project",
    description:
      "I worked as Fullstack on the project. Students are able to share their school materials within the website and can also access school materials available for them",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Django","Python","PostgreSQL"],
    imageUrl: libraryProject,
  },
  {
    title: "Engone: Engineering Student Community Website",
    description:
      "I also worked as the Backend developer on the project. I used python (django) to build backend functions. Students were able to ask question and get answer from experts in the their field. The provider of the correct answer get score. Students can follow and and unfollow and also get updates in their field. It's such a big project i develop the backend with addition to full security.",
    tags: ["DJANGO", "PYTHON", "DJANGO REST", "PostgreSQL", "Deployment"],
    imageUrl: Engone,
  },
  {
    title: "Functional Ecommerce Website",
    description:
      "It's a project i worked on to master my skills in web development. I developed the full functions with django and also work on the frontend. It's amazing project in which I learnt a lot of new skills from professionals and I apply them to achieve the success of the project.",
    tags: ["DJANGO", "PYTHON", "PostgreSQL", "MySQL", "SQLite","Git","Deployment","CSS","JavaScript"],
    imageUrl: Excelcart,
  },littleLemon
  {
    title: "The Innovative Summit Project",
    description:
      "I collaborated with a web developer also to design the website for the event. I contributed to the project frontend UI and also add SEO Optimization to the website to make rank 1st on google search for innovative events.",
    tags: ["HTML", "CSS", "JavaScript", "SEO","Git","Deployment"],
    imageUrl: innoSummit,
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "My final capstone project for the Meta fullstack course i took. Got a lot of experience from this project as I alone according the guide within the course did the project starting from designing in Figma, developing the frontend with React, backend API with DJANGO and Database with MySQL.",
    tags: ["REACTJS", "DJANGO", "MySQL", "Figma"],
    imageUrl: littleLemon,
  },       
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "AWS",
  "SEO",
  "Redux",
  "GraphQL",
  "REST API",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
