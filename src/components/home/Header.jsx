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
    <div id="home" className="  dark:bg-black p-16 bg-[#CCCC99]">
      <div className="dark:text-white">
        <section className="text-center justify-center flex flex-col w-full pl-4">
          <div className="mt-14 flex items-center justify-center xxl:flex-row xs:flex-col gap-10">
            <div className="">
              <div className="pb-4">
                <motion.h1
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl font-semibold"
                >
                  SHEU AHMAD{" "}
                </motion.h1>
              </div>

              {showElement ? (
                <div>
                  <motion.p
                    className="text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    A full stack developer
                  </motion.p>
                  <Link to="#projects" className="xs:hidden xxl:inline" smooth>
                    <div className="mt-5">
                      <motion.a
                        className="font-medium rounded-lg text-sm px-5 py-2.5 bg-green-900 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1.5 }}
                      >
                        Projects
                      </motion.a>
                    </div>
                  </Link>

                  {""}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
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
