import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      name="About"
      className="w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex  flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="md:text-xl md:mt-20">
          I am a recent graduate with a Bachelor of Engineering in Computer
          Science and Engineering (Class of 2024), and an aspiring Full Stack
          Developer with a strong passion for building modern, responsive web
          applications. I have hands-on experience working with technologies
          such as React, Node.js, Express, MongoDB, TypeScript, and Tailwind
          CSS.
          <br />
          <br />
          During my academic journey, I completed several personal and academic
          projects that strengthened my skills in both frontend and backend
          development. I am a quick learner, enthusiastic about problem-solving,
          and eager to contribute to collaborative development teams. As a
          fresher, I am looking forward to launching my professional career and
          continuously growing as a developer in the software industry.
        </p>
      </div>
    </Element>
  );
};

export default About;
