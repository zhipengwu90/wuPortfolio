"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useThemeSwitcher from "./hook/useThemeSwitcher";

const NavBar: React.FC = () => {
  const { mode, setMode } = useThemeSwitcher();

  interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
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
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/about" title="About" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex item-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/zhipengwu90"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 w-6"
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
    </header>
  );
};

export default NavBar;
