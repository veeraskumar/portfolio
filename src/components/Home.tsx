import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Myimg from "../assets/portfoloi.png";
import { Element, Link } from "react-scroll";

const Home = () => {
  return (
    <Element
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="md:text-7xl text-4xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate and dedicated Full Stack Developer, recently
            graduated with a B.E. in Computer Science and Engineering (Class of
            2024). As a fresher, I'm eager to apply my skills in real-world
            projects and grow in a dynamic tech environment.
          </p>
          <div>
            <Link to="Portfolio" smooth={true} duration={500}>
              <button className=" group flex items-center text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio{" "}
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Myimg}
            alt="img"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-sm"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;
