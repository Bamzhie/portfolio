import React from "react";
import "./about.css";
import { HashLink as Link } from "react-router-hash-link";
import { skills } from "../../data";

const ListOfSkills = ({ skills }) => {
  return (
    <div className="p-2 m-1 bg-slate-500 rounded-md shadow-lg">
      <a className="text-white text-xl">{skills}</a>
    </div>
  );
};

const About = () => {
  return (
    <div className="dark:bg-black p-16 bg-[#CCCC99]">
      <div id="about" className="dark:text-white ">
        <div className="text-center justify-center flex flex-col w-full pl-4 about__form-container">
          <div className=" mt-24">
            <div className="64:flex 64:flex-row 64:gap-14">
              <div className="grid justify-center 64:max-w-md md:text-center">
                <h1 className="about__content-title  md:text-center xs:text-left xl:text-left">
                  {/* text-center p-4 text-5xl */}
                  Get to know me!
                </h1>

                <p className="text-left">
                  Hello, I&#39;m Ahmad Sheu, a passionate Full-stack Developer
                  based in Ilorin, Nigeria. With a proven track record of
                  creating stunning and fully functional apps and websites, I
                  bring a dynamic blend of creativity and technical expertise to
                  every project.
                </p>

                <p className="text-left">
                  As a dedicated tech enthusiast, I am driven by the pursuit of
                  perfection. I thrive in the ever-evolving world of technology,
                  consistently learning and adapting to stay at the forefront of
                  industry trends. My journey is fueled by curiosity, leading me
                  to explore new technologies and methodologies to enhance my
                  skill set.
                </p>

                <p className="text-left">
                  I take pride in crafting solutions that not only meet but
                  exceed expectations. From conceptualization to execution, I
                  ensure a seamless and innovative development process.
                </p>

                <p className="text-left">
                  If you are seeking a versatile and ambitious Full-stack
                  Developer who is committed to delivering excellence, I would
                  love to connect. Feel free to reach out to me , and let&#39;s
                  discuss how I can contribute to your team&#39;s success.
                </p>

                <div className="items-start  justify-start flex mt-4 hover:translate-y-2 transition-transform duration-300 ease-out">
                  <Link to="#contact" smooth>
                    <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center xl:hidden ">
                <div className="w-40  rounded-full mt-8 mb-4 h-1 bg-"></div>
              </div>
              <div className="md:text-left xs:text-left xl:text-left">
                <h3 className="about__content-title ">My Skills</h3>
                <div className="lg:flex lg:flex-wrap lg:gap-4 text-center items-center  sm:grid grid-cols-2 gap-4 ">
                  {skills.map((e, i) => (
                    <ListOfSkills skills={e.skill} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
