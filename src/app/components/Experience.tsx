"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  description: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first: mt-0 last:mb-0 w-[60%] md:w-[90%]    mx-auto flex flex-col items-center justify-center"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-lg ">
          {position} &nbsp;
          <a href={companyLink} className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/65 dark:text-light/55">
          {time}|{address}
        </span>
        <p className="font-medium w-full md:text-sm">{description}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:mt-7 md:mb-28 dark:text-white">
      <h2 className="text-6xl font-bold text-center my-44 w-full md:text-4xl md:my-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] md:w-[85%]  mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 md:left-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark  "
        />
        <ul className="md:ml-4">
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
          <Details
            position="Full Stack Developer"
            company="Google"
            companyLink="https://www.google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            description="Developed and maintained web applications using React, Node.js, and MongoDB."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
