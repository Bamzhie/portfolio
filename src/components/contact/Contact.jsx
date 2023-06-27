import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#CCCC99] w-full h-auto dark:bg-black dark:text-white p-4"
    >
      <div>
        <div className="flex items-center justify-center flex-col">
          <h1>CONTACT</h1>
          <div className="flex items-center justify-center">
            <div className="w-10 rounded-full mt-6 mb-4 h-1 bg-black"></div>
          </div>
          <p className=" mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            molestias.
          </p>
        </div>
        <div className="contact__form-container dark:bg-black ">
          <div className="contact__form-field ">
            <label htmlFor="name" className="contact__form-label ">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="contact__form-input dark:bg-slate-600"
            />
          </div>
          <div className="contact__form-field">
            <label htmlFor="name" className="contact__form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="contact__form-input dark:bg-slate-600"
            />
          </div>
          <div className="contact__form-field">
            <label htmlFor="message" className="contact__form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="contact__form-input dark:bg-slate-600"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className="contact__btn text-white font-bold bg-blue-500 rounded-md ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
