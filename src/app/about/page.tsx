"use client";
import { Layout } from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import about_me from "../../../public/images/about_me.png";
import { useRef, useEffect } from "react";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

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
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16 sm:px-2 min-h-screen">
        <AnimatedText className="text-6xl mb-10 lg:text-5xl" text="About Me" />
        <div className="grid grid-cols-8 gap-10 w-full">
          <div className="col-span-3  lg:col-span-5 md:col-span-8 flex flex-col items-center justify-center text-dark/75 dark:text-light ">
            <h1 className="self-start  text-lg font-bold uppercase mb-1">
              Biography
            </h1>
            <p className="my-4">
              I'm Wu, a full-stack developer dedicated to turning ambitious
              concepts into tangible digital solutions. With expertise in
              JavaScript, Swift, Next.js and a suite of cutting-edge
              technologies, I specialize in crafting immersive web applications
              that not only meet but exceed expectations.
            </p>
            <p>
              I have a strong passion for technology and a keen eye for detail.
              I am a quick learner who is always eager to take on new challenges
              and learn new things. I am a team player who is always willing to
              help others and share my knowledge with them.
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

          <div className="col-span-2  lg:col-span-8 lg:flex-row flex flex-col justify-between items-end  text-dark dark:text-light">
            <div className="flex flex-col items-end  lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold ">
                <AnimatedNumber value={10} />+
              </span>
              <h2>Projects</h2>
            </div>
            <div className="flex flex-col items-end lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold ">
                <AnimatedNumber value={10} />
              </span>
              <h2>Starts</h2>
            </div>
            <div className="flex flex-col items-end lg:items-center justify-center">
              <span className="inline-block text-6xl md:text-4xl font-bold ">
                <AnimatedNumber value={1} />+
              </span>
              <h2>Years of experience</h2>
            </div>
          </div>
        </div>
        {/* <Skills /> */}
        <Experience />
      </Layout>
    </main>
  );
}
