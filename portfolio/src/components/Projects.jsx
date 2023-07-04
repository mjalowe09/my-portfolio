import { useEffect, useState } from "react";
import { spring, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//component
import ProjectCard from "./ProjectCard";

//assets
import Guitar from "../assets/guitar.png";
import Controller from "../assets/game-console.png";
const Project = () => {
  const { ref, inView } = useInView({ threshold: 0.2 }, { once: true });
  const animation = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        once: true,
        transition: {
          delay: 0,
          duration: 1.8,
          type: "spring",
          bounce: 0.5,
        },
      });
      setAnimationTriggered(true);
    }
  }, [animation, inView, animationTriggered]);

  const project = {
    intro: "MY WORKS",
    head: "Projects",
    body:
      "Following are the projects that showcases my skills and experience through real-world examples of my work. " +
      "It reflects my ability to solve complex problems, work with different technnologies and manage projects efficiently.",
  };

  const hobbies = {
    intro: "WHAT I DO TO ENTERTAIN MYSELF",
    head: "Hobbies",
    body:
      "As a person that is somewhat in the middle of the introvert-extrovert spectrum. I enjoy doing this such as playing music," +
      " playing video games, playing sports, cooking and coding. I like to do explore things that are worth exploring for but at the same time, " +
      "I also enjoy just staying at home.",
  };

  const projects = [
    {
      name: "M3SA Insurance Company Website",
      desc: "A freelance web project that I'm currently creating for M3SA insurance company. This website is represents the company and is capable of handling clients requests and inquiries. TO be deployed soon.",
      image: "/src/assets/m3sa.png",
      language: ["Reactjs", "TailwindCSS", "Node", "MongoDB"],
      color: "blue",
    },
    {
      name: "Player Search App (Dominate.gg)",
      desc:
        "A independent project that I created for fun. This website allows users to fetch game data of players in " +
        "League of Legends such as In-game name (IGN), Match History and Player Rankings for educational purposes. It is currently buggy and in-development.",
      image: "/src/assets/dominateGG.png",
      language: ["HTML5", "CSS", "JavaScript", "BootStrap"],
      color: "red",
    },
    {
      name: "My Portfolio",
      desc:
        "My responsive personal portfolio that contains some informations and things about my life. this includes things such as my education," +
        "skills and work experience. ",
      image: "/src/assets/portfolioPic.png",
      language: ["HTML5", "JavaScript", "ReactJS", "TailwindCSS"],
      color: "blue",
    },
  ];

  return (
    <>
      <div className="text-white bg-black lg:px-10 pt-10 pb-16 md:pb-24">
        <motion.div
          ref={ref}
          className=" lg:flex flex-wrap justify-between"
          initial={{ opacity: 0, y: 200 }}
          animate={animation}
        >
          <div className="w-full lg:w-5/12 px-1 lg:pl-2 mx-auto">
            <div className="w-10/12 lg:w-full xl:w-10/12 mx-auto">
              <p className="text-xxs font-semibold">{hobbies.intro}</p>
              <h3 className="text-3xl font-extrabold pb-3">{hobbies.head}</h3>
              <p className="text-sm leading-5 pb-10">{hobbies.body}</p>
            </div>
            <div className="h-56 md:h-72 lg:h-96 w-10/12 mx-auto lg:w-full relative">
              <img
                className="absolute w-48 md:w-64 lg:w-72 top-0 sm:top-0 left-14 md:left-10"
                src={Guitar}
              ></img>
              <img
                className="absolute w-40 md:w-64 lg:w-52 top-10 sm:top-0 lg:top-20 left-1/2 sm:left-80 lg:left-1/2"
                src={Controller}
              ></img>
            </div>
          </div>
          <div id="works" className="w-full lg:w-5/12 px-1 lg:pl-2 mx-auto">
            <div className="w-10/12 lg:w-full xl:w-10/12 mx-auto">
              <p className="text-xxs font-semibold">{project.intro}</p>
              <h3 className="text-3xl font-extrabold pb-3">{project.head}</h3>
              <p className="text-sm leading-5 pb-10">{project.body}</p>
            </div>
            <div className="">
              <ProjectCard projects={projects} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Project;
