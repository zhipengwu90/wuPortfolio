"use client";
import { Layout } from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import project1 from "../../../public/images/portfolio.png";
import useThemeSwitcher from "../components/hook/useThemeSwitcher";
import {
  BiGithub,
  IcRoundClose,
  MingcuteDownLine,
  MingcuteUpLine,
} from "../components/Icons";
import { motion } from "framer-motion";

interface Project {
  title: string;
  types: Array<string>; // Fix: Specify the type argument for the Array type.
  img: string | StaticImageData;
  link: string;
  github: string;
  description: string;
  selectedSkills: string;
}

const SkillArray = [
  "All",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "React Native",
  "Python",
];

const SingleProject: React.FC<Project> = ({
  title,
  types,
  img,
  link,
  github,
  description,
  selectedSkills,
}) => {
  return (
    <>
      <article
        className=" w-full flex flex-row md:flex-col md:px-3 md:py-3  md:pb-20  items-center justify-center
     rounded-2xl border border-solid border-dark dark:border-light p-11 bg-light dark:bg-dark relative"
      >
        <div className="absolute rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark " />
        <div className="flex gap-2 absolute right-3 top-3 md:md:top-auto  md:bottom-5 ">
          {types.map((type, index) => (
            <span
              key={index}
              className={`font-medium text-xs ${
                selectedSkills === type ? "text-primary" : ""
              }`}
            >
              {type}
            </span>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          className="w-1/2 md:w-full overflow-hidden rounded-xl border border-solid border-dark dark:border-light"
        >
          <Image
            src={img}
            alt={title}
            className="h-auto w-full transition-transform duration-500 hover:scale-105  "
          />
        </Link>
        <div className="w-1/2 md:w-full flex flex-col items-start justify-between pl-6 sm:pl-3 ">
          <div className="text-4xl font-bold my-4 ">{title}</div>
          <div className="text-lg font-medium">{description}</div>

          <div className="flex flex-row items-center justify-center  gap-7 w-full mt-5">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                <BiGithub className="w-10 h-10" />
              </Link>
            )}
            {link && (
              <Link
                href={link}
                className=" flex items-center bg-dark dark:bg-light text-light dark:text-dark p-1 px-3 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light"
              >
                Visit Project
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default function Projects() {
  const [showSkills, setShowSkills] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState<string>("All");

  const projectsList = [
    {
      title: "Project-1",
      types: ["Next.js", "TailwindCSS"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Project-2",
      types: ["TailwindCSS", "TypeScript"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Project-3",
      types: ["TailwindCSS"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Project-4",
      types: ["React Native"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Project-5",
      types: ["React Native", "Next.js", "TailwindCSS", "TypeScript"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
  ];

  return (
    <main className="w-full flex flex-col mb-16 justify-center items-center text-dark dark:text-light relative ">
      <Layout className="pt-16">
        <AnimatedText
          text="Projects"
          className="text-6xl font-bold mb-10 md:text-4xl"
        />
        <div className=" gap-3 mb-7  z-30 relative flex">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="text-lg font-medium flex items-center gap-1"
          >
            Filter by Skills
            {!showSkills ? (
              <MingcuteDownLine className="w-5 h-5" />
            ) : (
              <MingcuteUpLine className="w-5 h-5" />
            )}
          </button>
          {selectedSkills !== "All" && (
            <div className="flex  items-center gap-3 border border-solid border-dark dark:border-light px-4  rounded-2xl">
              <span className="text-lg font-medium text-primary ">
                {selectedSkills}
              </span>
              <IcRoundClose
                onClick={() => setSelectedSkills("All")}
                className="w-5 h-5 text-dark  dark:text-light
              cursor-pointer"
              />
            </div>
          )}
          {showSkills && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute flex flex-col z-50 bg-white p-5 top-9 rounded-md shadow-lg"
            >
              {SkillArray.map((skill, index) => (
                <button
                  key={index}
                  className={`font-medium text-lg hover:underline  ${
                    selectedSkills === skill ? "text-primary" : "text-dark "
                  }`}
                  onClick={() => {
                    setSelectedSkills(skill);
                    setShowSkills(false);
                  }}
                >
                  {skill}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        <div className="grid grid-cols-6 gap-20  ">
          {projectsList.map((project, index) => {
            if (selectedSkills === "All") {
              return (
                <div key={index} className="col-span-6 sm:col-span-5">
                  <SingleProject
                    title={project.title}
                    types={project.types}
                    img={project.img}
                    link={project.link}
                    github={project.github}
                    description={project.description}
                    selectedSkills={selectedSkills}
                  />
                </div>
              );
            } else {
              if (project.types.includes(selectedSkills)) {
                return (
                  <div key={index} className="col-span-6 sm:col-span-5">
                    <SingleProject
                      title={project.title}
                      types={project.types}
                      img={project.img}
                      link={project.link}
                      github={project.github}
                      description={project.description}
                      selectedSkills={selectedSkills}
                    />
                  </div>
                );
              }
            }
          })}
        </div>
      </Layout>
    </main>
  );
}
