import { useState, useEffect } from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import img from "../../assets/images/ptf.jpg";

const Header = () => {
  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 1500);
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      id="home"
      className=" home-hero bg-[#CCCC99] text-slate-800  dark:bg-black dark:text-white"
    >
      <div className="flex flex-col justify-center items-center h-screen w-auto z-50">
        <section className="home-hero__content">
          <div className="flex items-center justify-center xxl:flex-row xs:flex-col  p-10 gap-10">
            <div className="">
              <div className="pb-4">
                <motion.h1
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-start xs:text-center font-bold heading-primary"
                >
                  SHEU AHMAD{" "}
                </motion.h1>
              </div>

              {showElement ? (
                <div>
                  <motion.p
                    className="text-primary xxl:text-start xs:text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    A full stack developer
                  </motion.p>
                  <Link to="#projects" className="xs:hidden xxl:inline" smooth>
                    <motion.a
                      className="btn btn--bg mt-2 bg-green-800 text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 1.5 }}
                    >
                      Projects
                    </motion.a>
                  </Link>

                  {""}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="rounded-full">
              <motion.img
                src={img}
                alt=""
                className="w-40 h-40 object-cover rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </div>

            {/*  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
