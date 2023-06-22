import React from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div
      id="home"
      className=" home-hero bg-center bg-[#CCCC99] bg-no-repeat max-h- dark:bg-black dark:text-white"
    >
      <div>
        <div className="flex flex-col justify-center items-center welcome-section h-screen w-full z-50">
          <section className="home-hero__content flex flex-col text-center items-center">
            <div>
              <h1 className=" heading-primary ">
                HELLO, MY NAME IS SHEU AHMAD{" "}
              </h1>
              <p className="text-primary">A full-stack developer</p>
            </div>
            <div className="home-hero__cta">
              <Link to="#projects" smooth>
                <a className="btn btn--bg px-5 py-2.5 bg-green-800 text-white">
                  Projects
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
