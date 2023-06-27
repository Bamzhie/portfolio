import "./project.css";
import { projects } from "../../data";
import { HashLink as Link } from "react-router-hash-link";

const ListOfProjects = ({ photo, text, link }) => {
  return (
    <div className="px-5 py-5 pb-11">
      <div className="flex xs:flex-col 56:flex-row xxxl:flex-col md:gap-10 64:gap-20">
        <div>
          <img
            src={photo}
            onClick={() => window.open(link, "_blank")}
            alt="projects"
            className="rounded-xl w-40 h-35 64:w-96 64:h-96 "
          />
        </div>

        <div className="">
          <div className="">
            <p className="text-red-500 text-3xl mt-2">{text}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              sit.
            </p>
            <div>
              <Link to="#contact" smooth className="flex mt-4">
                <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                  CASE STUDY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div
      id="projects"
      className="bg-[#CCCC99] dark:bg-black dark:text-white  flex flex-col main-container px-8"
    >
      <div className="project_bg about_bg justify-center flex flex-col">
        <div className="pl-2 flex flex-col project-container">
          <h3 className="text-center p-4 text-5xl">Projects</h3>
          <div className="flex items-center justify-center">
            <div className="w-10 rounded-full mt-6 mb-4 h-1 bg-black"></div>
          </div>
          <div className="">
            <div className="">
              {projects.map((e, i) => (
                <ListOfProjects
                  link={e.link}
                  photo={e.photo}
                  text={e.text}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
