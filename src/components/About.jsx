import aboutMe from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl ">
        About
        <span className="text-neutral-400 "> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div>
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutMe} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <span className="flex max-w-screen-lg my-2 py-6 text-left font-thin" >{ABOUT_TEXT}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
