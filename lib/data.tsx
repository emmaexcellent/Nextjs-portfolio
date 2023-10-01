import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
