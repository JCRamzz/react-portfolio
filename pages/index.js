import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import devjc from "../public/dev-jc2.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import firechatSC from "../public/firechatSC.png";
import spoonfulSC from "../public/spoonfulSC.png";
import fyyurSC from "../public/FyyurSC.png";
import swaggerSC from "../public/swaggerSC.png";
import TypingEffect from "react-typing-effect"; // Import the TypingEffect component

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Firechat",
      description: `Firechat is a chat application built with React and Firebase. 
        It allows users to sign in with Google authentication and send messages in real-time.`,
      liveDemoLink: "https://firechat-1955a.web.app/",
      githubRepoLink: "https://github.com/JCRamzz/Firechat",
      imageSrc: firechatSC,
    },
    {
      title: "Spoonful",
      description: `Spoonful is a recipe search web app built using React, Vite, and Edamam API. 
        It allows users to easily search for recipes by entering the name of a dish or an ingredient.
        Users can view detailed information about each recipe, and save their favorites to their account`,
      liveDemoLink: "#", // Add the actual live demo link here
      githubRepoLink: "https://github.com/JCRamzz/Spoonful",
      imageSrc: spoonfulSC,
    },
    {
      title: "Fyyur",
      description: `Fyyur is a full-stack project built with the Python framework Flask and SQLalchemy.
      Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.
      The user is able to list new artists and venues, or list shows with artists as a venue owner.
      as a venue owner`,
      liveDemoLink: "#", // Add the actual live demo link here
      githubRepoLink: "https://github.com/JCRamzz/Fyyur",
      imageSrc: fyyurSC,
    },
    {
      title: "Weather App",
      description: `This simple Web Service Application was built with Flask and uses Swagger as a UI.
      A user is able to make an account and log in, then search for the weather by entering their zip code.`,
      liveDemoLink: "#", // Add the actual live demo link here
      githubRepoLink: "https://github.com/JCRamzz/Web-Service",
      imageSrc: swaggerSC,
    },
    // Add more projects as needed
  ];

  return (
    <div className={`h-screen ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-gray-900">
        <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
          <section>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl">devbyjc</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://drive.google.com/file/d/11J7BJi17QkpsW7DhpYSkGH1MPj-mZSfJ/view?usp=drive_link"
                    download="JuanRamirezResume.pdf"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                {"<"}
                <TypingEffect
                  text="Juancarlos Ramirez" // Add the text you want to be typed here
                  speed={120} // Adjust the typing speed as needed
                />
                {" />"}
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Web Developer, Designer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                I offer freelance services for programming and design content
                needs. Feel free to connect with me below and let's start
                working together right away!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <div className="flex gap-16 items-center">
                  <a
                    href="https://github.com/JCRamzz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a href="mailto:jcramz1992@gmail.com">
                    <AiFillMail />
                  </a>
                </div>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={devjc} layout="fill" objectFit="cover" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                With over 8 years of experience in retail management at HEB and
                5 years in Software development My passion lies in web
                development technologies, particularly React, where I creatively
                solve problems and craft user-centric solutions. Fluent in
                English and Spanish, I foster seamless communication and thrive
                in delivering cutting-edge, user-focused web solutions.
              </p>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                These are some of my personal projects
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="flex-1">
                  <Image
                    className="rounded-lg object-cover w-full h-full"
                    src={project.imageSrc}
                    layout="responsive"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer" // Added this attribute for security reasons
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md hover:from-cyan-400 hover:to-teal-400"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubRepoLink}
                        target="_blank"
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
