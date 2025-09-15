import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

interface socialRefType {
  id: number;
  child: ReactNode;
  href: string;
  style?: string;
  download?: boolean;
}

export const socialRef: socialRefType[] = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://linkedin.com/in/veeraskumar",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/veeraskumar",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:veeraskumar.k.r@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "https://docs.google.com/document/d/1y92STgPqk_IPmFO0dIsDdgJuKTY9oeamH0e9GulJ6G8/edit?usp=drivesdk",
    style: "rounded-br-md",
    download: true,
  },
];

const SocialLinks = () => {
  const getAriaLabel = (url: string): string => {
    if (url.includes("linkedin")) return "LinkedIn";
    if (url.includes("github")) return "GitHub";
    if (url.includes("mailto")) return "Email";
    if (url.includes(".pdf") || url === "") return "Resume";
    return "Social";
  };

  return (
    <div className={"hidden lg:flex flex-col top-[35%] left-0 fixed"}>
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
  );
};

export default SocialLinks;
