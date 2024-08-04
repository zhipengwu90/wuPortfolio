import Image from "next/image";
import { Layout } from "./components/Layout";
import developer from "../../public/images/developer.png";
import AnimatedText from "./components/AnimatedText";
import background_pic from "../../public/images/background_pic.png";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex items-center text-dark min-h-screen dark:text-light">
      <Layout className="pt-0 ">
        <div className="flex flex-row-reverse md:flex-col item-center justify-between w-full">
        <div className="w-1/2 md:w-full ">
            <Image
              src={developer}
              alt="profile_pic"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 md:w-full flex flex-col items-center self-center">
            <AnimatedText
              text="Transforming Challenges into Triumphs "
              className="text-6xl font-bold text-left md:text-center md:text-4xl lg:text-5xl "
            />

            <p className=" my-4 text-base font-medium">
              I'm Wu, a full-stack developer dedicated to turning ambitious
              concepts into tangible digital solutions. With expertise in
              JavaScript, Swift, Next.js and a suite of cutting-edge
              technologies, I specialize in crafting immersive web applications
              that not only meet but exceed expectations.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/about"
                className=" flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg tex-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light"
              >
                Know Me
              </Link>

              <Link
                className="underline ml-4 text-lg font-medium capitalize text-dark  hover:text-red-500 dark:text-light hover:dark:text-red-500"
                href="mailto: zhipengwu90@gmail.com"
              >
                Contact
              </Link>
            </div>
          </div>
    
        </div>
      </Layout>
      {/* <div className="absolute left-[20%] bottom-10 inline-block w-40">
        <Image
          src={background_pic}
          alt="background_image"
          className="w-full h-auto"
        />
      </div> */}
    </div>
  );
}
