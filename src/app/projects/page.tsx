"use client";
import { Layout } from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData, } from "next/image";
import project1 from "../../../public/images/portfolio.png";
import projectData from "../data/projectData.json";
import {
  BiGithub,
  IcRoundClose,
  MingcuteDownLine,
  MingcuteUpLine,
  IonLogoAppleAppstore
} from "../components/Icons";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

interface Project {
  title: string;
  types: Array<string>;
  img: string | StaticImageData;
  link: string;
  github: string;
  description: string;
  selectedSkills: string;
  appStore?: string;
  internal?: boolean;
  inProgress?: boolean;
}

const SkillArray = [
  "All",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "React Native",
  "Python",
  "Django",
  "PostgreSQL",
  "Supabase",
  "R",
  "R-Shiny",
  "Oracle",
  "AI",
  "OCR",
  "Firebase",
  "OpenAI",
  "Web Design",
  "WordPress",
  "PHP",
  "Node.js",
  "Express.js",
];

const SingleProject: React.FC<Project> = ({
  title,
  types,
  img,
  link,
  github,
  description,
  selectedSkills,
  appStore,
  internal,
  inProgress,
}) => {
  const imageEl = (
    <Image
      src={`/images/${img}`}
      width={500}
      height={500}
      alt={title}
      className="h-auto w-full transition-transform duration-500 hover:scale-105"
    />
  );

  return (
    <article
      className="w-full flex flex-row md:flex-col md:px-3 md:py-3 md:pb-20 items-center justify-center
       rounded-2xl border border-solid border-dark dark:border-light p-11 bg-light dark:bg-dark relative"
    >
      <div className="absolute rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark" />

      {/* Type tags */}
      <div className="flex gap-2 absolute right-3 top-3 md:top-auto md:bottom-5 flex-wrap justify-end max-w-[40%]">
        {types.map((type, index) => (
          <span
            key={index}
            className={`font-medium text-xs ${selectedSkills === type ? "text-primary dark:text-primaryDark" : ""}`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Image — not a link when internal */}
      <div className="w-1/2 md:w-full overflow-hidden rounded-xl border border-solid border-dark dark:border-light">
        {link ? (
          <Link href={link} target="_blank">{imageEl}</Link>
        ) : (
          imageEl
        )}
      </div>

      <div className="w-1/2 md:w-full flex flex-col items-start justify-between pl-6 sm:pl-3">
        <div className="flex items-center gap-3 mt-0 mb-2 flex-wrap">
          {internal && (
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-dark/10 dark:bg-light/10 border border-dark/20 dark:border-light/20">
              🔒 Government / Internal
            </span>
          )}
          {inProgress && (
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primaryDark/20 border border-primaryDark/50 text-primaryDark">
              ⚙ In Progress
            </span>
          )}
        </div>

        <div className="text-3xl font-bold mb-3">{title}</div>
        <div className="text-base font-medium text-dark/80 dark:text-light/80 leading-relaxed">{description}</div>

        <div className="flex flex-row items-center gap-5 w-full mt-5">
          {github && (
            <Link href={github} target="_blank" className="hover:text-primary dark:hover:text-primaryDark transition-colors">
              <BiGithub className="w-10 h-10" />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-1 px-3 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-colors"
            >
              Visit Project
            </Link>
          )}
          {appStore && (
            <Link
              href={appStore}
              className="flex items-center gap-2 bg-dark dark:bg-light text-light dark:text-dark p-1 px-3 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-colors"
            >
              <IonLogoAppleAppstore className="w-8 h-8" />
              App Store
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const [showSkills, setShowSkills] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState<string>("All");

  return (
    <>
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
              <span className="text-lg font-medium text-primary md:text-sm ">
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
          {projectData.map((project, index) => {
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
                    appStore={project.appStore}
                    internal={project.internal}
                    inProgress={project.inProgress}
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
                      appStore={project.appStore}
                    />
                  </div>
                );
              }
            }
          })}
        </div>
      </Layout>
    </main>
    <Footer />
    </>
  );
}
