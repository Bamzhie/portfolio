import React from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div
      id="home"
      className=" home-hero bg-center bg-cover bg-bg_image bg-no-repeat "
    >
      <div>
        <div className="flex flex-col justify-center items-center welcome-section h-screen w-full z-50">
          <article className="">
            <div>
              <h1 className=" text-white heading-primary ">
                HELLO, MY NAME IS SHEU AHMAD{" "}
              </h1>
              <p className="text-primary">I am A full-stack developer</p>
            </div>
            <div>
              <Link
                to="#projects"
                smooth
                className="items-center justify-center flex mt-4"
              >
                <button className="btn btn--bg bg-green-800 text-white">
                  Projects
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Header;
