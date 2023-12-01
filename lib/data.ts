import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Senior Full Stack Engineer @ Mbicycle",
    location: "Ann Arbor, MI",
    description:
      "I'm working as a senior full-stack developer at Mbicycle. My stack includes React, Next.js, TypeScript, Tailwind, Node.js, Golang, AWS, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - Present",
  },
  {
    title: "Software Engineer @ KW Works",
    location: "Ann Arbor, MI",
    description:
      "I worked as a mid-senior level software engineer at KW Works. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2019",
  },
  {
    title: "Junior Web Developer @ Money Forward",
    location: "Tokyo, Japan",
    description:
      "Worked as a junior developer and mainly worked with HTML, CSS, React for front end development.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
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
  "AWS",
  "Golang",
  "Three.js",
  "Git",
  "Tailwind",
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
