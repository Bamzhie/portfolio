import "./project.css";
import { projects } from "../../data";
import ListOfProjects from "../ListOfProjects";

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
                  about={e.about}
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
