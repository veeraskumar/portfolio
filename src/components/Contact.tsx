import { Element } from "react-scroll";

const Contact = () => {
  const styleClassForInput: string =
    "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none";
  return (
    <Element
      name="Contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">
            {" "}
            Feel free to reach out by submitting the form below — I’ll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/aejeojxb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className={styleClassForInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Mail"
              className={styleClassForInput}
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              rows={10}
              className={styleClassForInput}
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
