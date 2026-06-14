"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon, IcRoundClose } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import useThemeSwitcher from "./hook/useThemeSwitcher";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

interface CustomMobileLinkProps {
  href: string;
  title: string;
  onToggle: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group hover:text-primary dark:hover:text-primaryDark transition-colors`}>
      {title}
      <span
        className={`absolute inline-block h-[2px] bg-dark dark:bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 group-hover:bg-primary dark:group-hover:bg-primaryDark
        ${pathname === href ? "w-full bg-primary dark:bg-primaryDark" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({ href, title, onToggle }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className="relative group text-light dark:text-dark text-2xl font-semibold my-3 hover:text-primary dark:hover:text-primaryDark transition-colors"
      onClick={onToggle}
    >
      {title}
      <span
        className={`absolute inline-block h-[2px] bg-light dark:bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 group-hover:bg-primary dark:group-hover:bg-primaryDark
        ${pathname === href ? "w-full bg-primary dark:bg-primaryDark" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar: React.FC = () => {
  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-32 py-8 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6 font-medium flex items-center justify-between dark:text-light relative z-10">

      {/* Hamburger */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`} />
      </button>

      {/* Centered Logo */}
      <div className="absolute left-[50%] top-2 lg:top-0 translate-x-[-50%]">
        <Logo />
      </div>

      {/* Desktop nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-6">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/about" title="About" />
        </nav>

        <nav className="flex items-center gap-3">
          <motion.a
            href="https://github.com/zhipengwu90"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/zhipengwu90"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            className={`ml-1 flex items-center justify-center rounded-full p-1 w-6 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-dark/90 dark:bg-light/90 rounded-2xl shadow-2xl p-8 backdrop-blur-lg py-16"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5"
              aria-label="Close menu"
            >
              <IcRoundClose className="w-7 h-7 text-light dark:text-dark" />
            </button>

            <nav className="flex flex-col justify-center items-center">
              <CustomMobileLink href="/" title="Home" onToggle={() => setIsOpen(false)} />
              <CustomMobileLink href="/projects" title="Projects" onToggle={() => setIsOpen(false)} />
              <CustomMobileLink href="/about" title="About" onToggle={() => setIsOpen(false)} />
            </nav>

            <nav className="flex items-center justify-center gap-6 mt-8">
              <a href="https://github.com/zhipengwu90" target="_blank" className="w-9" onClick={() => setIsOpen(false)}>
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/zhipengwu90" target="_blank" className="w-9" onClick={() => setIsOpen(false)}>
                <LinkedInIcon />
              </a>
              <button
                className={`flex items-center justify-center rounded-full p-1 w-9 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
                onClick={() => { setMode(mode === "light" ? "dark" : "light"); setIsOpen(false); }}
                aria-label="Toggle theme"
              >
                {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
