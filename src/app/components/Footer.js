import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-dark/20 dark:border-light/20 font-medium">
      <div className="flex md:flex-col md:gap-3 bg-light dark:bg-dark px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6 py-6 items-center justify-between text-dark/60 dark:text-light/60 text-sm">
        <span>{new Date().getFullYear()} &copy; Zhipeng Wu. All Rights Reserved.</span>
        <span>
          Built with{" "}
          <span className="text-primary dark:text-primaryDark">♥</span>
          {" "}by{" "}
          <Link href="/" className="hover:text-primary dark:hover:text-primaryDark transition-colors font-semibold text-dark dark:text-light">
            Wu
          </Link>
        </span>
        <Link
          href="mailto:zhipengwu90@gmail.com"
          className="hover:text-primary dark:hover:text-primaryDark transition-colors"
        >
          zhipengwu90@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
