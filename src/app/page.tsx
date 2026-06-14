import Image from "next/image";
import { Layout } from "./components/Layout";
import developer from "../../public/images/developer.svg";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import Footer from "./components/Footer";

const techBadges = [
  "Python", "R", "Django", "PostgreSQL", "Next.js", "TypeScript",
];

export default function Home() {
  return (
    <>
      <div className="flex items-center text-dark min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex flex-row-reverse md:flex-col items-center justify-between w-full">
            <div className="w-1/2 md:w-full">
              <Image
                src={developer}
                alt="profile_pic"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="w-1/2 md:w-full flex flex-col items-start md:items-center self-center">
              <p className="text-sm font-semibold tracking-widest uppercase text-primary dark:text-primaryDark mb-3">
                Data Technician &amp; Full-Stack Developer
              </p>

              <AnimatedText
                text="Building Data Tools for Science"
                className="text-5xl font-bold text-left md:text-center md:text-4xl lg:text-4xl"
              />

              <p className="my-5 text-base font-medium text-dark/75 dark:text-light/75 leading-relaxed">
                I work at Fisheries and Oceans Canada designing data pipelines,
                database schemas, and web applications that make scientific data
                accessible. I build ETL tools in R Shiny, REST APIs in Django,
                and user-facing frontends in Next.js — connecting raw field data
                to the researchers who need it.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {techBadges.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full border border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/about"
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark px-6 py-2.5 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-colors"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center text-dark dark:text-light font-semibold underline underline-offset-4 hover:text-primary dark:hover:text-primaryDark transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <Footer />
    </>
  );
}
