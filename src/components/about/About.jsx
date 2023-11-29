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
    <div className="dark:bg-black p-16 bg-[#CCCC99]">
      <div id="about" className="dark:text-white ">
        <div className=" text-center justify-center flex flex-col w-full pl-4 about__form-container">
          {/* <div className="xs:text-left">
            <div className="text-2xl">
              <h1 className="about__content-title">ABOUT ME</h1>
            </div>
            <div className="flex items-center justify-center xs:justify-start">
              <div className="w-10 rounded-full mt-6 mb-4 h-1 bg-black dark:bg-white"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eligendi repellendus iure sed deserunt officiis doloremque dolorem
              ullam dolor ipsum!
            </p>
          </div> */}

          <div className=" mt-24">
            <div className="flex xs:flex-col 56:flex-row xxxl:flex-col md:gap-10 64:gap-40 mb-8">
              <div className="grid justify-center max-w-md md:text-left">
                <h1 className="about__content-title md:text-left xs:text-left xl:text-left">
                  Get to know me!
                </h1>
                {/* <p className="text-left">
                  Hey! it&#39;s Ahmad Sheu and i&#39;m a Full-stack Developer
                  located in Ilorin, Nigeria. I&#39;ve built many stunning
                  looking and fully functional apps and websites. I&#39;m a tech
                  junkie and a curious being, i strive for coming closest to
                  perfection. I&#39;m always learning new stuff and satisfying
                  my many curiosities on the way. <br />
                  Feel free to contact me here
                </p> */}
                <p>
                  Hello, I&#39;m Ahmad Sheu, a passionate Full-stack Developer
                  based in Ilorin, Nigeria. With a proven track record of
                  creating stunning and fully functional apps and websites, I
                  bring a dynamic blend of creativity and technical expertise to
                  every project.
                </p>

                <p>
                  As a dedicated tech enthusiast, I am driven by the pursuit of
                  perfection. I thrive in the ever-evolving world of technology,
                  consistently learning and adapting to stay at the forefront of
                  industry trends. My journey is fueled by curiosity, leading me
                  to explore new technologies and methodologies to enhance my
                  skill set.
                </p>

                <p>
                  I take pride in crafting solutions that not only meet but
                  exceed expectations. From conceptualization to execution, I
                  ensure a seamless and innovative development process.
                </p>

                <p>
                  If you are seeking a versatile and ambitious Full-stack
                  Developer who is committed to delivering excellence, I would
                  love to connect. Feel free to reach out to me , and let&#39;s
                  discuss how I can contribute to your team&#39;s success.
                </p>

                <div className="items-start  justify-start flex mt-4">
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
                <div className="lg:grid lg:grid-rows-4 lg:grid-flow-col lg:gap-4 text-center items-center sm:flex flex-col">
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
