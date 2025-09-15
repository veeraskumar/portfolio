import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { socialRef } from "./SocialLinks";

interface LinksTpes {
  id: number;
  link: string;
}

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links: LinksTpes[] = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  const getAriaLabel = (url: string): string => {
    if (url.includes("linkedin")) return "LinkedIn";
    if (url.includes("github")) return "GitHub";
    if (url.includes("mailto")) return "Email";
    if (url.includes(".pdf") || url === "") return "Resume";
    return "Social";
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div className="font-signatureName text-5xl ml-2">VeerasKumar</div>
      <ul className="hidden md:flex ">
        {links.map((link) => (
          <li
            className="px-4  cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            key={link.id}
          >
            <Link to={link.link} smooth={true} duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-500 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105"
            >
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                {link.link}
              </Link>
            </li>
          ))}
          <div className={"flex flex-col top-[35%] left-0 fixed"}>
            <ul>
              {socialRef.map((list) => (
                <li
                  className={
                    "flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-gray-700" +
                    " " +
                    list.style
                  }
                  key={list.id}
                >
                  <a
                    href={list.href}
                    className="flex justify-between items-center text-white w-full"
                    download={list.download}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit my ${getAriaLabel(list.href)} page`}
                  >
                    {list.child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
