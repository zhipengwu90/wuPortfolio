"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import myLogo from "../../../public/images/Logo.png";
import { motion } from "framer-motion";

// const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <motion.div
        whileHover={{ scale: 1.4, transition: { duration: 0.5 } }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 , rotate: 720}}
        transition={{ease: "easeOut", duration: 0.5}}
      >
        <Link href="/" className="">
          <Image src={myLogo} alt="logo" width={70} height={70} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;
