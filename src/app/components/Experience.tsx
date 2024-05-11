import React from "react";

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
  return (
    <li className="my-8 first: mt-0 last:mb-0 w-[60%] mx-auto flexx flex-col items-center justify-center">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp; <a href={companyLink} className="text-primary"> @{company} </a>
        </h3>
        <span className="capitalize font-medium text-dark/65 dark:text-light/55">
          {time}|{address}
        </span>
        <p className="font-medium w-full"
         
        >{description}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64  dark:text-white">
      <h2 className="text-6xl font-bold text-center mt-44 w-full">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative ">
        <ul>
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
