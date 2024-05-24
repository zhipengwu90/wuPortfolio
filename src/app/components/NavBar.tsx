"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useThemeSwitcher from "./hook/useThemeSwitcher";
import { IcRoundClose } from "./Icons";

const NavBar: React.FC = () => {
  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
  }

  interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    onToggle: () => void;
  }
  const pathname = usePathname();

  const CustomLink: React.FC<CustomLinkProps> = ({
    href,
    title,
    className,
  }) => {
    return (
      <Link
        href={href}
        className={`${className} relative group hover:text-red-500`}
      >
        {title}

        <span
          className={`absolute inline-block h-[2px] bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 group-hover:bg-red-500 dark:bg-light
        ${pathname === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
    href,
    title,
    className,
    onToggle,
  }) => {
    return (
      <Link
        href={href}
        className={`${className} relative group md:text-xl hover:text-red-500 my-4`}
        onClick={() => {
          onToggle();
        }}
      >
        {title}

        <span
          className={`absolute inline-block h-[2px] bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 group-hover:bg-red-500 dark:bg-dark
        ${pathname === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  return (
    <header className="w-full px-32 py-8  xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6    font-medium flex items-center justify-between dark:text-light relative">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleToggle}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="absolute left-[50%] top-2 lg:top-0 translate-x-[-50%]">
        <Logo />
      </div>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/about" title="About" className="ml-4" />
        </nav>
   
        <nav className="flex item-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/zhipengwu90"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-3 w-6"
            onClick={() => setIsOpen(false)}
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/zhipengwu90"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-3 w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            className={`ml-2 flex item-center justify-center rounded-full p-1  w-6 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/90 text-light dark:text-dark rounded-lg shadow-lg p-8  
      backdrop-blur-lg py-32 
      "
        >
          <IcRoundClose
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 text-dark  dark:text-light
              cursor-pointer
              absolute top-5 right-5"
          />
          <nav className="flex flex-col justify-center items-center my-4">
            <CustomMobileLink href="/" title="Home" onToggle={handleToggle} />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              onToggle={handleToggle}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              onToggle={handleToggle}
            />
          </nav>
          <nav className="flex item-center justify-center flex-wrap">
            <a
              href="https://github.com/zhipengwu90"
              target={"_blank"}
              className="mr-6 w-9"
              onClick={() => setIsOpen(false)}
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/zhipengwu90"
              target={"_blank"}
              className="mr-6 w-9"
              onClick={() => setIsOpen(false)}
            >
              <LinkedInIcon />
            </a>
            <button
              className={` flex item-center justify-center rounded-full p-1  w-9 ${
                mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
                setIsOpen(false);
              }}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
