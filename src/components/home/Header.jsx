import React from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div
      id="home"
      className="w-full h-screen sm:h-32 bg-center bg-cover bg-bg_image home_hero bg-no-repeat relative"
    >
      <div className="darken-background">
        <div className="flex flex-col justify-center items-center welcome-section h-screen w-full z-50">
          <article className="">
            <div>
              <h1 className="text-6xl text-white header_primary">
                HELLO, MY NAME IS SHEU AHMAD{" "}
              </h1>
              <p className="mt-6">I am A full-stack developer</p>
            </div>
            <Link
              to="#projects"
              smooth
              className="items-center justify-center flex mt-4"
            >
              <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-900 text-white">
                Projects
              </button>
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Header;
