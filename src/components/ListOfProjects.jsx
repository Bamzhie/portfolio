import { Link } from "react-router-dom";

const ListOfProjects = ({ photo, text, link }) => {
  return (
    <div className="px-5 py-5 pb-11">
      <div className="">
        <Link to={link} target="_blank" rel="noopener noreferrer">
          <img
            src={photo}
            alt="projects"
            className="rounded-xl object-cover cursor-pointer w-80 h-35"
          />
        </Link>

        <div className="">
          <div className="">
            <p className="text-red-500 text-3xl mt-2">{text}</p>

            <div className="flex gap-4">
              <Link to="#contact" smooth className="flex mt-4">
                <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                  LIVE
                </button>
              </Link>
              <Link to="#contact" smooth className="flex mt-4">
                <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                  CODE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfProjects;
