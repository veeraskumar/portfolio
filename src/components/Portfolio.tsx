import { Element } from "react-scroll";
import Pokemon from "../assets/portfolio/pokemon.png";

interface PortfolioType {
  id: number;
  src: string;
  linkForPreview: string;
  linkForCode: string;
}

const Portfolio = () => {
  const protfolioList: PortfolioType[] = [
    {
      id: 1,
      src: Pokemon,
      linkForPreview: "https://veeraskumar.netlify.app/",
      linkForCode:
        "https://github.com/veeraskumar/Pokemon/blob/main/index.html",
    },
  ];
  return (
    <Element
      name="Portfolio"
      className="bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {protfolioList.map(({ id, src, linkForPreview, linkForCode }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg" key={id}>
              <img
                src={src}
                alt="weather-img.png"
                className="rounded-lg duration-200 hover:scale-105"
              />
              <div className="flex justify-around items-center">
                <a
                  href={linkForPreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={linkForCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
