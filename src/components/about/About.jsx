import React from "react";
import "./about.css";
import { HashLink as Link } from "react-router-hash-link";
import { skills } from "../../data";

const ListOfSkills = ({ skills }) => {
  return (
    <div className="bg-slate-500 p-2 m-1 rounded-md shadow-lg">
      <a className="text-white text-xl">{skills}</a>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="h-screen about_bg text-center justify-center flex flex-col main-container"
      >
        <div className="text-2xl mt-8">
          <h1>ABOUT ME</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-10 rounded-full mt-6 mb-4 h-1 bg-black"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eligendi repellendus iure sed deserunt officiis doloremque dolorem
          ullam dolor ipsum!
        </p>
        <div className="mt-24">
          <div className="flex gap-40">
            <div className="grid justify-center max-w-md">
              <h1 className="about__content-title">Get to know me!</h1>
              <p className="md:text-left">
                Hey! it&#39;s Ahmad Sheu and i&#39;m a Full-stack Developer
                located in Ilorin, Nigeria. I&#39;ve built many stunning looking
                and fully functional apps and websites. I&#39;m a tech junkie
                and a curious being, i strive for coming closest to perfection.
                I&#39;m always learning new stuff and satisfying my many
                curiosities on the way. <br />
                Feel free to contact me here
              </p>
              <div>
                <Link
                  to="#contact"
                  smooth
                  className="items-center justify-center flex mt-4"
                >
                  <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                    Contact
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-center xl:hidden ">
                <div className="w-40  rounded-full mt-8 mb-4 h-1 bg-"></div>
              </div>
            </div>
            <div className="">
              <h3 className="about__content-title ">My Skills</h3>
              <div className="skills">
                {skills.map((e, i) => (
                  <ListOfSkills skills={e.skill} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
