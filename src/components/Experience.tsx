import { Element } from "react-scroll";
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import Html from "../assets/html.png";
import Java from "../assets/java.png";
import Js from "../assets/javascript.png";
import Nextjs from "../assets/nextjs.png";
import Python from "../assets/python.png";
import Reactjs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/typescript.png";

interface IconType {
  id: number;
  src: string;
  title: string;
  style: string;
}

const Experience = () => {
  const iconList: IconType[] = [
    {
      id: 1,
      src: Css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: Html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: Java,
      title: "Java",
      style: "shadow-yellow-900",
    },
    {
      id: 5,
      src: Js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: Nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-orange-900",
    },
    {
      id: 8,
      src: Reactjs,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: Tailwind,
      title: "Tailwind Css",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-sky-900",
    },
  ];
  return (
    <Element
      name="Experience"
      className="bg-gradient-to-b from-slate-800 to-black w-full h-fit"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've Learned with </p>
        </div>
        <div className="w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {iconList.map((icon) => (
            <div
              className={
                "shadow-md hover:scale-110 duration-500 py-2 rounded-lg" +
                " " +
                icon.style
              }
              key={icon.id}
            >
              <img
                src={icon.src}
                alt={icon.title + ".png"}
                className="w-14 mx-auto"
              />
              <p className="mt-4">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
