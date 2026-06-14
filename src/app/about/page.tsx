"use client";
import { Layout } from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import about_me from "../../../public/images/about_me.svg";
import { useRef, useEffect } from "react";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        (ref.current as HTMLSpanElement).textContent = latestValue.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16 sm:px-2 min-h-screen">
        <AnimatedText className="text-6xl mb-10 lg:text-5xl" text="About Me" />
        <div className="grid grid-cols-8 gap-10 w-full">
          <div className="col-span-3  lg:col-span-5 md:col-span-8 flex flex-col items-center justify-center text-dark/75 dark:text-light ">
            <h1 className="self-start  text-lg font-bold uppercase mb-1">
              Biography
            </h1>
            <p className="my-4">
              I'm Wu, a Data Technician at Fisheries and Oceans Canada (DFO)
              and a full-stack developer. I build data pipelines, database
              systems, and web applications that turn complex scientific data
              into accessible tools for researchers and analysts. My current
              work spans R Shiny ETL tools, Django/PostgreSQL APIs, and
              Next.js frontends — all in support of salmon population and
              genetic data management.
            </p>
            <p>
              I have a strong passion for technology and a keen eye for detail.
              I enjoy bridging the gap between data engineering and user-facing
              software — making it easier for domain experts to work with
              their data without needing to be developers themselves.
            </p>
          </div>
          <div className="col-span-3 md:hidden relative h-max rounded-2xl border-2 border-solid border-dark bg-light ">
            <div className="absolute rounded-[2rem] top-0 -right-3 -z-10 w-[103%] h-[104%] bg-dark " />
            <Image
              src={about_me}
              alt="about_me"
              className="w-full h-auto rounded-2xl "
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="col-span-2 lg:col-span-8 lg:flex-row flex flex-col justify-between items-end text-dark dark:text-light">
            <div className="flex flex-col items-end lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold">
                <AnimatedNumber value={20} />+
              </span>
              <h2 className="text-sm font-medium text-dark/60 dark:text-light/60 mt-1">Projects</h2>
            </div>
            <div className="flex flex-col items-end lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold">
                <AnimatedNumber value={3} />+
              </span>
              <h2 className="text-sm font-medium text-dark/60 dark:text-light/60 mt-1">Years at DFO</h2>
            </div>
            <div className="flex flex-col items-end lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold">
                <AnimatedNumber value={5} />+
              </span>
              <h2 className="text-sm font-medium text-dark/60 dark:text-light/60 mt-1">Technologies</h2>
            </div>
          </div>
        </div>
        {/* <Skills /> */}
        <Experience />
      </Layout>
    </main>
    <Footer />
    </>
  );
}
