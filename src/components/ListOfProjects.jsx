import { Link } from "react-router-dom";

const ListOfProjects = ({ photo, text, link, code }) => {
  return (
    <div className="px-5 py-5 pb-11">
      <div className="">
        <img
          src={photo}
          alt="projects"
          className="rounded-xl object-cover  w-80 h-35"
        />

        <div className="">
          <div className="">
            <p className="text-red-500 text-3xl mt-2">{text}</p>

            <div className="flex gap-4 ">
              <div className="hover:translate-y-2 transition-transform duration-300 ease-out">
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  smooth
                  className="flex mt-4"
                >
                  <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                    LIVE
                  </button>
                </Link>
              </div>
              <div className="hover:translate-y-2 transition-transform duration-300 ease-out">
                <Link
                  to={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  smooth
                  className="flex mt-4"
                >
                  <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                    CODE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfProjects;
