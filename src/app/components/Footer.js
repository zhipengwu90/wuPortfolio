import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
      <div
        className={
          "flex md:flex-col z-0  bg-light dark:text-light  dark:bg-dark px-32  xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6  py-8 items-center justify-between"
        }
      >
        <span> {new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex item-center">
          <span>Build by </span>
          <span className="text-primary text-xl px-1">&#9825; </span>
          <Link href="/" className="hover:text-red-500">
            Wu
          </Link>
        </div>

        <Link
          href="mailto: zhipengwu90@gmail.com"
          className="hover:text-red-500"
        >
          Contact Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
