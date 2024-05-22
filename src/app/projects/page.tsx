"use client";
import { Layout } from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import project1 from "../../../public/images/portfolio.png";
import { GithubIcon, IcRoundClose } from "../components/Icons";
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
        className=" w-full flex flex-row items-center justify-center
     rounded-2xl border border-solid border-dark dark:border-light p-11 bg-light dark:bg-dark relative"
      >
        <div className="absolute rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark " />
        <div className="flex gap-2 absolute right-2 top-3">
          {types.map((type, index) => (
            <span
              key={index}
              className={`font-medium text-sm ${
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
          className="w-1/2  overflow-hidden rounded-xl border border-solid border-dark dark:border-light"
        >
          <Image
            src={img}
            alt={title}
            className="h-auto w-full transition-transform duration-500 hover:scale-105  "
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <div className="text-4xl font-bold my-4 ">{title}</div>
          <div className="text-lg font-medium">{description}</div>

          <div className="flex flex-row items-center  gap-7 w-full mt-5">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                <GithubIcon className="w-10 h-10" />
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
  const filterRef = useRef<HTMLDivElement>(null);
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
      types: ["React Native"],
      img: project1,
      link: "link",
      github: "github",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setShowSkills(false);
    }
  };

  useEffect(() => {
    if (showSkills) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSkills]);
  return (
    <main className="w-full flex flex-col mb-16 justify-center items-center text-dark dark:text-light relative ">
      <Layout className="pt-16">
        <AnimatedText text="Projects" className="text-6xl font-bold mb-10" />
        <div className=" gap-3 mb-7  z-30 relative flex">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="text-lg font-medium"
          >
            Filter by Skills
          </button>
          {selectedSkills !== "All" && (
            <div className="flex  items-center gap-3 border border-solid border-dark dark:border-light px-4  rounded-2xl">
              <span className="text-lg font-medium ">{selectedSkills}</span>
              <IcRoundClose
                onClick={() => setSelectedSkills("All")}
                className="w-5 h-5 text-dark  dark:text-light
              cursor-pointer"
              />
            </div>
          )}
          {showSkills && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={filterRef}
              className="absolute flex flex-col z-50 bg-white p-5 top-10 rounded-md"
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
        <div className="grid grid-cols-6 gap-20">
          {projectsList.map((project, index) => {
            if (selectedSkills === "All") {
              return (
                <div key={index} className="col-span-6">
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
                  <div key={index} className="col-span-6">
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
